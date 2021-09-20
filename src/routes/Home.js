import React from "react";
// import { executeQuery } from "../common/commonFunc";
import { Link } from "react-router-dom";
import Header from "../common/header.js";
import Stamp from "./Stamp.js";
import Game from "./Game.js";
import "./Home.css";
import "animate.css";
// import Map from "../images/map.jpg";

class Home extends React.Component {

    render() {
        return (
            <div id="wrap">
                <Header />
                <Stamp />
                <Link to="/Daelim_Game_Tournament">
                    <Game />
                </Link>
            </div>
        )
    }
}

export default Home;