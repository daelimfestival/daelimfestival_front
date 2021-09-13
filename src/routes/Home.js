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
            <div className="wrap">
                <Header />
                <div className="animate__animated animate__bounce">
                    <Link to="/stamp">
                        <Stamp />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;