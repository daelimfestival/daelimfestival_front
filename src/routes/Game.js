import React from "react";
import Header from "../common/header.js";
import "./Game.css";
import "animate.css";
import Progamer from "../images/progamer.png";

class Game extends React.Component {

    render() {
        return (
            <div className="game_wrap">
                <div className="game_header">
                    <Header />
                </div>
                <div className="game_content_wrap">
                    <div className="img_wrap">
                        <img src={Progamer} alt="test" />
                        <p className="progamer_name">Inonix</p>
                    </div>
                    <div className="textarea">
                        <p className="game_content_text1">대림게임클래스</p>
                        <p className="game_content_text2">배틀그라운드 세계1위 팀</p>
                        <p className="game_content_text3">
                            <span className="bold">GEN</span>
                            <span className="gold">.G</span>
                            <span className="name_emphasis">이노닉스</span>와 함께 하는 배그 강의
                        </p>
                        <p className="game_date">6월 1일</p>
                        <p className="game_time">13:00 ~ 15:00</p>
                        <div className="youtubelink">
                            <a href="https://www.youtube.com/channel/UCfFtI4fPw2P2xmgAGGFyctA/featured" rel="noreferrer" target="_blank">유튜브 채널 바로가기</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;