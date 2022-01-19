import React, { useEffect, useState } from "react";
import "./Card.css";
import { products } from "../../Constants/api";
import axios from "axios";
const Card = () => {
  const [assets, setAssets] = useState("");
  useEffect(() => {
    getAllAsset();
  }, []);
  const getAllAsset = async () => {
    try {
      const { data } = await axios.get(
        "https://outlogics.free.beeceptor.com/api/assets"
      );
      setAssets(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-container">
      <div className="card-image">
        <img
          src="https://5.imimg.com/data5/ZL/EV/MM/SELLER-3995087/product-automatic-wire-nail-making-machine-500x500.jpg"
          alt=""
        />
      </div>
      <div className="card-content">
        <span>Tittle</span>
        {assets &&
          assets.map((asset) => {
            return <i>{asset.data}</i>;
          })}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Card;
