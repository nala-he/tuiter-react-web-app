/* eslint-env jquery */

const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row row-cols-12 m-0 position-relative">
                <div class="col-10 position-relative pt-2 pb-2">
                    <div class="${post.topic === '' ? 'd-none' : ''}">
                        <span class="text-secondary">${post.topic}</span><br/>
                    </div>
                    <span class="text-white wd-weight-bold">${post.userName}&nbsp;</span>
                    <i class="fas fa-check-circle wd-weight-bold pb-1"></i>
                    <span class="text-secondary">&nbsp;-&nbsp;${post.time}&nbsp;
                    </span><br/>
                    <span class="text-white wd-weight-bold">${post.title}</span>
                </div>
                <div class="col-2 position-relative pt-2">
                    <img class="rounded-4 w-100 float-end position-relative mb-2
                    wd-width-limits"
                         src=${post.image}/>
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;
