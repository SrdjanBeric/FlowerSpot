import React from "react";
import "./style/Comment.css";
import profilePicture from "../images/my-profile-picture.png";

function Comment({ info }) {
    const { id, content, sighting_id, user_full_name, user_id } = info;
    return (
        <div className="comment-card">
            <div className="comment-header">
                <img className="comment-profile-picture" src={profilePicture} />
                <div className="comment-info">
                    <p className="comment-owner">{user_full_name}</p>
                    <p className="comment-date">4 days ago</p>
                </div>
            </div>
            <div className="comment-text-div">
                <p className="comment-text">{content}</p>
                <hr></hr>
            </div>
        </div>
    );
}

export default Comment;
