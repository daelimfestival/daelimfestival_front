import React from "react";
// import { executeQuery } from "../common/commonFunc";
import Header from "../common/header.js";
import "./Home.css";
import "animate.css";

class Home extends React.Component {
    render() {
        return (
            <div className="wrap">
                <Header />
            </div>
        )
    }
}

export default Home;