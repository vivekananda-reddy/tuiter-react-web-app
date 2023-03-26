
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import './index.css';
import {useNavigate} from "react-router-dom";
const ProfileComponent = () => {
    const {currentProfile} = useSelector(state => state.profile);
    const [profile, setProfile] = useState(currentProfile);
    const navigate = useNavigate()

    return(
        <div>
            <div className="row pb-1">
                <div className="col-1 p-2">
                    <span className="p-2"><i className="fa-solid fa-arrow-left"></i></span>
                </div>
                <div className="col">
                    <div className="row">
                        <span className="row fw-bold">{profile.name}</span>
                        <span className="row fw-lighter">6,114 Tuits</span>
                    </div>
                </div>
            </div>

            <div className="row">

                <img src={profile.bannerPicture} className="img-fluid p-0"/>

                <div className="row">
                    <div className="col">
                        <img src={profile.profilePicture} className="wd-profilePic rounded-circle float-start"/>
                    </div>
                    <div className="col">
                        <button className="btn border border-1 border-secondary rounded-pill float-end mt-2" onClick={()=>{navigate('/tuiter/edit-profile')}}>
                            <b>Edit profile</b>
                        </button>
                    </div>
                </div>

            </div>
            <div className="row m-2">
                <div className="row fw-bold">
                    {profile.name}
                </div>
                <div className="row wd-graded-out-font-color">
                    {profile.handle}
                </div>
                <div className="row pt-2 pb-2">
                    {profile.bio}
                </div>

                <div className="row wd-graded-out-font-color">
                    <div className="col ps-0">
                        <i className="bi bi-geo-alt"></i> {profile.location}
                    </div>
                    <div className="col">
                        <i className="bi bi-balloon"></i> Born {profile.dateOfBirth}
                    </div>
                    <div className="col">
                        <i className="bi bi-calendar3"></i> Joined {profile.dateJoined}
                    </div>

                </div>

                <div className="row pt-2 d-inline">
                    <span className="fw-bold p-0">{profile.followingCount}</span>
                    <span className="fw-lighter ps-0"> Following</span>
                    <span className="fw-bold pe-0">{profile.followersCount}</span>
                    <span className="fw-lighter ps-0"> Followers</span>

                </div>

            </div>
        </div>

    )
}

export default ProfileComponent;