import React from "react";
import main from "./MainPage.module.css";
import { NavLink } from "react-router-dom";

function MainPage(props) {
  return (
    <div className={main.container}>
      MainPage
      <h1>dich kakato</h1>
      <div>
        <NavLink to="/store">Store</NavLink>
      </div>
    </div>
  );
}

export default MainPage;
