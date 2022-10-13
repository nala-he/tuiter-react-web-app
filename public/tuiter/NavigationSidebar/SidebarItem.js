const SidebarItem = (items) => {
    return(`
        <a href="#" className="list-group list-group-item list-group-item-action">
            <div className="row row-cols-2">
                <div className="col-1 d-flex align-items-center">
                    ${items.icon}
                </div>
                <div className="col-1">
                    <span class="d-none d-xl-block">${items.text}</span>
                </div>
            </div>
        </a>
    `);
}
export default SidebarItem;