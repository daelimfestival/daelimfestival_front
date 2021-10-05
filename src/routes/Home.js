import React from "react";
// import { executeQuery } from "../common/commonFunc";
import { Link } from "react-router-dom";
import Header from "../common/header.js";
// import Stamp from "./Stamp.js";
import { IconContext } from "react-icons";
import { FaStamp, FaGamepad } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import StampPage from "../images/stamppage.png";
import "./Home.css";
import "animate.css";

const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(32, 32, 32, 0.9)'
    },
    content: {
        top: '100px',
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
                <IconContext.Provider value={{
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }}>
                    <div className="stamp animate__animated animate__bounce animate__infinite" onClick={this.handleOpenModal}>
                        <FaStamp />
                    </div>
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
                    <div className="game">
                        <Link to="Game">
                            <FaGamepad />
                        </Link>
                    </div>
                </IconContext.Provider>
            </div>
        )
    }
}

export default Home;