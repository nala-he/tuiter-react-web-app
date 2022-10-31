import React from "react";

const TuitStats = (
    {
        tuit = {
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
        }
    }) => {
    return (
        <div className="row row-cols-12 mt-3 mb-2 wd-link-no-decor text-secondary">
            <div className="col-3">
                <a href="#">
                    <i className="bi bi-chat"> </i>
                    <span> {tuit.replies}</span>
                </a>
            </div>
            <div className="col-3">
                <a href="#">
                    <i className="bi bi-arrow-repeat"> </i>
                    <span> {tuit.retuits}</span>
                </a>
            </div>
            <div className="col-3">
                <a href="#">
                    <i className={`${tuit.liked ? 'bi bi-heart-fill text-danger'
                                                : 'bi bi-suit-heart'}`}> </i>
                    <span> {tuit.likes}</span>
                </a>
            </div>
            <div className="col-3">
                <a href="#">
                    <i className="bi bi-share"> </i>
                </a>
            </div>
        </div>
    );
}
export default TuitStats;