/* eslint-env jquery */
import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
    <div class="rounded border border-light">
        ${posts.map(post => {
            return(`${PostItem(post)}`);
    }).join('')}
    </div>
    `);
}
export default PostList;

$('#wd-post-list').append(`
    <div class="container pt-2">
       ${PostList()}
    </div>
`);