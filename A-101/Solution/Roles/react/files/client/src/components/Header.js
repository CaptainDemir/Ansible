import React from "react";
import cw from "../assets/cw.svg";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div className="text-center">
      <img src="https://www.pngitem.com/pimgs/m/245-2456104_png-transparent-icon-todo-list-png-download.png" />
        <h6 className="text-center mt-5">
        This app has been developed by Captain_Demir Developers.
        </h6>
        <h1 className="text-center mt-5 header-text">Captain_Demir Todos</h1>
      </div>
    </div>
  );
};

export default Header;
