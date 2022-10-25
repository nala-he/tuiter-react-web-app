import React from "react";
import NavigationSidebarItem from "./navigation-sidebar-item";
import itemsArray from "./item.json";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = (paths.length > 2 && paths[2] !== '') ? paths[2] : 'explore';

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
                <Link to="/tuiter/tweet"
                   className="btn btn-primary btn-block rounded-pill">Tweet</Link>
            </div>
        </>
    );
};
export default NavigationSidebar;
