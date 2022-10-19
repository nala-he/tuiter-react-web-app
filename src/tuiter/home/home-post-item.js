import React from "react";
import {Link} from "react-router-dom";

function ContentLink(content, link, _id) {
    const words = content.split(' ');
    return (
        <>
            {
                words.map(word => {
                    return word === link ? (
                        <span key={_id}>
                            <Link to={link}>{link}</Link> {' '}
                        </span>) : (word + ' ');
                })
            }
        </>
    );
}

const HomePostItem = (
    {
        post = {
            "_id": 321,
            "avatar": "../../images/avatar_elon.jpg",
            "author": "Elon Musk",
            "handler": "@elonmusk",
            "time": "23h",
            "content": "Amazing show about @Inspiration4x mission!",
            "link": "@Inspiration4x",
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfpH1bvE9Te02Urw5MwD_sAymRRsJkyCn3551zK51Ti16m3U9ipSqhtg97b8ao7_1Nnk&usqp=CAU",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "source": "netflix.com",
            "reply": "4.2K",
            "retweet": "3.5K",
            "like": "37.5K"
        }
    }
) => {

    const content = ContentLink(post.content, post.link, post._id);

    return (
        <div className="row row-cols-12 m-0 border-bottom border-light">
            <div className="col-2 pt-2">
                <img className="wd-avatar float-end" src={post.avatar}/>
            </div>
            <div className="col-10 pt-2">
                <div>
                    <span className="text-white wd-weight-bold">{post.author} </span>
                    <i className="bi bi-patch-check-fill text-white"> </i>
                    <span className="wd-bookmarked-handle">
                         {post.handler} · {post.time}
                    </span>
                    <span className="float-end position-relative wd-weight-bold">···</span>
                </div>
                <span className="text-white">{content}</span>
                <div className="card bg-transparent border-1 border-light rounded-4 mb-2 mt-2">
                    <img className="card-img-top border-1 rounded-4"
                         src={post.photo} alt="Card image cap"/>
                    <div className={`p-3 card-body border-top border-light
${post.title === '' && post.text === '' && post.source === '' ? 'd-none' : ''}`}>
                        <span className="card-title text-white">{post.title}</span><br/>
                        <span className="card-text">{post.text}</span><br/>
                        <i className="bi bi-link-45deg"> </i>
                        <span className="text-secondary"> {post.source}</span>
                    </div>
                </div>
                <div className="row row-cols-12 mt-3 mb-3 wd-link-no-decor">
                    <div className="col-3">
                        <a href="#">
                            <i className="bi bi-chat"> </i>
                            <span> {post.reply}</span>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="#">
                            <i className="bi bi-repeat"> </i>
                            <span> {post.retweet}</span>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="#">
                            <i className="bi bi-suit-heart"> </i>
                            <span> {post.like}</span>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="#">
                            <i className="bi bi-upload"> </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePostItem;