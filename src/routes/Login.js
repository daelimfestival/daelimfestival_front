/* eslint no-restricted-globals: ["off"] */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from "../common/header.js";
import Logo from "../images/login.png";
import * as fnc from "../common/commonFunc.js";
import "./Login.css";

const Login = (props) => {
    const [inputId, setInputId] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const onChangeInputId = (e) => {
        setInputId(e.target.value);
    };

    const onChangeInputPassword = (e) => {
        setInputPassword(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    };

    const getData = () => {
        let current_url = location.href;
        let json_data = '{"current_url":"' + current_url + '","id":' + inputId + ',"password":"' + inputPassword + '"}';

        let json = btoa(encodeURIComponent(json_data));

        fnc.executeQuery({
            url: "action/member/login.php",
            data: {
                json: json
            },
            success: (res) => {
                sessionStorage.setItem("token", res.token);
                location.replace("/");
            },
        });
    };

    return (
        <div>
            <Header />
            <div className="login_wrap">
                <Form className="login_form" onSubmit={onSubmit}>
                    <div className="login_logo">
                        <img src={Logo} alt="daelim logo" />
                    </div>
                    <Form.Group controlId="member_id">
                        <Form.Control className="login_inputid" type="text" placeholder="ID" value={inputId} onChange={onChangeInputId} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control className="login_inputpwd" type="password" placeholder="Password" value={inputPassword} onChange={onChangeInputPassword} />
                    </Form.Group>
                    <Button className="login_button" variant="primary" type="submit">
                        LOGIN
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;