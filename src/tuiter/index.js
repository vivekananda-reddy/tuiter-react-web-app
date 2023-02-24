import Nav from "../nav";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./ExploreScreen";
import {Route, Routes} from "react-router";
import HomeComponent from "./HomeScreen";


function Tuiter() {
    return(

        <div className="row mt-2">
            <Nav/>
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route index element={<ExploreComponent/>}/>
                </Routes>

            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>

        </div>
    );
}
export default Tuiter