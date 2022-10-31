import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    firstName: 'Marvin',
    lastName: 'Android',
    handle: '@marvin',
    profilePicture: 'donotpanic.jpg',
    bannerPicture: 'hitchhikers-guide.jpeg',
    bio: 'I wish you\'d just tell me rather trying to engage my enthusiasm because I haven\'t got one.',
    website: '',
    location: 'Boston, MA',
    dateOfBirth: '10/10/2222',
    dateJoined: '10/2022',
    followingCount: 42,
    followersCount: 4200,
    tuits: 1234
}

const profileSlice = createSlice({
    name: "profile",
    initialState: initialProfile,
    reducers: {
        updateProfile(state, action) {
            return {...action.payload}
        },
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;