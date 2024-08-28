import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <div className="flex w-full min-h-screen">
      <SideBar />
      <Outlet />
    </div>
  );
}
