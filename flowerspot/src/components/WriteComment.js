import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { postComment } from "../apis/CommentsApi";
import "./style/WriteComment.css";

function WriteComment({ sightingId, userData, inputFocus }) {
    const [text, setText] = useState("");
    const [publishEnable, setPublishEnable] = useState(false);
    const commentArea = useRef(null);

    useEffect(() => {
        if (!!text) {
            setPublishEnable(true);
        } else {
            setPublishEnable(false);
        }
    }, [text]);

    useEffect(() => {
        if (inputFocus !== null) {
            commentArea.current.focus();
        }
    }, [inputFocus]);

    const onSubmit = (event) => {
        event.preventDefault();
        postComment(text, sightingId)?.then(
            (response) => console.log(response),
            setText("")
        );
    };
    return (
        <div className="write-comment-component">
            <form onSubmit={onSubmit}>
                <textarea
                    ref={commentArea}
                    className="comment-textarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <span className="comment-placeholder">Write a comment...</span>
                <button
                    disabled={!publishEnable}
                    className="publish-comment-button"
                    type="submit"
                >
                    Publish Comment
                </button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    };
};

export default connect(mapStateToProps)(WriteComment);
