import React from "react";
import "./style/FlowerCard.css";
import bookmark from "../images/bookmark.png";
import { useNavigate } from "react-router-dom";

function FlowerCard({ info }) {
    const navigate = useNavigate();
    const { id, favorite, latin_name, name, sightings, profile_picture } = info;

    const clickHandler = () => {
        navigate(`/flower/${id}`);
    };

    return (
        <div
            onClick={clickHandler}
            className="card"
            style={{
                backgroundImage: `linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.0001) 0%,
                rgba(0, 0, 0, 0.7) 89.5%
            ),
            url(${profile_picture})`,
            }}
        >
            <div className="bookmark-icon-div">
                <img
                    onClick={() => console.log("CLICK")}
                    className="bookmark-icon"
                    src={bookmark}
                />
            </div>
            <div className="content">
                <h3 className="card-title">{name}</h3>
                <p className="card-short-description">{latin_name}</p>
                <div>
                    <button className="card-button">
                        {sightings} sightings
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FlowerCard;
