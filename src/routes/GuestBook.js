/* eslint no-restricted-globals: ["off"] */
import React from 'react';
import Header from '../common/header';
import Form from 'react-bootstrap/Form';
import { IconContext } from "react-icons";
import { FaCommentAlt } from "react-icons/fa";
import './GuestBook.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const API_LINK = "http://52.79.141.166/action/board/guest_book_data.php";
const page_add = 1;

class GuestBook extends React.Component {
    state = {
        nickname: "닉네임", //닉네임 값
        commentLength: "0", //댓글 값
        token: sessionStorage.getItem("token"),
        page: 1,
    };

    commentRegist() {
        if (!this.state.token) {
            alert("로그인 후에 이용이 가능합니다.")
            location.href = "/Login"
        }
    }

    loadFunc = () => {
        let current_url = location.href;

        let json_data = {
            current_url,
            token: this.state.token,
            page: this.state.page
        };

        let json = btoa(encodeURIComponent(JSON.stringify(json_data)));

        return axios.post(
            API_LINK,
            {
                json: json
            }
        ).then((res) => {
            const result = res.data.list

            console.log(result)
        })
    }

    InfiniteScrollfnc = () => {
        let s_height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

        let s_top = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

        let c_height = document.documentElement.clientHeight;

        if (s_top + c_height === s_height) {
            this.setState({
                page: this.state.page + page_add
            })

            this.loadFunc()
        }
    }

    componentDidMount() {
        this.loadFunc()
        window.addEventListener("scroll", this.InfiniteScrollfnc, true)
    }

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
                            <Form.Control className="input_text" type="text" placeholder="내용을 입력하세요" />
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
                            <p className="comment_length">{this.state.commentLength}</p>
                        </div>
                    </Form>
                </div>
                <div>
                    <p>{ }</p>
                </div>
            </div>
        )
    }
}

export default GuestBook;