import React from "react";
import { useNavigate } from "react-router-dom";
import profilePicture from "../images/my-profile-picture.png";
import commentIcon from "../images/comment.png";
import favoriteIcon from "../images/favorite.png";
import "./style/SightingCard.css";

function SightingCard({ info }) {
    const navigate = useNavigate();

    const {
        comments_count,
        description,
        flower,
        id,
        likes_count,
        name,
        picture,
        user,
    } = info;

    const clickHandler = () => {
        navigate(`/sighting/${id}`);
    };

    return (
        <div className="sighting-card">
            <img
                onClick={clickHandler}
                className="sighting-card-image"
                src={picture}
            />
            <div className="sighting-card-body">
                <div
                    onClick={() => navigate(`/user/${user.id}`)}
                    className="sighting-card-header"
                >
                    <img
                        style={{ width: "40px", height: "40px" }}
                        src={profilePicture}
                    />
                    <div className="sighting-card-flower-name-owner">
                        <p className="sighting-card-flower-name">{name}</p>
                        <p className="sighting-card-owner">
                            by {user.full_name}
                        </p>
                    </div>
                </div>
                <div
                    onClick={clickHandler}
                    className="sighting-card-description-div"
                >
                    {description}
                </div>
                <hr></hr>
                <div onClick={clickHandler} className="sighting-card-actions">
                    <div className="sighting-card-single-action">
                        <img className="action-icons" src={commentIcon} />
                        {comments_count} Comments
                    </div>
                    <div className="sighting-card-single-action">
                        <img className="action-icons" src={favoriteIcon} />
                        {likes_count} Favorites
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SightingCard;
