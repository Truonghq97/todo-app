import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";
import Reminder from "./pages/Reminder";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Reminder} path="/" exact />
        <AuthRoute component={Login} path="/login" exact />
        <AuthRoute component={Register} path="/register" exact />
        <AuthRoute component={ResetPassword} path="/reset-password" exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
