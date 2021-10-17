import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/header.js";
import { IconContext } from "react-icons";
import { AiOutlineClose, AiFillTrophy } from "react-icons/ai";
import Modal from "react-modal";
import StampPage from "../images/stamppage.png";
import GuestBookImage from "../images/guestbook.png";
import StampImage from "../images/stamp.png";
import GamePad from "../images/game.png";
import "./Home.css";
import "animate.css";

const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(32, 32, 32, 0.9)'
    },
    content: {
        top: '100px',
        margin: '0 auto',
        textAlign: 'center',
        width: '566px',
        height: '785px',
        padding: '0',
        backgroundImage: 'url(' + StampPage + ')',
        backgroundSize: 'contain',
    }
}

class Home extends React.Component {
    state = {
        showModal: false
    };

    handleOpenModal = this.handleOpenModal.bind(this);
    handleCloseModal = this.handleCloseModal.bind(this);

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div id="wrap">
                <Header />
                <div className="bgimg">
                    <div className="stamp animate__animated animate__bounce animate__infinite animate__slower" onClick={this.handleOpenModal}>
                        <img src={StampImage} alt="stamp"/>
                    </div>
                    <IconContext.Provider value={{
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }}>
                        <Modal
                            isOpen={this.state.showModal}
                            style={modalStyles}
                            onRequestClose={this.handleCloseModal}
                            ariaHideApp={false}
                        >
                            <div className="closebtn">
                                <AiOutlineClose onClick={this.handleCloseModal} />
                            </div>
                        </Modal>
                        <div className="game animate__animated animate__jello animate__infinite animate__slower">
                            <Link to="Game">
                                <img src={GamePad} alt="대림게임클래스" />
                            </Link>
                        </div>
                        <div className="contest animate__animated animate__heartBeat animate__infinite animate__slower">
                            <Link to="Contest">
                                <AiFillTrophy />
                            </Link>
                        </div>
                        <div className="guestbook animate__animated animate__swing animate__infinite animate__slower">
                            <Link to="Guest-Book">
                                <img src={GuestBookImage} alt="방명록" />
                            </Link>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        )
    }
}

export default Home;