import React, { useEffect } from "react";
// imporitn useNavigate hook so that user can navigate to another after signin
import { NavLink, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  //   useEffect is removing the user and token from the localStorage after logout
  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  }, []);
  return <div></div>;
};

export default Logout;
