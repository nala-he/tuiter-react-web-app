import React, {useEffect} from "react";
// import postsArray from "./posts.json";
import {useDispatch, useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    // const postsArray = useSelector(state => state.tuits)
    const postsArray = useSelector(state => state.tuitsData.tuits);

    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <PostSummaryItem
                                       key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default PostSummaryList;