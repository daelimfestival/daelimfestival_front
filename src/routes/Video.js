import React, { Component } from "react";
import "./Contest.css";
import video1 from '../images/video1.png';

class Video extends Component {
    render() {
        return (
            <div className="contestBox">
                <div>
                    <img src={video1} alt="" />
                    <p>[대림 시사콜콜] 대림대 현 상황은? -cultureLand@naver.com-</p>
                    <span>대림대 코로나속에서 현 상황을 문상기자가 전한다!</span>
                </div>

            </div>
        );
    }
}
export default Video;