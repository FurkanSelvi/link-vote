import React from "react";
import List from "../pages/ListPage"
import AddItemPage from "../pages/AddItemPage"
import { Route, Switch } from "react-router-dom";

export default function router() {
  return (
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/add" component={AddItemPage} />
    </Switch>
  );
}
