import React from "react";
import "./style/Comment.css";
import profilePicture from "../images/my-profile-picture.png";

function Comment() {
    return (
        <div className="comment-card">
            <div className="comment-header">
                <img className="comment-profile-picture" src={profilePicture} />
                <div className="comment-info">
                    <p className="comment-owner">Todor Todorovic</p>
                    <p className="comment-date">4 days ago</p>
                </div>
            </div>
            <div className="comment-text-div">
                <p className="comment-text">
                    It was a humorously perilous business for both of us. For,
                    before we proceed further, it must be said that the
                    monkey-rope was fast at both ends; fast to Queequeg's broad
                    canvas belt, and fast to my narrow leather one. So that for
                    better or for worse, we two, for the time, were wedded; and
                    should poor Queequeg sink to rise no more, then both usage
                    and honour demanded, that instead of cutting the cord, it
                    should drag me down in his wake. So, then, an elongated
                    Siamese ligature united us. Queequeg was my own inseparable
                    twin brother; nor could I any way get rid of the dangerous
                    liabilities which the hempen bond entailed.
                </p>
                <hr></hr>
            </div>
        </div>
    );
}

export default Comment;
