/* eslint no-restricted-globals: ["off"] */
import React from 'react';
import Header from '../common/header';
import Form from 'react-bootstrap/Form';
import { IconContext } from "react-icons";
import { FaCommentAlt } from "react-icons/fa";
import './GuestBook.css'
import Button from 'react-bootstrap/Button';
import InfiniteScroll from 'react-infinite-scroller';

const api = "";
const limit = 4;

class GuestBook extends React.Component {
    state = {
        nickname: "닉네임", //닉네임 값
        commentLength: "0", //댓글 값
        token: sessionStorage.getItem("token"),
        offset: 0,
        isLoading: false
    };

    commentRegist() {
        if (!this.state.token) {
            alert("로그인 후에 이용이 가능합니다.")
            location.href = "/Login"
        }
    }

    loadFunc = () => {
        fetch(`${api}/ootds?offset=${this.state.offset}&limit=${limit}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    cards: [...this.state.cards, ...res.ootd_list],
                    offset: this.state.offset + limit,
                });
            })
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
                            <Form.Control className="input_text" type="text" placeholder="내용을 입력하세요"/>
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
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.loadFunc}
                            hasMore={true || false}
                            loader={<div className="loader" key={0} />}
                            useWindow={false}
                        >
                            <p className="comments">test</p>
                        </InfiniteScroll>
                    </Form>
                </div>
            </div>
        )
    }
}

export default GuestBook;