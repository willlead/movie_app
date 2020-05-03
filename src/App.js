import React from "react"
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (<HashRouter>
    {/* <Route path="/home">
      <h1>Home</h1>
    </Route>
    <Route path="/home/introduction">
      <h1>Introduction</h1>
    </Route>
    <Route path="/about">
      <h1>About</h1>
    </Route> */}
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie-detail" component={Detail} />

  </HashRouter>
  // <BrowserRouter></BrowserRouter>
  );
}

export default App;