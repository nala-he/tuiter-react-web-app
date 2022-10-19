import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item";
import itemsArray from "./item.json";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="bi bi-twitter"> </i>
                </a>
                {
                    itemsArray.map(item => <NavigationSidebarItem
                        key={item._id} item={item} active={active}/>)
                }
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </>
    );
};
export default NavigationSidebar;
