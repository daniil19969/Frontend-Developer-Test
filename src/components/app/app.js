import React from "react";
import { Route, Switch } from "react-router-dom";
import BookList from "../book-list";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={BookList} exact />
    </Switch>
  );
};

export default App;
