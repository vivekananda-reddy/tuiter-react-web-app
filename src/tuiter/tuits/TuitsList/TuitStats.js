import {useDispatch} from "react-redux";
import {toggleLikes} from "../tuits-reducer";
import {useEffect, useState} from "react";

export default function TuitStats({tuit}) {

    const dispatch = useDispatch();
    let [tuitStats, setTuitStats] = useState(tuit);
    const likeUnlike = (tuitStats) => {
        const newTuitStats = {
            ...tuitStats,
            likes: (tuitStats.liked)? tuitStats.likes - 1 :  tuitStats.likes + 1,
            liked: !tuitStats.liked
        }
        setTuitStats(newTuitStats)
        dispatch(toggleLikes(newTuitStats))
    }
    return (
        <div className="row wd-graded-out-font-color mt-3">
            <div className="col-3">
                <span className="me-3">
                       <i className="fa-regular fa-comment"></i>
                </span>

                <span>{tuitStats.replies}</span>

            </div>
            <div className="col-3">

                <span className="me-3">
                       <i className="fa-solid fa-retweet"></i>
                </span>
                <span>{tuitStats.retuits}</span>

            </div>
            <div className="col-3">
                <span className="me-3" onClick={() => likeUnlike(tuitStats)}>
                       <i className={`fa-heart ${(tuitStats.liked)? "text-danger fa-solid": 'fa-regular'}`} ></i>
                </span>
                <span>{tuitStats.likes}</span>

            </div>
            <div className="col-3">
                <span className="me-3">
                       <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </span>
            </div>

        </div>

    )
}