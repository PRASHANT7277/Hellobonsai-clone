import React from "react";
import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  localStorage.setItem("token", "6336e54a27080cd298ae4515:urvashi@gmail.com");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }
  console.log(token);
  return children;
};

export default PrivateRoute;
