import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "3%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Link to="users">Users</Link>
        <button onClick={() => navigate("/")}>Go to Home Page</button>
        <Outlet />
      </div>
    </React.Fragment>
  );
};
export default Profile;
