import React from "react";
import "../components/style/ExplorePanel.css";
import coverImg from "../images/pl-hero.png";
import searchIcon from "../images/pl-icon-search.png";

function ExplorePanel() {
    return (
        <div className="container">
            <img className="coverImg" src={coverImg} />
            <div className="center-content">
                <h2 className="title">Discover flowers around you</h2>
                <p className="description">
                    Explore between more than 8.427 sightings
                </p>
                <div className="input-area">
                    <input
                        className="input-field"
                        placeholder="Looking for something specific?"
                    >
                    </input>
                    <i className="icon" src={searchIcon}></i>
                </div>
            </div>
        </div>
    );
}

export default ExplorePanel;
