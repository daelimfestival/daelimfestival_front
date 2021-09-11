import React from 'react';
// import PropTypes from 'prop-types'
import Sidebar from "react-sidebar";
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <div className="header">
                <Sidebar
                    sidebar={
                        <p>Sidebar content</p>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{
                        sidebar: {
                            background: "white",
                            width: "300px",
                            textAlign: "center"
                        }
                    }}
                >
                </Sidebar>
                <div className="image" onClick={() => this.onSetSidebarOpen(true)} />
            </div>
        );
    }
}

Sidebar.propTypes = {}

export default Header;