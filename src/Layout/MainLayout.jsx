import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainLayout = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
