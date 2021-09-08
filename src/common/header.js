import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src="/src/images/arrow.png" />
                <span>Daelim Festival</span>
                <img src="/src/images/hamburger.png" />
            </div>
        )
    }
}

export default Header;