import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {

    const posts = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                posts.map(post => <PostSummaryItem key={post._id} post={post}/>)
            }
        
        </ul>
    )

}

export default PostSummaryList;