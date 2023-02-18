const NavigationSidebar = (active) => {
    return(`
              <div class="list-group col-sm-8 col-xl-12">
                <a href="" class="list-group-item list-group-item-action">
                  <span><i class="fa-brands fa-twitter"></i></span>
                </a>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${(active === 'home')? `active`:''}">
                  <span><i class="fa-solid fa-house"></i></span>
                  <span class="d-none d-xl-inline">Home</span>
                </a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${(active === 'explore')? `active`:''}">
                  <span><i class="fa-solid fa-hashtag"></i></span>
                  <span class="d-none d-xl-inline">Explore</span>
                </a>
                <a href="" class="list-group-item list-group-item-action ${(active === 'notifications')? `active`:''}">
                  <span><i class="fa-solid fa-bell"></i></span>
                  <span class="d-none d-xl-inline">Notifications</span>
                </a>
                <a href="" class="list-group-item list-group-item-action ${(active === 'messages')? `active`:''}">
                  <span><i class="fa-solid fa-envelope"></i></span>
                  <span class="d-none d-xl-inline">Messages</span>
                </a>
                <a href="" class="list-group-item list-group-item-action ${(active === 'bookmarks')? `active`:''}">
                  <span><i class="fa-solid fa-bookmark"></i></span>
                  <span class="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a href="" class="list-group-item list-group-item-action ${(active === 'lists')? `active`:''}">
                  <span><i class="fa-solid fa-list"></i></span>
                  <span class="d-none d-xl-inline">Lists</span>
                </a>
                <a href="" class="list-group-item list-group-item-action ${(active === 'profile')? `active`:''}">
                  <span><i class="fa-solid fa-user "></i></span>
                  <span class="d-none d-xl-inline">Profile</span>
                </a>
                <a href="" class="list-group-item list-group-item-action ${(active === 'more')? `active`:''}">
                                <span class="fa-stack wd-resize-icon">
                                    <i class="fa-solid fa-circle fa-stack-1x"></i>
                                    <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse small"></i>
                                </span>
                  <span class="d-none d-xl-inline ps-0">More</span>
                </a>
              </div>
              <div class="d-grid mt-2">
                 <a href="tweet.html"
                    class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
               </div>
 `  );
}
export default NavigationSidebar;