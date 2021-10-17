/* eslint no-restricted-globals: ["off"] */
import React from 'react';
import Sidebar from "react-sidebar";
import { IconContext } from "react-icons";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as fnc from "../common/commonFunc.js";
import './header.css';

class Header extends React.Component {
    state = {
        sidebarOpen: false,
        title: "",
        token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null,
        sync: sessionStorage.getItem("token") ? "로그아웃" : "로그인"
    };

    onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    componentDidMount() {
        if (location.href.includes("Game") === true) {
            this.setState({ title: "대림 게임 클래스"});
        } else if(location.href.includes("Guest") === true) {
            this.setState({ title: "방명록"});
        } else if(location.href.includes("Contest") === true) {
            this.setState({ title: "공모전 "});
        } else {
            this.setState({ title: "Daelim Festival"});
        }
    }

    logOut(log_token) {
        let current_url = location.href;

        let json_data = {
            current_url,
            token : log_token
        };

        let json = btoa(encodeURIComponent(JSON.stringify(json_data)));

        fnc.executeQuery({
            url: "action/member/logout.php",
            data: {
                json: json
            },
            success: (res) => {
                sessionStorage.removeItem("token");
                window.location.reload()
            }
        });

        sessionStorage.removeItem("token");
        window.location.reload()
    }

    logInOut() {
        if (this.state.sync === "로그인") {
            return (
                <Link to="/Login">
                    <p className="sidebar loginpage">{this.state.sync}</p>
                </Link>
            )
        } else if (this.state.sync === "로그아웃") {
            return (
                <Link to="/">
                    <p className="sidebar loginpage" onClick={() => this.logOut(this.state.token)}>{this.state.sync}</p>
                </Link>
            )
        }
    }

    render() {
        return (
            <div className="header">
                <Sidebar
                    sidebar={
                        <div>
                            <Link to="/intro">
                                <p className="sidebar">소개</p>
                            </Link>
                            <Link to="/Guest-Book">
                                <p className="sidebar">방명록</p>
                            </Link>
                            <Link to="/Contest">
                                <p className="sidebar">공모전</p>
                            </Link>
                            <Link to="/Game">
                                <p className="sidebar">대림게임토너먼트</p>
                            </Link>
                            {this.logInOut()}
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
                        height: "100%"
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