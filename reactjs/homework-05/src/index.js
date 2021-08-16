import { ThemeProvider, createTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Chat } from "./pages"
import "./global.css"
import "./App.css"
import { DefaultThemeProvider } from "./components/theme-context"

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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultThemeProvider themes={themes} initialTheme="dark">
        
          <Switch>
            <Route path="/chat" component={() => <Chat />} />
            <Route path="*" component={() => <h1>404 page</h1>} />
          </Switch>
        
      </DefaultThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)
