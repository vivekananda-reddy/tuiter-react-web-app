import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = ({defaultPage}) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = (paths[2]==='')? defaultPage:paths[2];
    return(
        <>
            <div className="list-group col-sm-8 col-xl-12">
                <a href="" className="list-group-item list-group-item-action">
                  <span><i className="fa-brands fa-twitter"></i></span>
                </a>
                <Link to="/tuiter/home" className={`list-group-item list-group-item-action ${(active === 'home')? `active`:''}`}>
                  <span><i className="fa-solid fa-house"></i></span>
                  <span className="d-none d-xl-inline"> Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${(active === 'explore')? `active`:''}`}>
                  <span><i className="fa-solid fa-hashtag"></i></span>
                  <span className="d-none d-xl-inline"> Explore</span>
                </Link>
                <Link to="/" className="list-group-item">
                    <span><i className="fa-solid fa-flask"></i></span>
                    <span className="d-none d-xl-inline"> Labs</span>
                </Link>
                <a href="" className={`list-group-item list-group-item-action ${(active === 'notifications')? `active`:''}`}>
                  <span><i className="fa-solid fa-bell"></i></span>
                  <span className="d-none d-xl-inline"> Notifications</span>
                </a>
                <a href="" className={`list-group-item list-group-item-action ${(active === 'messages')? `active`:''}`}>
                  <span><i className="fa-solid fa-envelope"></i></span>
                  <span className="d-none d-xl-inline"> Messages</span>
                </a>
                <a href="" className={`list-group-item list-group-item-action ${(active === 'bookmarks')? `active`:''}`}>
                  <span><i className="fa-solid fa-bookmark"></i></span>
                  <span className="d-none d-xl-inline"> Bookmarks</span>
                </a>
                <a href="" className={`list-group-item list-group-item-action ${(active === 'lists')? `active`:''}`}>
                  <span><i className="fa-solid fa-list"></i></span>
                  <span className="d-none d-xl-inline"> Lists</span>
                </a>
                <a href="" className={`list-group-item list-group-item-action ${(active === 'profile')? `active`:''}`}>
                  <span><i className="fa-solid fa-user "></i></span>
                  <span className="d-none d-xl-inline"> Profile</span>
                </a>
                <a href="" className={`list-group-item list-group-item-action ${(active === 'more')? `active`:''}`}>
                                <span className="fa-stack wd-resize-icon">
                                    <i className="fa-solid fa-circle fa-stack-1x"></i>
                                    <i className="fa-solid fa-ellipsis fa-stack-1x fa-inverse small"></i>
                                </span>
                  <span className="d-none d-xl-inline ps-0"> More</span>
                </a>
              </div>
              <div className="d-grid mt-2">
                 <a href="tweet.html"
                    className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
               </div>
        </>

    );
}
export default NavigationSidebar;