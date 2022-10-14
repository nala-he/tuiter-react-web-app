/* eslint-env jquery */

import SidebarItem from "./SidebarItem.js";
import items from "./items.js";

let active = document.title.toString().toLowerCase().split(' ')[0];

const NavigationSidebar = () => {
    return(`
    <ul class="list-group wd-link-no-decor">
       <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       ${items.map(item => {
                return SidebarItem(item, active);
            }).join('')}
   </ul>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

$('#wd-navigation-bar').append(`
   <div class="container pt-2">
       ${NavigationSidebar()}
   </div>
`);