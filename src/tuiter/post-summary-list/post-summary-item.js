import React from "react";

const PostSummaryItem = (
    {
        post = {
            "_id": 123,
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to "
                     + "build Single Page Applications or SPAs",
            "image": "/images/react-blue.png"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">{post.topic}</div>
                    <div>
                        <span className="fw-bolder">{post.userName} </span>
                        <i className="bi bi-check-circle-fill"> </i>
                        <span className="text-secondary"> - {post.time}</span>
                    </div>
                    <div className="fw-bolder">{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} height={70} className="float-end rounded-3"
                         src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;