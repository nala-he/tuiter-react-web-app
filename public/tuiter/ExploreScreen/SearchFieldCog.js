const SearchFieldCog = () => {
    return(`
        <div class="col-11 position-relative">
            <button type="submit" class="rounded-5 wd-z-index
            position-absolute ms-1 mt-1 bg-transparent border-0" href="#">
                <i class="fa fa-search text-dark bg-transparent"></i>
            </button>
            <input type="text" class="form-control form-control-md wd-rounded-border-5
            position-relative ps-5" placeholder="Search Twitter">
        </div>
        <div class="col-1 position-relative">
            <a href="explore-settings.html">
                <i class="fas fa-cog fa-2x float-end text-primary bg-transparent"></i>
            </a>
        </div>
    `);
}
export default SearchFieldCog;