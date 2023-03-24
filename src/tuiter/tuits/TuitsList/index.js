import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const TuitsList = () => {

    const posts = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                posts.map(post => <TuitItem key={post._id} post={post}/>)
            }

        </ul>
    )

}

export default TuitsList;