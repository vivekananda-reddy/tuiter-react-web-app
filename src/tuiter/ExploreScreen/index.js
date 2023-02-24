import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-sm-11 col-lg-10 col-xl-11">
                    <div className="input-group">
                            <span id="search-button" className="input-group-text wd-graded-out-font-color bg-white border-end-0 rounded-5 rounded-end">
                                <i className="fas fa-search"></i>
                            </span>
                        <input id="search-input" type="text" placeholder="Search Twitter"
                               className="form-control rounded-start rounded-5 border-start-0 " />

                    </div>
                </div>
                <div className="col-sm-1 col-lg-2 col-xl-1">
                    <span className="float-end text-primary"><i className="fa-solid fa-gear fa-2x"></i></span>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="for-you.html">For You</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="news.html">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li className="nav-item d-none d-md-block d-lg-none d-xl-block">
                            <a className="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="row mt-2">
                <div className="col">
                    <div className="card text-white rounded-0">
                        <img src="../../images/starship.webp" className="card-img rounded-0"/>
                        <div className="card-img-overlay d-flex align-items-end p-0">
                            <h2 className="card-title ms-2 text-black">SpaceX's Starship</h2>
                        </div>
                    </div>
                </div>
            </div>

            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
