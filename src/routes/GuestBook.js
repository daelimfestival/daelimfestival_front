/* eslint no-restricted-globals: ["off"] */
import React from 'react';
import Header from '../common/header';
import Form from 'react-bootstrap/Form';
import { IconContext } from "react-icons";
import { FaCommentAlt } from "react-icons/fa";
import './GuestBook.css'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import * as fnc from "../common/commonFunc.js";

const API_LINK = "http://52.79.141.166/action/board/guest_book_data.php";

class GuestBook extends React.Component {
    state = {
        token: sessionStorage.getItem("token"),
        list_data: [],
        total: 0,
        page: 1,
        more_data: true,
        inputContent: "",
        login_modal: false
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
        ).then(res => {
            this.setState({
                total: this.state.total === 0 ? res.data.total : 0,
                list_data: [...this.state.list_data, ...res.data.list],
                page: this.state.page + 1
            })
        }
        );
    };

    commentRegist() {
        if (!this.state.token) {
            this.setState({
                login_modal: true
            })
        } else {
            this.getData();
        }
    }

    getData = () => {
        let current_url = location.href;

        let json_data = {
            current_url,
            token: this.state.token,
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
                    <div className="alert_div">
                        <Alert show={this.state.login_modal} variant="primary" className={"animate__animated animate__fadeInUp"}>
                            <CloseButton onClick={() => this.setState({ login_modal: false })} />
                            <Alert.Heading>로그인이 필요합니다.</Alert.Heading>
                            <hr />
                            <div className="d-flex justify-content-around">
                                <Button onClick={() => {
                                    this.setState({ login_modal: false });
                                    location.replace('http://localhost:3000/Login');
                                }} variant="outline-success">
                                    로그인
                                </Button>
                                <Button onClick={() => this.setState({ login_modal: false })} variant="outline-danger">
                                    취소
                                </Button>
                            </div>
                        </Alert>
                    </div>

                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Control className="input_text" type="text" value={this.state.inputContent} onChange={this.onChangeInputContent} maxLength="100" placeholder="내용을 입력하세요" />
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
                    <InfiniteScroll
                        dataLength={this.state.list_data.length}
                        next={this.fetchData}
                        hasMore={this.state.more_data}
                    >
                        {this.state.list_data.map(brewery => (
                            <div className="guestbook_content_area" key={brewery.idx}>
                                <p className="guestbook_content_nickname">익명</p>
                                <p className="guestbook_content_text">{brewery.content}</p>
                                <p className="guestbook_writedate">{brewery.write_date}</p>
                            </div>
                        ))}
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default GuestBook;