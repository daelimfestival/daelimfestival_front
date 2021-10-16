/* eslint no-restricted-globals: ["off"] */
import React from 'react';
import Header from '../common/header';
import Form from 'react-bootstrap/Form';
import { IconContext } from "react-icons";
import { FaCommentAlt } from "react-icons/fa";
import './GuestBook.css'
import Button from 'react-bootstrap/Button';
import { useInView } from 'react-intersection-observer';

class GuestBook extends React.Component {
    state = {
        nickname: "", //닉네임 값
        comment: "test", //댓글 값
        token: sessionStorage.getItem("token")
    };

    commentRegist() {
        if (!this.state.token) {
            alert("로그인 후 이용이 가능합니다.");
            location.href = "/Login";
        }
    }

    render() {
        return (
            <div className="guestbook_wrap">
                <div className="guestbook_header">
                    <Header />
                </div>
                <div className="guestbook_content_wrap">
                    <Form>
                        <Form.Group>
                            <Form.Control className="input_nickname" type="text" placeholder="닉네임" value={this.state.nickname} />
                            <Form.Control className="input_text" type="text" placeholder="내용을 입력하세요"/>
                            <Button className="regist_button" variant="primary" type="submit" onClick={() => this.commentRegist()}>
                                등록
                            </Button>
                        </Form.Group>
                        <Form.Group>
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
                            <span className="comment_length"></span>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

export default GuestBook;