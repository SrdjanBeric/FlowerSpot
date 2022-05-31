import React from "react";
import Comment from "./Comment";

function CommentContainer(comments) {
    return (
        <div>
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
}

export default CommentContainer;
