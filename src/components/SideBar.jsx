import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaQuran } from "react-icons/fa";
import { ImCalculator } from "react-icons/im";
export default function SideBar() {
  return (
    <div className="min-h-screen w-14 bg-blue-950 flex flex-col gap-2 p-1">
      <Link
        to={"/"}
        className="p-3 flex justify-center items-center bg-blue-950 hover:bg-blue-900 rounded-md
        "
      >
        <RiHomeLine size={24} color="#fff" />
      </Link>
      <Link
        to={"/verses"}
        className="p-3 flex justify-center items-center bg-blue-950 hover:bg-blue-900 rounded-md
        "
      >
        <FaQuran size={24} color="#fff" />
      </Link>
      <Link
        to={"/calculator"}
        className="p-3 flex justify-center items-center bg-blue-950 hover:bg-blue-900 rounded-md
        "
      >
        <ImCalculator size={24} color=" #fff" />
      </Link>
    </div>
  );
}
