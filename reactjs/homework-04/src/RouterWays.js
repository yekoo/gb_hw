
import { BrowserRouter, Route, Switch, Link, useRouteMatch} from "react-router-dom";

import {ChatList, MessageList} from "./components";
import { NavBar } from "./components/NavBar";
import {Chat} from "./pages/chat.js";

export const RouterWays = ()=>{
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <SplashScreen/>
                </Route>
                <Route exect path="/profile">
                    <Profile/>
                </Route>
                <Route exect path="/chat">
                    {/* <div className={"appColumns"}> */}
                        <Chat/>
                        {/* <ChatList/>
                        <MessageList/> */}
                    {/* </div> */}
                </Route>
                <Route exect path="/topics">
                    <Topics/>
                </Route>
                <Route exect path="/*">
                    <h3>404</h3>
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

const SplashScreen = ()=>{
    return (
        <div className="splash">
            <h1>SPA project</h1>

        </div>
    )
}
const Profile = ()=>{
    return (
        <div>
            <h2>User profile</h2>
            some profile props
        </div>
    )
}

const Topic = ()=>{
    return <h3>Topic</h3>
}
const Topics = ()=>{
    const match = useRouteMatch();

    return (
        <div>
            <h2>Topcs</h2>
            <ul>
                <li>
                    <Link to="topics/components">components</Link>
                </li>
                <li>
                    <Link to="topics/props">props</Link>
                </li>
                <li>
                    <Link to="topics/404">404</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/">
                    <Topic/>
                </Route>
            </Switch>
        </div>
    )
}