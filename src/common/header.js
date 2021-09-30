import React from 'react';
// import PropTypes from 'prop-types'
import Sidebar from "react-sidebar";
import { IconContext } from "react-icons";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
// import * as fnc from "../common/commonFunc.js";
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            title: "Daelim Festival",
            token: "",
            loginText: ""
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        // this.sessionYN = this.sessionYN.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    onChangeToken(e) {
        this.setState({ token: sessionStorage.getItem('token') });
        console.log(this.state.token);
    }

    // getData() {
    //     let current_url = location.href;
    //     let json_data = '{"current_url":"' + current_url + '","id":' + inputId + ',"password":"' + inputPassword + '"}';

    //     let json = btoa(encodeURIComponent(json_data));

    //     fnc.executeQuery({
    //         url: "action/member/login.php",
    //         data: {
    //             json: json
    //         },
    //         success: (res) => {
    //             sessionStorage.setItem("token", res.token);
    //             location.replace("/");
    //         },
    //     });
    // }

    // onSubmit(e) {
    //     e.preventDefault();
    //     getData();
    // }

    sessionYN() {
        if (this.state.token) {
            this.setState({ loginText: "로그인" });
        } else {
            this.setState({ loginText: "로그아웃" });
        }
    }

    render() {
        return (
            <div className="header">
                <Sidebar
                    sidebar={
                        <div>
                            <Link to="/Goods">
                                <p className="sidebar">굿즈</p>
                            </Link>
                            <Link to="/Guest-Book">
                                <p className="sidebar">방명록</p>
                            </Link>
                            <Link to="/Game">
                                <p className="sidebar">대림게임토너먼트</p>
                            </Link>
                            <Link to="/Login">
                                <p className="sidebar loginpage">{this.state.token}</p>
                            </Link>
                        </div>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{
                        sidebar: {
                            background: "white",
                            width: "300px"
                        },
                        overlay: {
                            backgroundColor: "rgba(0, 0, 0, 0.6)"
                        }
                    }}
                >
                </Sidebar>
                <IconContext.Provider value={{
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }}>
                    <div className="hamburger" onClick={() => this.onSetSidebarOpen(true)}>
                        <AiOutlineMenu />
                    </div>
                </IconContext.Provider>
                <p className="title">{this.state.title}</p>
                <IconContext.Provider value={{
                    style: {
                        width: "100%",
                        height: "100%",
                        color: "black"
                    }
                }}>
                    <div className="home">
                        <Link to="/">
                            <AiFillHome />
                        </Link>
                    </div>
                </IconContext.Provider>
            </div>
        );
    }
}

Sidebar.propTypes = {}

export default Header;