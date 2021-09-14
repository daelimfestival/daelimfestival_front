import React from "react";
// import { executeQuery } from "../common/commonFunc";
import { Link } from "react-router-dom";
import Header from "../common/header.js";
import Stamp from "./Stamp.js";
import "./Home.css";
import "animate.css";

class Home extends React.Component {
    
    render() {
        return (
            <div id="wrap">
                <Header />
                <Stamp />
            </div>
        )
    }
}

export default Home;