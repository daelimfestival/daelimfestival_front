import React from "react";
import { executeQuery } from "../common/commonFunc";
import Header from "../common/header.js";
import "./Home.css";

class Home extends React.Component {

    render() {
        return (
            <div id="wrap">
                <Header />
            </div>
        )
    }
}

export default Home;