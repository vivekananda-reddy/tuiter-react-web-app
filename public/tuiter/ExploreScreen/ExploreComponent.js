import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                    <div class="col-sm-11 col-lg-10 col-xl-11">
                      <div class="input-group">
                            <span id="search-button" class="input-group-text wd-graded-out-font-color bg-white border-end-0 rounded-5 rounded-end">
                                <i class="fas fa-search"></i>
                            </span>
                        <input id="search-input" type="text" placeholder="Search Twitter"
                               class="form-control rounded-start rounded-5 border-start-0 " />
            
                      </div>
                    </div>
                    <div class="col-sm-1 col-lg-2 col-xl-1">
                      <span class="float-end text-primary"><i class="fa-solid fa-gear fa-2x"></i></span>
                    </div>
            </div>
            
              <div class="row mt-2">
                <div class="col">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block d-lg-none d-xl-block">
                      <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              
              <div class="row mt-2">
                <div class="col">
                  <div class="card text-white rounded-0">
                    <img src="../../images/starship.webp" class="card-img rounded-0">
                    <div class="card-img-overlay d-flex align-items-end p-0">
                      <h2 class="card-title ms-2 text-black">SpaceX's Starship</h2>
                    </div>
                  </div>
                </div>
              </div>
    
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
