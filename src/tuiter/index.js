import React from "react";
// import "./bootstrap.min.css";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfile from "./profile/EditProfile";

import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer,
        profile: profileReducer}});

function Tuiter() {
    return(
        <Provider store={store}>
            <div className="row">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 mt-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4 mt-2">
                    <WhoToFollowList/>
                </div>
            </div>

        </Provider>

    );
}
export default Tuiter;