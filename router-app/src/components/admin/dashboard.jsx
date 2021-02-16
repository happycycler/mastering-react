import React from "react";
import SideBar from "./sidebar";
import Users from "./users";
import Posts from "./posts";
import { Route, Switch } from "react-router-dom";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Switch>
        <Route path="/admin/posts" component={Posts} />;
        <Route path="/admin/users" component={Users} />;
      </Switch>
    </div>
  );
};

export default Dashboard;
