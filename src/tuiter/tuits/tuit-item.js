import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 0,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
        <div className="row row-cols-12 m-0 pt-2">
            <div className="col-2 d-flex justify-content-center">
                <img className="wd-avatar"
                     src={`/images/${tuit.image}`} alt="avatar"/>
            </div>
            <div className="col-10">
                <div className="me-2">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}> </i>
                    <div>
                        <span className="text-black fw-bolder">{tuit.userName} </span>
                        <i className="bi bi-patch-check-fill text-primary"> </i>
                        <span className="text-secondary">
                         {tuit.handle} · {tuit.time}
                        </span>
                    </div>
                    <div>
                        <span>{tuit.tuit}</span>
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </div>
        </li>
    );
};
export default TuitItem;