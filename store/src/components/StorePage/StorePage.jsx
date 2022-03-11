import React from "react";
import store from "./StorePage.module.css";
import storage from "../data/storage.json";
import { NavLink } from "react-router-dom";

function StorePage() {
  return (
    <div className={store.container}>
      StorePage
      <div>
        <NavLink to="/main">Back</NavLink>
      </div>
      {storage.map((item, id) => (
        <nav>
          <ul>
            <li key={id.toString()} className={store.lists}>
              <NavLink to='/basket'><h2 className={store.title}>{item.title}</h2></NavLink>
              <h3 className={store.color}>{item.color}</h3>
              <h3 className={store.size}>{item.size}</h3>
              <h2 className={store.cost}>{item.cost}</h2>
              
            </li>
          </ul>
        </nav>
      ))}
    </div>
  );
}

export default StorePage;
