import React, { useState } from "react";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from "react-bootstrap";
import "./style/Navigationbar.css";
import { Modal } from "react-bootstrap";

import icon from "../images/Vector.png";
import Registration from "./Registration";

function Navigationbar() {
    const [modalShow, setModalShow] = useState(false);

    const showRegistrationModal = (visible) => {
        setModalShow(visible);
    };

    return (
        <div className="navigation-panel">
            <div className="left-align">
                <img src={icon} />
                <h1 className="company-name header-text">FlowerSpot</h1>
            </div>
            <div className="right-align">
                <button className="nav-button header-text">Flowers</button>
                <button className="nav-button header-text">
                    Latest Sightings
                </button>
                <button className="nav-button header-text">Favorites</button>
                <button className="nav-button login header-text">Login</button>
                <button
                    onClick={() => setModalShow(true)}
                    className="nav-button new-account header-text"
                >
                    New Account
                </button>
            </div>
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Registration showModal={() => setModalShow(false)} />
            </Modal>
        </div>
    );
}

export default Navigationbar;
