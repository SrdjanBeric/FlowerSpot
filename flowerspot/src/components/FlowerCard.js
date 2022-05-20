import React from "react";
import "./style/FlowerCard.css";
import bookmark from "../images/bookmark.png";
import FlowerBackground from "../images/flower.png";

function FlowerCard() {
    return (
    <div className="card">
            <div className="bookmark-icon">
                <img src={bookmark} />
            </div>
            <div className="content">
                <h3 className="card-title">Balloon Flower</h3>
                <p className="card-short-description">
                    Platycoden grandiflours
                </p>
                <div>
                    <button className="card-button">127 sightings</button>
                </div>
            </div>
        </div>
    );
}

export default FlowerCard;
