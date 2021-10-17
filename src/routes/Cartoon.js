import React, { Component } from "react";
import "./Contest.css";
// import ReactPlayer from 'react-player';
import cartoon1 from '../images/cartoon1.png';
import cartoon2 from '../images/cartoon2.png';
import cartoon3 from '../images/cartoon3.png';
import cartoon4 from '../images/cartoon4.png';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
// import loginModal from "../common/loginModal";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
class Cartoon extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            showModal5: false,
            radioGroup : {
                m1: false,
                m2: false,
                m3: false,
                m4: false,
            }
        };
        this.handleRadio = this.handleRadio.bind(this);
        this.handleOpenModal1 = this.handleOpenModal1.bind(this);
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleOpenModal3 = this.handleOpenModal3.bind(this);
        this.handleOpenModal4 = this.handleOpenModal4.bind(this);
        this.handleOpenModal5 = this.handleOpenModal5.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleRadio(event){
        let obj = {}
        obj[event.target.value] = event.target.checked
        this.setState({radioGroup:obj})
        console.log(obj);
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
        return (
            <form className="contestBox">
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
                        <div className="closebtn">
                            <AiOutlineClose onClick={this.handleCloseModal} />
                        </div>
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
                <div className='img1'>
                    <img src={cartoon1} alt="" type="button" onClick={this.handleOpenModal1}/>
                    <p>코시국 최고의 순간들 -원대호-</p>
                    <span>코로나 시국 속에서 우리가 울고 웃었던 최고의 순간들!</span>
                    <input
                        className='clickE1'
                        type="radio"
                        name='radioGroup'
                        value='m1'
                        checked={this.state.radioGroup['m1']}
                        onChange={this.handleRadio}
                    />
                </div>
                <div className='img2'>
                    <img src={cartoon2} alt="" type="button" onClick={this.handleOpenModal2}/>
                    <p>내가 견뎌낸 Corona Blue -극복왕-</p>
                    <span>corona Blue(코로나로 인한 우울감)를 극복해낸 방법</span>
                    <input
                        className='clickE1'
                        type="radio"
                        name='radioGroup'
                        value='m2'
                        checked={this.state.radioGroup['m2']}
                        onChange={this.handleRadio}
                    />
                </div>
                <div className='img3'>
                    <img
                        src={cartoon3}
                        alt=""
                        type="button"
                        onClick={this.handleOpenModal3}
                    />
                    <p>돌려다오! 내 학교생활 -gkrry-</p>
                    <span>비대면 수업으로 인한 강탈당한 내 학교생활을 돌려다오!</span>
                    <input
                        className='clickE1'
                        type="radio"
                        name='radioGroup'
                        value='m3'
                        checked={this.state.radioGroup['m3']}
                        onChange={this.handleRadio}
                    />
                </div>
                <div className='img4'>
                    <img
                        src={cartoon4}
                        alt=""
                        type="button"
                        onClick={this.handleOpenModal4}
                    />
                    <p>코로나 국민지원금 넌 어떻게 쓰니? -kimPro-</p>
                    <span>국민지원금 활용하기 전 알아봐야할 사용 꿀팁!</span>
                    <input
                        className='clickE1'
                        type="radio"
                        name='radioGroup'
                        value='m4'
                        checked={this.state.radioGroup['m4']}
                        onChange={this.handleRadio}
                    />
                </div>
                <div className="d-grid gap-2">
                    <Button type="submit" variant="secondary" size="lg">
                        투표하기
                    </Button>
                </div>
            </form>
        );
    }
}
export default Cartoon;