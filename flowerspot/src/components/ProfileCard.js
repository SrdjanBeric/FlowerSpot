import React from "react";
import "./style/ProfileCard.css";
import profilePicture from "../images/my-profile-picture.png";

function ProfileCard() {
    return (
        <div className="profile-card-card">
            <div className="profile-card-content">
                <div className="profile-card-text-title">
                    <img className="profile-card-image" src={profilePicture} />
                    <div style={{ marginTop: "17px" }}>
                        Michael Berry
                        <p className="profile-card-sightings">47 sigthings</p>
                    </div>
                </div>
                <div className="profile-card-text">
                    <p className="profile-card-description">First Name</p>
                    Michael
                </div>
                <div className="profile-card-text">
                    <p className="profile-card-description">First Name</p>Berry
                </div>
                <div className="profile-card-text">
                    <p className="profile-card-description">First Name</p>May
                    20, 1980
                </div>
                <div className="profile-card-text">
                    <p className="profile-card-description">First Name</p>
                    michael@gmail.com
                </div>
                <div className="profile-card-button-div">
                    <button className="profile-card-button">Logout</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
