import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "./profileReducer";
const EditProfileComponent = () => {

    const navigate = useNavigate()

    const {currentProfile} = useSelector(state => state.profile);
    const [profile, setProfile] = useState(currentProfile);
    const dispatch = useDispatch();

    const saveProfile = () => {
        dispatch(updateProfile(profile))
        navigate('/tuiter/profile')
    }


    return(
        <div>
            <div className="row pb-1">
                <div className="col-1 pt-2">
                    <span><i className="fa-solid fa-xmark" onClick={()=>navigate('/tuiter/profile')}></i></span>
                </div>
                <div className="col pt-2">
                    <div className="row">
                        <span className="row fw-bold">Edit Profile</span>
                    </div>
                </div>
                <div className="col">
                    <button className="btn btn-dark rounded-pill float-end" onClick={saveProfile}>Save</button>
                </div>
            </div>

            <div className="row">
                    <img src={profile.bannerPicture} className="img-fluid p-0 wd-banner-edit"/>

                <div className="row">
                    <div className="col">
                        <img src={profile.profilePicture} className="wd-profilePic wd-profilePic-blur rounded-circle float-start border border-4 border-white"/>
                    </div>
                </div>

            </div>

            <div className="row m-2">
                <div className="form-floating">
                    <input className="form-control" id="edit-profile-name" type="text" placeholder="Name" value={profile.name} onChange={(event) => {
                        const newProfile = {
                            ...profile,
                            name:event.target.value
                        }
                        setProfile(newProfile)
                    }}/>
                    <label className="ms-2" htmlFor="edit-profile-name"> Name</label>
                </div>

                <div className="form-floating mt-3 mb-3">
                    <textarea id="edit-profile-bio" className="form-control" placeholder="Bio" value={profile.bio} onChange={(event) => {
                        const newProfile = {
                            ...profile,
                            bio:event.target.value
                        }
                        setProfile(newProfile)}}>

                    </textarea>
                    <label className="ms-2" htmlFor="edit-profile-bio">Bio</label>
                </div>

                <div className="form-floating mt-3 mb-3">
                    <input id="edit-profile-location" className="form-control" type="text" placeholder="Location" value={profile.location} onChange={(event) => {
                        const newProfile = {
                            ...profile,
                            location:event.target.value
                        }
                        setProfile(newProfile)}}/>
                    <label className="ms-2" htmlFor="edit-profile-location">Location</label>
                </div>

                <div className="form-floating">
                    <input id="edit-profile-website" className="form-control" type="text" placeholder="Website" value={profile.website} onChange={(event) => {
                        const newProfile = {
                            ...profile,
                            website:event.target.value
                        }
                        setProfile(newProfile)}}/>
                    <label className="ms-2" htmlFor="edit-profile-website">Website</label>
                </div>

                <div className="form-floating mt-3">
                    <input id="edit-profile-dob"  className="form-control" type="date" value={profile.dateOfBirth} onChange={(event) => {
                        const newProfile = {
                            ...profile,
                            dateOfBirth:event.target.value
                        }
                        setProfile(newProfile)}}/>
                    <label className="ms-2" htmlFor="edit-profile-dob">Birth date</label>
                </div>

            </div>

            <div className="row p-4">
                <div className="col">
                    <span>Switch to professional</span>
                </div>
                <div className="col">
                    <span className="float-end"><i className="fa-solid fa-angle-right"></i></span>
                </div>

            </div>
        </div>

    )
}

export default EditProfileComponent;