import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import PostSummaryList from "./post-summary-list";
import {Routes, Route} from "react-router";
import "./bootstrap.min.css";

function Tuiter() {
    return(
        <div className="row mt-2 mb-2">
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route index element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <Routes>
                    <Route path="home" element={<WhoToFollowList/>}/>
                    <Route path="explore" element={<WhoToFollowList/>}/>
                    <Route index element={<WhoToFollowList/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default Tuiter;