import React from 'react';
import Header from '../common/header';
import Form from 'react-bootstrap/Form';
import { FaCommentAlt } from "react-icons/fa";
import './GuestBook.css'
import Button from 'react-bootstrap/Button';

class GuestBook extends React.Component {
    state = {
        nickname: "",
        comment: "",
    };

    componentDidMount() {
        // if () {
            
        // }
    }

    render() {
        return (
            <div className="guestbook_wrap">
                <div className="guestbook_header">
                    <Header />
                </div>
                <div className="guestbook_content_wrap">
                    <Form>
                        <Form.Group controlId="">
                            <Form.Control className="input_nickname" type="text" placeholder={this.state.nickname} />
                            <Form.Control className="input_text" type="text" placeholder="내용을 입력하세요"/>
                            <Button className="regist_button" variant="primary" type="submit">
                                등록
                            </Button>
                        </Form.Group>
                        <Form.Group>
                            <p className="commentlength">{this.state.comment}</p>
                            <Form.Control />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

export default GuestBook;