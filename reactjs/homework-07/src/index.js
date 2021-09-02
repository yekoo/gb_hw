import { createTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Header } from "./components"
import { DefaultThemeProvider } from "./components/theme-context"
import { Chat, Profile } from "./pages"
import { store, persiststore } from "./store/index.js"
import "./global.css"


export const Splash = ()=>{
  return (
    <div>
      <h1>Wellcome to late Project</h1>
      Choose one of fages on top bar &#8593;
    </div>
  )
}

const themes = {
  dark: createTheme({
    color: "#000",
  }),
  light: createTheme({
    color: "#fff",
  }),
}

ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <BrowserRouter>
          <DefaultThemeProvider themes={themes} initialTheme="light">
            <Header />
            <Switch>
              <Route path="/" exact component={() => <Splash />} />
              <Route path="/chat" component={() => <Chat />} />
              <Route path="/profile" component={() => <Profile />} />
              <Route path="*" component={() => <h1>404 page</h1>} />
            </Switch>
          </DefaultThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root"),
)
