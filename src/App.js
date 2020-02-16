import React from "react";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";

import UserList from "./components/UserList";
import UserShow from "./components/UserShow";
import PostList from "./components/PostList";
import PostShow from "./components/PostShow";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>|||
        <Link to="/userlist">UserList</Link>|||
        <Link to="/postlist">PostList</Link>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/userlist" component={UserList} exact={true} />
          <Route path="/userlist/:id" component={UserShow} />
          <Route path="/postlist" component={PostList} exact={true} />
          <Route path="/postlist/:id" component={PostShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
