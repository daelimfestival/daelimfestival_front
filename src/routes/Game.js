import React from "react";
import Header from "../common/header.js";
import "./Game.css";
import "animate.css";
import Test from "../images/progamer.png";

class Game extends React.Component {

    render() {
        return (
            <div className="game_wrap">
                <div className="game_header">
                    <Header />
                </div>
                <div className="img_wrap">
                    <img src={Test} alt="test"/>
                </div>
            </div>
        )
    }
}

export default Game;