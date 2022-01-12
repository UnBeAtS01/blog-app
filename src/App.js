import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home/home.js";
import { Box } from "@material-ui/core";
import DetailView from "./components/post/DetailView";

import { Route } from "react-router-dom";
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/updateView";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 100 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={DetailView} />
          <Route exact path="/create" component={CreateView} />
          <Route exact path="/update/:id" component={UpdateView} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
