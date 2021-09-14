import React, { useState } from 'react';
import "animate.css";
import "./Stamp.css";
import { IconContext } from "react-icons";
import { FaStamp } from "react-icons/fa";
import Modal from "react-modal";

const modalStyles = {
    overlay: {
        zIndex: 2,
        backgroundColor: 'rgba(32, 32, 32, 0.9)'
    },
    content: {
        textAlign: 'center',
        width: '960px',
        height: '720px'
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
                    <div className="stamp animate__animated animate__bounce infinite" onClick={this.handleOpenModal}>
                        <FaStamp />
                    </div>
                    <Modal
                        isOpen={this.state.showModal}
                        style={modalStyles}
                    >
                        <button onClick={this.handleCloseModal}>Close</button>
                    </Modal>
                </IconContext.Provider>
            </div>
        );
    }
}

export default Stamp;