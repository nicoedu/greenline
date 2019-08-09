import React, { useState, useEffect } from "react";
import api from "../services/api";

export default function Main() {
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
    <div>
      {shops.map(item => (
        <h1>
          {item.name} {item.description}
        </h1>
      ))}
    </div>
  );
}
