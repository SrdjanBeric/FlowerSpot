import React from "react";
import "./style/ProfileCard.css";
import profilePicture from "../images/my-profile-picture.png";
import { connect } from "react-redux";

function ProfileCard({ showModal, userData }) {
    const logout = () => {
        localStorage.removeItem("token");
        showModal(false);
        document.location.reload(true);
    };

    return (
        <div className="profile-card-card">
            <div className="profile-card-content">
                <div className="profile-card-text-title">
                    <img className="profile-card-image" src={profilePicture} />
                    <div style={{ marginTop: "17px" }}>
                        {userData.first_name} {userData.last_name}
                        <p className="profile-card-sightings">47 sigthings</p>
                    </div>
                </div>
                <div className="profile-card-text">
                    <p className="profile-card-description">First Name</p>
                    {userData.first_name}
                </div>
                <div className="profile-card-text">
                    <p className="profile-card-description">Last Name</p>
                    {userData.last_name}
                </div>
                <div className="profile-card-text">
                    <p className="profile-card-description">Date of Birth</p>May
                    20, 1980
                </div>
                <div className="profile-card-text">
                    <p className="profile-card-description">Email</p>
                    michael@gmail.com
                </div>
                <div className="profile-card-button-div">
                    <button onClick={logout} className="profile-card-button">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    };
};

export default connect(mapStateToProps)(ProfileCard);
