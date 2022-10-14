/* eslint-env jquery */

import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group">
            <div class="rounded">
                ${posts.map(post => {
                    return(PostSummaryItem(post)); 
        }).join('')}
            </div>
        </ul>    
    `);
}
export default PostSummaryList;

$('#wd-post-summary').append(`
   <div class="container pt-2">
       ${PostSummaryList()}
   </div>
`);