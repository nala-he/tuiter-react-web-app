import React from "react";
// import postsArray from "./posts.json";
// import HomePostItem from "./home-post-item";
import TuitsList from "../tuits/TuitsList";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {

    return (
            <div className="mt-2 mb-2">
                <h3>Home</h3>
                <WhatsHappening/>
                <TuitsList/>
            </div>
    );
};
export default HomeComponent;