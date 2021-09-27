import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from "../common/header.js";
import Logo from "../images/login.png";
import { executeQuery } from "../common/commonFunc.js";
import "./Login.css";

class Login extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="login_wrap">
                    <Form className="login_form">
                        <div className="login_logo">
                            <img src={Logo} alt="daelim logo" />
                        </div>
                        <Form.Group controlId="member_id">
                            <Form.Control className="login_inputid" type="text" placeholder="ID" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control className="login_inputpwd" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="login_button" variant="primary" type="button" onClick={executeQuery}>
                            LOGIN
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;