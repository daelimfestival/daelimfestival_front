import React from 'react';
import "animate.css";
import "./Stamp.css";
import { IconContext } from "react-icons";
import { FaStamp } from "react-icons/fa";

class Stamp extends React.Component {
    render() {
        return (
            <IconContext.Provider value={{
                style: {
                    width: "100%",
                    height: "100%",
                    color: "black"
                }
            }}>
                <div className="stamp animate__animated animate__bounce">
                    <FaStamp />
                </div>
            </IconContext.Provider>
        );
    }
}

export default Stamp;