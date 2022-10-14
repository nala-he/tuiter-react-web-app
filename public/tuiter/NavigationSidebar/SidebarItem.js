const SidebarItem = (item, active) => {
    return(`
        <li class="list-group-item list-group-item-action 
${active === item.text.toLowerCase() ? 'active' : ''}">
            <a href="${item.link}">
                <div class="row row-cols-2">
                    <div class="col-1 d-flex align-items-center">
                        ${item.icon}
                    </div>
                    <div class="col-1">
                        <span class="d-none d-xl-block">${item.text}</span>
                    </div>
                </div> 
            </a>
        </li>
    `);
}
export default SidebarItem;