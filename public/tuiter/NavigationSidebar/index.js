/* eslint-env jquery */

import SidebarItem from "./SidebarItem.js";
import items from "./items.js";

const NavigationSidebar = () => {
    return(`
    <div class="list-group">
       <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <!-- ${items.map(item => {
        return SidebarItem(item);
    }).join('')} // Why cannot use the broken down version?--> 
       <a href="../home.html" class="list-group-item list-group-item-action">
            <div class="row row-cols-2">
                <div class="col-1 d-flex align-items-center">
                    <i class="fa fa-home" aria-hidden="true"></i>
                </div>
                <div class="col-1">
                    <span class="d-none d-xl-block">Home</span>
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action active">
            <div class="row row-cols-2">
                <div class="col-1 d-flex align-items-center">
                    <i class="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div class="col-1">
                    <span class="d-none d-xl-block">Explore</span>
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="row row-cols-2">
                <div class="col-1 d-flex align-items-center">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                </div>
                <div class="col-1">
                    <span class="d-none d-xl-block">Notifications</span>
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="row row-cols-2">
                <div class="col-1 d-flex align-items-center">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="col-1">
                    <span class="d-none d-xl-block">Messages</span>
                </div>
            </div>
        </a>
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
            <div class="row row-cols-2">
                <div class="col-1 d-flex align-items-center">
                    <i class="fa fa-bookmark" aria-hidden="true"></i>
                </div>
                <div class="col-1">
                    <span class="d-none d-xl-block">Bookmarks</span>
                </div>
            </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
            <div class="row row-cols-2">
                <div class="col-1 d-flex align-items-center">
                    <i class="fa fa-list-ul" aria-hidden="true"></i>
                </div>
                <div class="col-1">
                    <span class="d-none d-xl-block">Lists</span>
                </div>
            </div>
        </a>
        <a href="../profile.html" class="list-group-item list-group-item-action">
            <div class="row row-cols-2">
                <div class="col-1 d-flex align-items-center">
                    <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div class="col-1">
                    <span class="d-none d-xl-block">Profile</span>
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action rounded-bottom">
            <div class="row row-cols-2 position-relative">
                <div class="col-1 d-flex align-items-center">
                    <div class="fa-stack small position-relative">
                        <i class="fas fa-circle fa-stack-2x position-absolute"></i>
                        <i class="fas fa-ellipsis-h fa-inverse fa-stack-1x position-absolute
                        pb-1"></i>
                    </div>
                </div>
                <div class="col-1">
                    <span class="d-none d-xl-block">More</span>
                </div>
            </div>
        </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

// // to be commented out after testing
// $('#wd-navigation-bar').append(`
//    <div class="container pt-2">
//        ${NavigationSidebar()}
//    </div>
// `);