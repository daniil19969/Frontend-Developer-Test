import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header";
import App from "./components/app";
import BookstoreService from "./services/bookstore-service";
import DummyBookstoreService from "./services/dummy-bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import SearchPanel from "./components/search-panel";
import store from "./store";
import Row from "./components/row/row";

export default class Ap extends Component {
  state = {
    swapiService: new DummyBookstoreService(),
    term: "",
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    } else {
      items.data = items.data.filter((item) => {
        return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
      return items;
    }
  }
  shoot = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof BookstoreService
          ? DummyBookstoreService
          : BookstoreService;
      return {
        swapiService: new Service(),
      };
    });
  };
  onSearchChange = (term) => {
    this.setState({ term });
  };

  render() {
    const visibleItems = this.search(this.state.swapiService, this.state.term);
    console.log("visibleItems", visibleItems);
    return (
      <Provider store={store}>
        <BookstoreServiceProvider value={visibleItems}>
          <Router>
            <Header shoot={this.shoot} />
            <Row
              left={<SearchPanel onSearchChange={this.onSearchChange} />}
              right={<App />}
            />
          </Router>
        </BookstoreServiceProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Ap />, document.getElementById("root"));
