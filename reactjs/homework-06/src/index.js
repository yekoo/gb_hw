import { ThemeProvider, createTheme, Checkbox } from "@material-ui/core"
import React from "react"
import {useCallback } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Chat } from "./pages"
import "./global.css"
import "./App.css"
import { DefaultThemeProvider } from "./components/theme-context"
// import { Header } from "./components/header"
import { NavBar } from "./components/NavBar";

import { Provider } from "react-redux";

import {store} from "./store"
import {checkBoxMarked} from "./store/actions"
import { useDispatch } from "react-redux"

const Profile = ()=>{
  const dispatch = useDispatch();
  
  const handleCheck = useCallback(() => { 
    // console.log("checkBoxMarked", store.getState().profile.checkBoxMarked);
    dispatch(checkBoxMarked);
    }, [dispatch]);

  return (
      <div>
          <h1>User profile</h1>
          <Checkbox
            label={"Checkbox to play"} 
            onChange={e => (handleCheck())}
            checked={store.getState().checkBoxMarked}
            />
      </div>
  )
}
const Splash = ()=>{
  return (
    <div>
        <h1>Splashscreen</h1>
          btns on top
      </div>
  )
}

// const theme = createTheme({
//   dark: {
//     color: "#000",
//   },
//   light: {
//     color: "#fff",
//   },
// })
const themes = {
  dark: createTheme({
    color: "grey"
  }),
  ligth: createTheme({
    color: "#ccc"
  }),
  dark2: {
    color: "#000",
  },
  lite: {
    color: "#fff",
  },
}

// const profileReducer = (state = initialState, action) => {
//}

// const store = createStore(profileReducer);

ReactDOM.render(
  //<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DefaultThemeProvider themes={themes} initialTheme="dark">
            
            <NavBar/>
            <Switch>
              <Route path="/" exact component={() => <Splash />} />
              <Route path="/chat" component={() => <Chat />} />
              <Route path="/profile" component={() => <Profile />} />
              {/* <Route path="/topics" component={() => <Topics />} /> */}
              <Route path="*" component={() => <h1>404 page</h1>} />
            </Switch>
          
        </DefaultThemeProvider>
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
  ,
  document.getElementById("root"),
)
