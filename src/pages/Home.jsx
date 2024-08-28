import React from "react";
import PageTitle from "../components/PageTitle";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      <PageTitle title="Home" />
      <p className="text-2xl">Choose App in Sidebar</p>
    </div>
  );
}
