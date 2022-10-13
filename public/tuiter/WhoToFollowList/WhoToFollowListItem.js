/* eslint-env jquery */

const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row row-cols-12 d-flex justify-content-center align-items-center">
                <div class="col-lg-2">
                    <img class="w-100 rounded-5 d-flex justify-content-center wd-min-width-40"
                         src="../../images/${who.avatarIcon}"/>
                </div>
                <div class="col-lg-8">
                    <span class="wd-weight-bold">${who.userName}</span>
                    <i class="fas fa-check-circle wd-weight-bold pb-1"></i><br/>
                    <span>${who.handle}</span>
                </div>
                <div class="col-lg-2">
                    <button type="button" class="btn btn-md btn-primary float-end
                    wd-rounded-border-5" href="#">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;