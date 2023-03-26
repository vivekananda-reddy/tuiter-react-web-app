import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentProfile : {
        "name": "Bruce Wayne",
        "handle": "@batman",
        "profilePicture": "../../images/profile-image.png",
        "bannerPicture": "../../images/banner.png",
        "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
        "website": "youtube.com/webdevtv",
        "location": "Gotham, NJ",
        "dateOfBirth": "1968-07-07",
        "dateJoined": "2009/04",
        "followingCount": 340,
        "followersCount": 223
    }
}
const profileSlice = createSlice(
    {
        name: 'profile',
        initialState,
        reducers: {
            updateProfile :(state, action) => {
                state.currentProfile = action.payload;
                console.log(state)
            }

        }

    });

export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer;