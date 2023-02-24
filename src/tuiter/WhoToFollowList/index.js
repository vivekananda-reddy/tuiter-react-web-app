import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import whos from "./who.json"
const WhoToFollowList = () => {
    return (
           <ul className="list-group">
               <li className="list-group-item">
                  <b>Who to follow</b>
                </li>
                {
                    whos.map(who => <WhoToFollowListItem key={who._id} who={who}/>)
                }
           </ul>
    );
}

export default WhoToFollowList;