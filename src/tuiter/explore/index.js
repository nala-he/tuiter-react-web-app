import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import {Link} from "react-router-dom";

const ExploreComponent = () => {
    return(
        <div className="mt-2 mb-2">
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
                    <Link to="/tuiter/explore/explore-settings">
                        <i className="bi bi-gear-fill fs-4 float-end text-primary bg-transparent">

                        </i>
                    </Link>
                </div>
            </div>
            <ul className="nav mb-2 mt-2 nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link active" to="/tuiter/explore/for-you">For you</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/tuiter/explore/trending">Trending</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/tuiter/explore/news">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/tuiter/explore/sports">Sports</Link>
                </li>
                <li className="nav-item d-none d-md-block">
                    <Link className="nav-link" to="/tuiter/explore/entertainment">Entertainment</Link>
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
        </div>
    );
};
export default ExploreComponent;