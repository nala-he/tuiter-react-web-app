import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 0,
        }
    }) => {
    const dispatch = useDispatch();

    return (
        <div className="row row-cols-12 mt-3 mb-2 wd-link-no-decor text-secondary">
            <div className="col-2">
                <a href="#">
                    <i className="bi bi-chat"> </i>
                    <span> {tuit.replies}</span>
                </a>
            </div>
            <div className="col-2">
                <a href="#">
                    <i className="bi bi-arrow-repeat"> </i>
                    <span> {tuit.retuits}</span>
                </a>
            </div>
            <div className="col-3">
                Likes: {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               likes: tuit.likes + 1
                                                           }))}
                   className="bi bi-heart-fill text-danger"> </i>
            </div>
            <div className="col-3">
                Dislikes: {tuit.dislikes}
                <i onClick={() => dispatch(updateTuitThunk({
                                                               ...tuit,
                                                               dislikes: tuit.dislikes + 1
                                                           }))}
                   className="bi bi-hand-thumbs-down"> </i>
            </div>
            <div className="col-1">
                <a href="#">
                    <i className="bi bi-share"> </i>
                </a>
            </div>
        </div>
    );
}
export default TuitStats;