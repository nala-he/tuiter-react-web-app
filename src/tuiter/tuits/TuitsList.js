import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import "./index.css";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits);

    return (
        <div className="border rounded">
            {
                tuitsArray.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </div>
    );
};
export default TuitsList;