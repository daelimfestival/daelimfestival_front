import React, { Component, useRef, useState } from "react";
import ReactPlayer from 'react-player'
import "./Intro.css";
import poster1 from '../img/poster1.png';
import sele from '../images/sele.png';
import { TiStarburstOutline } from 'react-icons/ti';
import "animate.css";

class intro extends Component{
    render(){
        return(
            <div className='main_wrap'>

                <div className="star animate__zoomOut">
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
                    <h1 className='HALLO'>&nbsp;HALLO!</h1>
                    <p>:DAELIM FESTIVAL</p>
                    <p>"별이 빛나는 밤에"</p>
                    <p>2021대림대학교</p>
                </div>
                <div  className='video'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=L1IWrezMsIA' playing controls />
                </div>

                <img className='poster1' src={poster1} alt=""/>
                <div className='text1'>
                    <p>AtristLineUp</p>
                    <p>Guest-part1: 블랙핑크, 소녀시대, 일병 비와이</p>
                    <p>Guest-part2: 에스파, 한효주, 한지민</p>
                </div>
                <img className='sky' src={sky} alt=""/>
                <div className='daelimlink'>
                    <a href='https://www.daelim.ac.kr/intro.do'>대림대학교 더 살펴보기 click</a>
                </div>
            </div>
        )
    }
}


export default intro;