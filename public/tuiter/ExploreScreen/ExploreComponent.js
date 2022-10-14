import PostSummaryList from "../PostSummaryList/index.js";
import Tabs from "./Tabs.js";
import SearchFieldCog from "./SearchFieldCog.js";

const ExploreComponent = () => {
    return(`
        <!-- search field and cog -->
        <div class="form-group row row-cols-12 d-flex justify-content-center
            align-items-center" id="wd-search-bar">
            ${SearchFieldCog()}
        </div>
        <ul class="nav mb-2 mt-2 nav-tabs">
            <!-- tabs -->
            ${Tabs()}
        </ul>
            <!-- image with overlaid text -->
        <div class="position-relative mb-2">
            <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day
.jpg?w=1390&crop=1" width="100%"/>
            <h3 class="text-light position-absolute bottom-0 ps-1 wd-z-index">
                SpaceX's Starship
            </h3>
        </div>    
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;