import React, { Component } from "react";
import ReactPlayer from 'react-player'
import Header from "../common/header.js";
import "./Intro.css";
import poster1 from '../images/poster1.png';
import sele from '../images/sele.png';
import "animate.css";
import Particles from "react-particles-js";
import { particlesParams } from "./particle";

class intro extends Component {
    render() {
        return (
            <div className={'main_wrap'}>
                <Header />
                <div className={'sky'}>
                    <Particles params={particlesParams} />
                </div>
                <div className="comment">
                    <img className={'poster1 animate__animated animate__fadeInLeft'} src={poster1} alt="" />
                    <h1>2021대림대학교</h1>
                    <h2>온라인 가을 축제</h2>
                    <h3>:DAELIM ONLINE FESTIVAL</h3>
                    <h4>11.01~11.02</h4>
                    <h5 className={'animate__animated animate__fadeInUpBig'}>"별이 빛나는 밤에"</h5>
                    <h6 className={'animate__animated animate__fadeInUpBig'}>맑은 밤하늘을 수 놓을 대림캠퍼스에</h6>
                    <h6 className={'animate__animated animate__fadeInUpBig'}>여러분이 함께할 비대면 축제! 기대하시라!</h6>
                </div>
                <div className={'video'}>
                    <ReactPlayer
                        className={'player'}
                        url={'https://www.youtube.com/watch?v=L1IWrezMsIA'}
                        playing
                        controls
                        width={'80%'}
                        height={'80%'}
                    />
                </div>
                <div className={'text1'}>
                    <h1>D.F</h1>
                    <div className={'leftLine'}>
                        <h2>front 원대호</h2>
                        <h3>front 이성훈</h3>
                        <h4>back 서은기</h4>
                    </div>
                </div>
                <div className={'celebration'}>
                    <p>감사합니다!</p>
                    <h1><b>축하사</b>입니다.</h1>
                    <h2>
                        얼마나 풀밭에 이것을 위하여서, 천하를 예수는 것이다. 없으면 청춘 풀이 위하여서. 우리는 별과 찬미를 피고 뿐이다. 보내는 천하를 봄바람을 피고, 몸이 얼마나 미인을 크고 있는가? 못할 무엇을 품고 그것은 얼음에 몸이 인류의 듣는다. 것이 눈에 그들의 열락의 소담스러운 밥을 관현악이며, 황금시대다. 무엇을 피어나기 두기 황금시대를 약동하다. 무엇이 가진 그들의 피고 굳세게 앞이 부패뿐이다. 무엇을 몸이 그들은 대고, 없으면, 자신과 때문이다. 꾸며 있는 것이다.보라, 때까지 철환하였는가?

                        이상, 살 우리는 찬미를 풍부하게 풀이 사랑의 구할 때문이다. 위하여, 가지에 끓는 있다. 트고, 있을 이것은 청춘 우리 투명하되 열락의 칼이다. 불러 이것은 자신과 곳이 때에, 그들은 것이 그들에게 청춘에서만 것이다. 실로 군영과 더운지라 그리하였는가? 사라지지 무한한 속잎나고, 꽃 품으며, 실로 듣는다. 못하다 불러 끓는 사랑의 이것을 것이다. 착목한는 그림자는 밥을 그리하였는가? 살았으며, 같이, 그들의 따뜻한 청춘의 두기 무엇을 과실이 피다. 커다란 뛰노는 얼마나 피어나기 관현악이며, 반짝이는 교향악이다.
                    </h2>
                    <img src={sele} alt="" />
                </div>
                <div className={'link'}>
                    <a href={'https://www.daelim.ac.kr/intro.do'}>대림대학교 더 살펴보기 click</a>
                </div>
            </div>
        )
    }

}


export default intro;