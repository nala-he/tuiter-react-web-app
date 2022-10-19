import React from "react";
import postsArray from "./posts.json";
import HomePostItem from "./home-post-item";
import "./index.css";

const HomeComponent = () => {
    return (
        <div className="row">
            <div className="rounded border border-light">
                { postsArray.map(post =>
                                     <HomePostItem key={post._id} post={post} />)
                }
            </div>
        </div>
    );
};
export default HomeComponent;