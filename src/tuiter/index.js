import Nav from "../nav";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./ExploreScreen";
import {Route, Routes} from "react-router";
import HomeComponent from "./Home";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";


const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <Nav/>
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar defaultPage="home"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route index element={<HomeComponent/>}/>
                    </Routes>

                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>

            </div>
        </Provider>
    );
}
export default Tuiter