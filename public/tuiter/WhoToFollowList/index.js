/* eslint-env jquery */

import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
           <!-- continue here -->
           <li class="list-group-item">
                <span class="wd-weight-bold">Who to follow</span>
           </li>
           ${who.map(each => {
                return(WhoToFollowListItem(each));
            }).join('')
           }
        </ul>
    `);
}
export default WhoToFollowList;

// $('#wd-who-to-follow').append(`
//    <div class="container pt-2">
//        ${WhoToFollowList()}
//    </div>
// `);