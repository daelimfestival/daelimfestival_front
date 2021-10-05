import React from 'react';
import "animate.css";
import "./Stamp.css";
import { IconContext } from "react-icons";
import { FaStamp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import StampPage from "../images/stamppage.png";

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

class Stamp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
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
                </IconContext.Provider>
            </div>
        );
    }
}