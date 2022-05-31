import React from "react";
import Comment from "./Comment";

function CommentContainer(comments) {
    const renderComments = comments?.comments?.map((comment) => {
        return (
            <div key={comment.id}>
                <Comment info={comment} />
            </div>
        );
    });
    return <div>{renderComments}</div>;
}

export default CommentContainer;
