import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebarItem = (
    {
        active,
        item = {
            _id: 124,
            icon: "bi bi-hash",
            text: "Explore",
            link: "/tuiter/explore"
        }
    }
) => {
    return (
        <Link to={item.link} className={`list-group-item
    ${active === item.text.toLowerCase() ? 'active' : ''}`}>
            <div className="row row-cols-2">
                <div className="col-1 d-flex align-items-center">
                    <i className={`${item.icon}`}> </i>
                </div>
                <div className="col-1">
                    <span className="d-none d-xl-block">{item.text}</span>
                </div>
            </div>
        </Link>
    );
};
export default NavigationSidebarItem;