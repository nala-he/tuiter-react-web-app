import React from "react";
// import postsArray from "./posts.json";
// import HomePostItem from "./home-post-item";
import TuitList from "../tuits/tuit-list";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {

    return (
            <div className="mt-2 mb-2">
                <h3>Home</h3>
                <WhatsHappening/>
                <TuitList/>
            </div>
    );
};
export default HomeComponent;