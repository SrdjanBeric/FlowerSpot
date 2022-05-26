import React from "react";
import "./style/FlowerCard.css";
import bookmark from "../images/bookmark.png";

function FlowerCard(props) {
    const id = props.info.id;
    const favorite = props.info.favorite;
    const latin_name = props.info.latin_name;
    const name = props.info.name;
    const sightings = props.info.sightings;
    const profile_picture = props.info.profile_picture;

    const clickHandler = () => {
        console.log(latin_name, id);
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
                <img className="bookmark-icon" src={bookmark} />
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
