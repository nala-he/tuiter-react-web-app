/* eslint-env jquery */

const PostItem = (post) => {
    return(`
        <div class="row row-cols-12 m-0 border-bottom border-light">
            <div class="col-2 pt-2">
                <img class="wd-avatar float-end" src=${post.avatar}/>
            </div>
            <div class="col-10 pt-2">
                <div>
                    <span class="text-white wd-weight-bold">${post.author}&nbsp</span>
                    <img src="../../images/check_logo.png" class="wd-icon-size"/>
                    <span class="wd-bookmarked-handle">
                        &nbsp;${post.handler}&nbsp;·&nbsp;${post.time}
                    </span>
                    <span class="float-end position-relative wd-weight-bold">···</span>
                </div>
                <span class="text-white">${post.content}</span>
                <div class="card bg-transparent border-1 border-light rounded-4 mb-2 mt-2">
                    <img class="card-img-top border-1 rounded-4" 
                    src=${post.photo} alt="Card image cap"/>
                    <div class="p-3 card-body border-top border-light
${post.title === '' && post.text === '' && post.source === '' ? 'd-none' : ''}">
                        <span class="card-title text-white">${post.title}</span><br/>
                        <span class="card-text">${post.text}</span><br/>
                        <i class="fas fa-link"></i>
                        <span class="text-secondary">&nbsp;${post.source}</span>
                    </div>
                </div>
                <div class="row row-cols-12 mt-3 mb-3 wd-link-no-decor">
                    <div class="col-3">
                        <a href="#">
                            <i class="far fa-comment-dots"></i>
                            <span>&nbsp;${post.reply}</span>
                        </a>
                    </div>
                    <div class="col-3">
                        <a href="#">
                            <i class="fas fa-retweet"></i>
                            <span>&nbsp;${post.retweet}</span>
                        </a>
                    </div>
                    <div class="col-3">
                        <a href="#">
                            <i class="far fa-heart"></i>
                            <span>&nbsp;${post.like}</span>
                        </a>
                    </div>
                    <div class="col-3">
                        <a href="#">
                            <i class="fas fa-upload"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem;