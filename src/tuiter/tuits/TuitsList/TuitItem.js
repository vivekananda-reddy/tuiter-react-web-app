import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits-reducer";

export default function TuitItem({post}) {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 ps-md-4 pe-0">
                    <img src={post.image} className="img-fluid wd-profile-pic-size"/>
                </div>
                <div className="col-10 ps-0">
                    <div className="row">
                        <div className="col">
                            <span><b>{post.userName} </b></span>
                            {(post.verified)? <span><i className="fa-solid fa-circle-check"></i></span> : ""}
                            <span className="wd-graded-out-font-color"> {post.handle}</span>
                            <span className="wd-graded-out-font-color"> . {post.time}</span>
                            <span><i className="bi bi-x-lg float-end"
                                     onClick={() => deleteTuitHandler(post._id)}></i></span>

                        </div>

                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <span>{post.tuit}</span>

                        </div>
                    </div>

                    <TuitStats tuit={post}/>
                </div>
            </div>
        </li>

    )
}