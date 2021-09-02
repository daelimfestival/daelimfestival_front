import React from "react";
import axios from "axios";
// import Loading from "./loading";
import "./Home.css";

class Home extends React.Component {
    state = {
        isLoading: true,
    };

    getPage = async () => {
        const url = await axios.get()
    }

    render() {
        return (
            <div id="wrap">
                
            </div>
        )
    }
}

export default Home;