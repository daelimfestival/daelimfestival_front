import React, { Component } from "react";
import "./Contest.css";
import literature1 from '../images/literature1.png'

class Literature extends Component{
    render(){
        const Literature = [
            'Literature1','Literature2','Literature3','Literature4'
        ];
        /*
                const contentList=Literature.map((Literatures)=>(<div>{Literatures}</div>));
        */
        return (
            <div className="contestBox">
                <div>
                    <img src={literature1} alt="" type="button" onClick={this.openPopup}/>
                    <p>코로나에 관하여 -seoPro-</p>
                    <span>코로나의 시작부터 현재까지의 과정을 글로 담았다!</span>
                </div>
            </div>
        );
    }
}

export default Literature;