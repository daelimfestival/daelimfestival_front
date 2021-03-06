/* eslint no-restricted-globals: ["off"] */
import React, { useState } from "react";
import "./Contest.css";
import cartoon1 from '../images/cartoon1.png';
import cartoon2 from '../images/cartoon2.png';
import cartoon3 from '../images/cartoon3.png';
import cartoon4 from '../images/cartoon4.png';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as fnc from "../common/commonFunc.js";
import "animate.css";

const modalStyles = {
    overlay: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272727'
    },
    content: {
        position: 'absolute',
        left: '20%',
        width: '800px',
        height: '600px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        backgroundColor: '#EBEBEB',
    }
};

function Cartoon(props) {
    const [handleRadio, setHandleRadio] = useState(
        {
            m1: false,
            m2: false,
            m3: false,
            m4: false
        }
    );

    const onHandleRadio = (checkradio_num) => {
        const chkradio = [false, false, false, false];

        chkradio[checkradio_num] = true;

        setHandleRadio({
            m1: chkradio[0],
            m2: chkradio[1],
            m3: chkradio[2],
            m4: chkradio[3],
        });
    }

    const [handleOpenModal, setHandleOpenModal] = useState(
        {
            showmodal1: false,
            showmodal2: false,
            showmodal3: false,
            showmodal4: false,
        }
    );

    const onHandleOpenModal = (showmodal_num) => {
        const chkomdal = [false, false, false, false];

        chkomdal[showmodal_num] = true;

        setHandleOpenModal({
            showmodal1: chkomdal[0],
            showmodal2: chkomdal[1],
            showmodal3: chkomdal[2],
            showmodal4: chkomdal[3],
        });
    }

    const onHandleCloseModal = () => {
        setHandleOpenModal({
            showmodal1: false,
            showmodal2: false,
            showmodal3: false,
            showmodal4: false,
        })
    }

    const { m1, m2, m3, m4 } = handleRadio;
    const { showmodal1, showmodal2, showmodal3, showmodal4 } = handleOpenModal;

    const [show, setShow] = useState(false);

    const vote = () => {
        let current_url = location.href;

        let token = sessionStorage.getItem("token");

        let radio_value = m1 === true ? "m1" : (m2 === true ? "m2" : (m3 === true ? "m3" : (m4 === true ? "m4" : null)))

        if (!token) {
            setShow(true);

            return 0;
        } else if (!radio_value) {
            alert("????????? ????????? ??????????????????");

            return 0;
        }

        let json_data = {
            current_url,
            token: token,
            vote: radio_value
        };

        let json = btoa(encodeURIComponent(JSON.stringify(json_data)));

        fnc.executeQuery({
            url: "action/board/vote.php",
            data: {
                json: json
            },
            success: (res) => {
                alert(res.msg);
                location.reload();
            },
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        vote();
    }

    return (
        <form className="contestBox" onSubmit={onSubmit}>
            <IconContext.Provider value={{
                style: {
                    width: "100%",
                    height: "100%"
                }
            }}>
                <Modal
                    isOpen={showmodal1}
                    style={modalStyles}
                    onRequestClose={onHandleCloseModal}
                    ariaHideApp={false}
                >
                    <div className="closebtn">
                        <AiOutlineClose onClick={onHandleCloseModal} />
                    </div>
                </Modal>

                <Modal
                    isOpen={showmodal2}
                    style={modalStyles}
                    onRequestClose={onHandleCloseModal}
                    ariaHideApp={false}
                >
                    <div className="closebtn">
                        <AiOutlineClose onClick={onHandleCloseModal} />
                    </div>
                </Modal>

                <Modal
                    isOpen={showmodal3}
                    style={modalStyles}
                    onRequestClose={onHandleCloseModal}
                    ariaHideApp={false}
                >
                    <div className="closebtn">
                        <AiOutlineClose onClick={onHandleCloseModal} />
                    </div>
                </Modal>

                <Modal
                    isOpen={showmodal4}
                    style={modalStyles}
                    onRequestClose={onHandleCloseModal}
                    ariaHideApp={false}
                >
                    <div className="closebtn">
                        <AiOutlineClose onClick={onHandleCloseModal} />
                    </div>
                </Modal>
            </IconContext.Provider>
            <div className='img1'>
                <img
                    src={cartoon1}
                    alt=""
                    type="button"
                    onClick={() => onHandleOpenModal(0)}
                />
                <p>????????? ????????? ????????? -?????????-</p>
                <span>????????? ?????? ????????? ????????? ?????? ????????? ????????? ?????????!</span>
                <input
                    className='clickE1'
                    type="radio"
                    name='radioGroup'
                    value='m1'
                    checked={m1}
                    onChange={() => onHandleRadio(0)}
                />
            </div>

            <div className='img2'>
                <img
                    src={cartoon2}
                    alt=""
                    type="button"
                    onClick={() => onHandleOpenModal(1)}
                />
                <p>?????? ????????? Covid Blue -?????????-</p>
                <span>corona Blue(???????????? ?????? ?????????)??? ???????????? ??????</span>
                <input
                    className='clickE1'
                    type="radio"
                    name='radioGroup'
                    value='m2'
                    checked={m2}
                    onChange={() => onHandleRadio(1)}
                />
            </div>

            <div className='img3'>
                <img
                    src={cartoon3}
                    alt=""
                    type="button"
                    onClick={() => onHandleOpenModal(2)}
                />
                <p>????????????! ??? ???????????? -gkrry-</p>
                <span>????????? ???????????? ?????? ???????????? ??? ??????????????? ????????????!</span>
                <input
                    className='clickE1'
                    type="radio"
                    name='radioGroup'
                    value='m3'
                    checked={m3}
                    onChange={() => onHandleRadio(2)}
                />
            </div>

            <div className='img4'>
                <img
                    src={cartoon4}
                    alt=""
                    type="button"
                    onClick={() => onHandleOpenModal(3)}
                />
                <p>????????? ??????????????? ??? ????????? ??????? -kimPro-</p>
                <span>??????????????? ???????????? ??? ??????????????? ?????? ??????!</span>
                <input
                    className='clickE1'
                    type="radio"
                    name='radioGroup'
                    value='m4'
                    checked={m4}
                    onChange={() => onHandleRadio(3)}
                />
            </div>

            <div className="d-grid gap-2">
                <Button type="submit" variant="secondary" size="lg">
                    ????????????
                </Button>
            </div>

            <Alert show={show} variant="dark" className={"animate__animated animate__fadeInUp"}>
                <CloseButton onClick={() => setShow(false)} />
                <Alert.Heading>???????????? ???????????????.</Alert.Heading>
                <hr />
                <div className="d-flex justify-content-around">
                    <Button onClick={() => {
                        setShow(false);
                        location.replace('/Login');
                    }} variant="outline-success">
                        ?????????
                    </Button>
                    <Button onClick={() => setShow(false)} variant="outline-danger">
                        ??????
                    </Button>
                </div>
            </Alert>
        </form>

    );
}

export default Cartoon;