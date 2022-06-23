import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Error from "./Error";
import Users from "./Users";
import SinglePageUser from "./SinglePageUser";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <nav style={{display: "flex", justifyContent: "space-around"}}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="users" element={<Users />}>
              <Route path=":userId" element={<SinglePageUser />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};
export default App;
