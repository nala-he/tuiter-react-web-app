import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return(
        <>
            <div className="form-group row row-cols-12 d-flex justify-content-center
            align-items-center" id="wd-search-bar">
                <div className="col-11 position-relative">
                    <button type="submit" className="rounded-5 wd-z-index
            position-absolute ms-1 mt-1 bg-transparent border-0" href="#">
                        <i className="bi bi-search text-dark bg-transparent"> </i>
                    </button>
                    <input type="text" className="form-control form-control-md rounded-pill
            position-relative ps-5" placeholder="Search Twitter"/>
                </div>
                <div className="col-1 position-relative">
                    <a href="explore-settings.html">
                        <i className="bi bi-gear-fill fs-4 float-end text-primary bg-transparent">

                        </i>
                    </a>
                </div>
            </div>
            <ul className="nav mb-2 mt-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day
.jpg?w=1390&crop=1" width="100%"/>
                <h3 className="text-light position-absolute bottom-0 ps-1 wd-z-index">
                    SpaceX's Starship
                </h3>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;