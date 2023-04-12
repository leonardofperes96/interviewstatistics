import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/user/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Dashboard
      <Outlet />
      <button onClick={() => dispatch(logoutUser("Logging out"))}>Logout</button>
    </div>
  );
};

export default Dashboard;
