import React from "react";
// import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaGamepad } from "react-icons/fa";
import "./Game.css";
import "animate.css";

class Game extends React.Component {

    render() {
        return (
            <div>
                <IconContext.Provider value={{
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }}>
                    <div className="game">
                        <FaGamepad />
                    </div>
                </IconContext.Provider>
            </div>
        )
    }
}

export default Game;