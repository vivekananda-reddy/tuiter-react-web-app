import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {

    return (
        <ul class="list-group">
            {
                posts.map(post => <PostSummaryItem key={post._id} post={post}/>)
            }
        
        </ul>
    )

}

export default PostSummaryList;