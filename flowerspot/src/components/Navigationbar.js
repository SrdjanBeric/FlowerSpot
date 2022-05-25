import React, { useState, useEffect } from "react";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from "react-bootstrap";
import "./style/Navigationbar.css";
import { Modal } from "react-bootstrap";

import icon from "../images/Vector.png";
import profilePicture from "../images/my-profile-picture.png";
import Registration from "./Registration";
import { connect } from "react-redux";
import { getMyInfo } from "../redux/user/userActions";
import Login from "./Login";

function Navigationbar({ getMyInfo, userData }) {
    const [registrationShow, setRegistrationShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);

    const [token, setToken] = useState("");

    const showRegistrationModal = (visible) => {
        setRegistrationShow(visible);
    };

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        if (token != null) {
            getMyInfo();
        }
    }, []);

    useEffect(() => {
        console.log("USERDATA", userData);
    }, [userData]);

    return (
        <div className="navigation-panel">
            <div className="left-align">
                <img src={icon} />
                <h1 className="company-name header-text">FlowerSpot</h1>
            </div>

            {userData.id === "" ? (
                <div className="right-align">
                    <button className="nav-button header-text">Flowers</button>
                    <button className="nav-button header-text">
                        Latest Sightings
                    </button>
                    <button className="nav-button header-text">
                        Favorites
                    </button>
                    <button
                        className="nav-button login header-text"
                        onClick={() => setLoginShow(true)}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setRegistrationShow(true)}
                        className="nav-button new-account header-text"
                    >
                        New Account
                    </button>
                </div>
            ) : (
                <div className="right-align">
                    <button className="nav-button header-text">Flowers</button>
                    <button className="nav-button header-text">
                        Latest Sightings
                    </button>
                    <button className="nav-button header-text">
                        Favorites
                    </button>
                    <button className="nav-button header-text">
                        {userData.first_name} {userData.last_name}
                    </button>
                    <button className="nav-button-image">
                        <img className="profile-image" src={profilePicture} />
                    </button>
                </div>
            )}
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={registrationShow}
                onHide={() => setRegistrationShow(false)}
            >
                <Registration showModal={() => setRegistrationShow(false)} />
            </Modal>
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={loginShow}
                onHide={() => setLoginShow(false)}
            >
                <Login showModal={() => setLoginShow(false)} />
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMyInfo: () => dispatch(getMyInfo()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigationbar);
