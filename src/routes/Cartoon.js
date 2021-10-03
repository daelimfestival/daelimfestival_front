import React, { Component } from "react";
import "./Contest.css";
import ReactPlayer from 'react-player';
import cartoon1 from '../images/cartoon1.png';
import cartoon2 from '../images/cartoon2.png';
import cartoon3 from '../images/cartoon3.png';
import cartoon4 from '../images/cartoon4.png';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import loginModal from "../common/loginModal";

const modalStyles = {
    overlay: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272727',
        /*
        backgroundColor: 'rgba(32, 32, 32, 0.9)'*/
    },
    content: {
        width: '600px',
        height: '400px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        backgroundColor: '#EBEBEB',
    }
}

const modalStyle2 = {

}

class Cartoon extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            showModal5: false
        };

        this.handleOpenModal1 = this.handleOpenModal1.bind(this);
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleOpenModal3 = this.handleOpenModal3.bind(this);
        this.handleOpenModal4 = this.handleOpenModal4.bind(this);
        this.handleOpenModal5 = this.handleOpenModal5.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal1() {
        this.setState({
            showModal1: true,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            showModal5: false,
        });
    }
    handleOpenModal2() {
        this.setState({
            showModal1: false,
            showModal2: true,
            showModal3: false,
            showModal4: false,
            showModal5: false,
        });
    } handleOpenModal3() {
        this.setState({
            showModal1: false,
            showModal2: false,
            showModal3: true,
            showModal4: false,
            showModal5: false,
        });
    } handleOpenModal4() {
        this.setState({
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: true,
            showModal5: false,
        });
    } handleOpenModal5() {
        this.setState({
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            showModal5: true,
        });
    }

    handleCloseModal() {
        this.setState({
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            showModal5: false,
        });
    }

    render(){
        const video = [
            'Video1','Video2','Video3','Video4'
        ];
        /*const contentList=video.map((videos)=>(<div className="contentList">{videos}</div>
        ));*/
        return (
            <div class="contestBox">
                <IconContext.Provider value={{
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }}>
                    <Modal
                        isOpen={this.state.showModal1}
                        style={modalStyles}
                        onRequestClose={this.handleCloseModal}
                        ariaHideApp={false}
                    >
                        <div className="closebtn">
                            <AiOutlineClose onClick={this.handleCloseModal1} />
                        </div>
                    </Modal>
                    <Modal
                        isOpen={this.state.showModal2}
                        style={modalStyles}
                        onRequestClose={this.handleCloseModal}
                        ariaHideApp={false}
                    >
                        {/*<div className="closebtn">
                            <AiOutlineClose onClick={this.handleCloseModal} />
                        </div>*/}
                    </Modal>
                    <Modal
                        isOpen={this.state.showModal3}
                        style={modalStyles}
                        onRequestClose={this.handleCloseModal}
                        ariaHideApp={false}
                    >
                        <div className="closebtn">
                            <AiOutlineClose onClick={this.handleCloseModal} />
                        </div>
                    </Modal>
                    <Modal
                        isOpen={this.state.showModal4}
                        style={modalStyles}
                        onRequestClose={this.handleCloseModal}
                        ariaHideApp={false}
                    >
                        <div className="closebtn">
                            <AiOutlineClose onClick={this.handleCloseModal} />
                        </div>
                    </Modal>
                    <Modal
                        isOpen={this.state.showModal5}
                        style={modalStyles}
                        onRequestClose={this.handleCloseModal}
                        ariaHideApp={false}
                    >
                        <div className="closebtn">
                            <AiOutlineClose onClick={this.handleCloseModal} />
                        </div>
                    </Modal>
                </IconContext.Provider>
                <div>
                    <img src={cartoon1} alt="" type="button" onClick={this.handleOpenModal1}/>
                    <p>코시국 최고의 순간들 -원대호-</p>
                    <span>코로나 시국 속에서 우리가 울고 웃었던 최고의 순간들!</span>
                </div>
                <div>
                    <img src={cartoon2} alt="" type="button" onClick={this.handleOpenModal2}/>
                    <p>내가 견뎌낸 Corona Blue -극복왕-</p>
                    <span>corona Blue(코로나로 인한 우울감)를 극복해낸 방법</span>
                </div>
                <div>
                    <img src={cartoon3} alt="" type="button" onClick={this.handleOpenModal3}/>
                    <p>돌려다오! 내 학교생활 -gkrry-</p>
                    <span>비대면 수업으로 인한 강탈당한 내 학교생활을 돌려다오!</span>
                </div>
                <div>
                    <img src={cartoon4} alt="" type="button" onClick={this.handleOpenModal4}/>
                    <p>코로나 국민지원금 넌 어떻게 쓰니? -kimPro-</p>
                    <span>국민지원금 활용하기 전 알아봐야할 사용 꿀팁!</span>
                </div>
                <div type="button" onClick={this.handleOpenModal5}>
                    dnjseoghsdnjseogh
                </div>
            </div>
        );
    }
}
export default Cartoon;