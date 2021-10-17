/* eslint no-restricted-globals: ["off"] */
import React from 'react';
import Header from '../common/header';
import Form from 'react-bootstrap/Form';
import { IconContext } from "react-icons";
import { FaCommentAlt } from "react-icons/fa";
import './GuestBook.css'
import Button from 'react-bootstrap/Button';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import * as fnc from "../common/commonFunc.js";

const API_LINK = "http://52.79.141.166/action/board/guest_book_data.php";

class GuestBook extends React.Component {
    state = {
        nickname: "익명", //닉네임 값
        token: sessionStorage.getItem("token"),
        list_data: [],
        total: 0,
        page: 1,
        more_data: true,
        inputContent: ""
    };

    componentDidMount() {
        this.fetchData()
    }

    onChangeInputContent = (e) => {
        this.setState({
            inputContent: e.target.value
        })
    }

    fetchData = async () => {
        let current_url = location.href;

        let json_data = {
            current_url,
            token: this.state.token,
            page: this.state.page
        };

        let json = btoa(encodeURIComponent(JSON.stringify(json_data)));

        await axios.post(
            API_LINK,
            {
                json: json
            }
        ).then(res =>
            this.setState({
                total: this.state.total === 0 ? res.data.total : 0,
                list_data: [...this.state.list_data, ...res.data.list],
                page: this.state.page + 1
            })
        );
    };

    commentRegist() {
        if (!this.state.token) {
            alert("로그인 후에 이용이 가능합니다.")
            location.href = "/Login"
        } else {
            this.getData();
        }
    }

    getData = () => {
        let current_url = location.href;

        let json_data = {
            current_url,
            token : this.state.token,
            content: this.state.inputContent
        };

        let json = btoa(encodeURIComponent(JSON.stringify(json_data)));

        fnc.executeQuery({
            url: "action/board/guest_book.php",
            data: {
                json: json
            },
            success: (res) => {
                alert(res.msg);
                location.reload();
            },
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="guestbook_wrap">
                <div className="guestbook_header">
                    <Header />
                </div>
                <div className="guestbook_content_wrap">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <p className="nickname">{this.state.nickname}</p>
                            <Form.Control className="input_text" type="text" value={this.state.inputContent} onChange={this.onChangeInputContent} placeholder="내용을 입력하세요" />
                            <div className="regist_button_wrap">
                                <Button className="regist_button" variant="primary" type="submit" onClick={() => this.commentRegist()}>
                                    등록
                                </Button>
                            </div>
                        </Form.Group>
                        <div className="comment_length_wrap">
                            <IconContext.Provider value={{
                                style: {
                                    width: "100%",
                                    height: "100%"
                                }
                            }}>
                                <div className="commenticon">
                                    <FaCommentAlt />
                                </div>
                            </IconContext.Provider>
                            <p className="comment_length">{this.state.total}</p>
                        </div>
                    </Form>
                </div>
                <InfiniteScroll
                    dataLength={this.state.list_data.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.more_data}
                    loader={<h4>Loading...</h4>}
                >
                    {this.state.list_data.map(brewery => (
                        <ul className="user" key={brewery.idx}>
                            <li>내용: {brewery.content}</li>
                            <li>작성날짜: {brewery.write_date}</li>
                        </ul>
                    ))}
                </InfiniteScroll>
            </div>
        )
    }
}

export default GuestBook;