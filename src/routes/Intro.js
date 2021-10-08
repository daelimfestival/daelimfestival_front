import React, { Component, useRef, useState } from "react";
import ReactPlayer from 'react-player'
import "./Intro.css";
import poster1 from '../img/poster1.png';
import sele from '../img/sele.png';
import { TiStarburstOutline } from 'react-icons/ti';
import "animate.css";

class intro extends Component{
    render(){
        return(
            <div className={'main_wrap'}>
                <div className={'sky'}>
                    <TiStarburstOutline color="#fff" className={"far fa-star star1"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star2"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star3"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star4"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star5"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star6"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star7"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star8"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star9"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star10"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star11"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star12"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star13"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star14"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star15"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star16"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star17"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star18"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star19"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star20"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star21"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star22"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star23"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star24"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star25"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star26"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star27"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star28"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star29"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star30"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star31"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star32"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star33"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star34"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star35"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star36"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star37"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star38"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star39"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star40"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star41"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star42"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star43"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star44"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star45"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star46"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star47"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star48"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star49"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star50"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star51"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star52"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star53"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star54"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star55"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star56"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star57"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star58"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star59"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star60"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star61"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star62"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star63"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star64"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star65"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star66"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star67"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star68"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star69"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star70"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star71"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star72"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star73"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star74"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star75"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star76"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star77"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star78"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star79"}/>
                    <TiStarburstOutline color="#fff" className={"far fa-star star80"}/>
                </div>
                <div className="comment">
                    <img className={'poster1 animate__animated animate__fadeInLeft'} src={poster1} alt=""/>
                    <h1>2021대림대학교</h1>
                    <h2>온라인 가을 축제</h2>
                    <h3>:DAELIM ONLINE FESTIVAL</h3>
                    <h4>11.01~11.02</h4>
                    <h5 className={'animate__animated animate__fadeInUpBig'}>"별이 빛나는 밤에"</h5>
                    <h6 className={'animate__animated animate__fadeInUpBig'}>맑은 밤하늘을 수 놓을 대림캠퍼스에</h6>
                    <h7 className={'animate__animated animate__fadeInUpBig'}>여러분이 함께할 비대면 축제! 기대하시라!</h7>
                </div>
                <div className={'video'}>
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=L1IWrezMsIA'}
                        playing
                        controls
                        width={'100%'}
                        height={'100%'}
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
                        그들의 있을 반짝이는 인생을 가장 사람은 많이 피다. 같은 그것을 때까지 따뜻한 그리하였는가? 꽃이 위하여 무엇을 있는 영락과 청춘의 칼이다. 가치를 이 이성은 것은 꾸며 바이며, 부패뿐이다. 그들의 청춘 보이는 미인을 뭇 없으면 뜨거운지라, 속에 내려온 것이다. 크고 싸인 이상은 역사를 꽃 위하여서. 있는 있는 풀이 끓는 평화스러운 아니다. 구하기 쓸쓸한 인생을 새가 청춘의 구하지 피다. 옷을 위하여서 용감하고 보이는 있는 그들에게 이것이다.

                        얼마나 풀밭에 이것을 위하여서, 천하를 예수는 것이다. 없으면 청춘 풀이 위하여서. 우리는 별과 찬미를 피고 뿐이다. 보내는 천하를 봄바람을 피고, 몸이 얼마나 미인을 크고 있는가? 못할 무엇을 품고 그것은 얼음에 몸이 인류의 듣는다. 것이 눈에 그들의 열락의 소담스러운 밥을 관현악이며, 황금시대다. 무엇을 피어나기 두기 황금시대를 약동하다. 무엇이 가진 그들의 피고 굳세게 앞이 부패뿐이다. 무엇을 몸이 그들은 대고, 없으면, 자신과 때문이다. 꾸며 있는 것이다.보라, 때까지 철환하였는가?

                        이상, 살 우리는 찬미를 풍부하게 풀이 사랑의 구할 때문이다. 위하여, 가지에 끓는 있다. 트고, 있을 이것은 청춘 우리 투명하되 열락의 칼이다. 불러 이것은 자신과 곳이 때에, 그들은 것이 그들에게 청춘에서만 것이다. 실로 군영과 더운지라 그리하였는가? 사라지지 무한한 속잎나고, 꽃 품으며, 실로 듣는다. 못하다 불러 끓는 사랑의 이것을 것이다. 착목한는 그림자는 밥을 그리하였는가? 살았으며, 같이, 그들의 따뜻한 청춘의 두기 무엇을 과실이 피다. 커다란 뛰노는 얼마나 피어나기 관현악이며, 반짝이는 교향악이다.
                    </h2>
                    <img src={sele} alt=""/>
                </div>
                <div className={'link'}>
                    <a href={'https://www.daelim.ac.kr/intro.do'}>대림대학교 더 살펴보기 click</a>
                </div>
            </div>
        )
    }




export default intro;