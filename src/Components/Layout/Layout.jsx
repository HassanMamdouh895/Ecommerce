import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Nav />
      <div className="container ps-4 mx-auto pt-8 pb-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
