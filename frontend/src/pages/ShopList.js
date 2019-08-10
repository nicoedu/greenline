import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./ShopList.css";
import logo from "../assets/images/logo.svg";

export default function ShopList() {
  useEffect(() => {
    fetchShops();
  }, []);

  const [shops, setShops] = useState([]);

  const fetchShops = async () => {
    const data = await api.get("/shop");

    console.log(data);
    setShops(data.data);
  };

  return (
    <div className="shoplist-container">
      <ul>
        {shops.map(item => (
          <li>
            <div id="image">
              <img src={logo} alt="Green Line" />
            </div>
            <div id="info">
              <span id="shop-name">{item.name}</span>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
