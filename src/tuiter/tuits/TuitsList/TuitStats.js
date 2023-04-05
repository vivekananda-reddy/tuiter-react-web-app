import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {updateTuitThunk} from "../../../services/tuits-thunks";
import tuitsList from "./index";

export default function TuitStats({tuit}) {

    const dispatch = useDispatch();
    let [tuitStats, setTuitStats] = useState(tuit);
    const likeToggle = (tuitStats) => {
        let dislikedValue = tuitStats.disliked;
        let dislikesValue = tuitStats.dislikes;
        if(!tuitStats.liked) {
            if (tuitStats.disliked) {
                dislikedValue = false;
                dislikesValue = tuitStats.dislikes - 1;
            }
        }

        const newTuitStats = {
            ...tuitStats,
            dislikes: dislikesValue,
            disliked: dislikedValue,
            likes: (tuitStats.liked)? tuitStats.likes - 1 :  tuitStats.likes + 1,
            liked: !tuitStats.liked
        }
        setTuitStats(newTuitStats)
        dispatch(updateTuitThunk(newTuitStats))
    }
    const dislikeToggle = (tuitStats) => {
        let likedValue = tuitStats.liked;
        let likesValue = tuitStats.likes;
        if(!tuitStats.disliked) {
            if (tuitStats.liked) {
                likedValue = false;
                likesValue = tuitStats.likes - 1;
            }

        }

        const newTuitStats = {
            ...tuitStats,
            likes: likesValue,
            liked: likedValue,
            dislikes: (tuitStats.disliked)? tuitStats.dislikes - 1 :  tuitStats.dislikes + 1,
            disliked: !tuitStats.disliked
        }
        setTuitStats(newTuitStats)
        dispatch(updateTuitThunk(newTuitStats))
    }
    return (
        <div className="row wd-graded-out-font-color mt-3">
            <div className="col-2 me-2">
                <span className="me-2">
                       <i className="fa-regular fa-comment"></i>
                </span>

                <span>{tuitStats.replies}</span>

            </div>
            <div className="col-2 me-2">

                <span className="me-2">
                       <i className="fa-solid fa-retweet"></i>
                </span>
                <span>{tuitStats.retuits}</span>

            </div>
            <div className="col-2 me-2">
                <span className="me-2" onClick={() => likeToggle(tuitStats)}>
                       <i className={`fa-heart ${(tuitStats.liked)? "text-danger fa-solid": 'fa-regular'}`} ></i>
                </span>
                <span>{tuitStats.likes}</span>

            </div>
            <div className="col-2 me-2">
                <span className="me-2" onClick={() => dislikeToggle(tuitStats)}>
                       <i className={`${(tuitStats.disliked)? "fa-solid": 'fa-regular'} fa-thumbs-down`} ></i>
                </span>
                <span>{tuitStats.dislikes}</span>

            </div>
            <div className="col-2">
                <span className="me-2">
                       <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </span>
            </div>

        </div>

    )
}