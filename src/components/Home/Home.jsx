import "./Home.scss";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import Trending from "../Trending";
const baseURL = "https://dummyjson.com/products";
const Home = () => {
  const [trending, setTrending] = useState();

  const list = () => {
    axios(baseURL).then((response) => {
      // const item = response.data.products.slice(0, 5);
      setTrending(response.data.products);
    });
  };
  useEffect(() => {
    list();
  }, []);

  return (
    <>
      {/* banner section starts */}
      <section className="hero">
        <div className="leftText">
          <p className="p1">100% QUALITY, 100% SATISFACTION</p>
          <p className="p2">Where the world comes to shop.</p>
          <p className="p3">
            Life is hard enough already. Let us make it a little easier, Vision
            of Snipshop for a better outlook.
          </p>
          <button className="btn">Shop Now</button>
        </div>

        <div className="rightDiv">
          <img src="../../assets/images/dslr.png" alt="" />
        </div>
      </section>

      {/* banner section ends */}

      {/* products data show starts  */}
      <section className="trending">
        <h1 className="secTitle">Shop by Category</h1>
        <p className="secP">
          Life is hard enough already. Let us make it a little easier.
        </p>
        <Trending data={trending} />
      </section>
      {/* products data show starts  */}

      {/* explore more section starts  */}

      <section className="explore">
        <div className="card-section">
          <div className="logo-card">
            <img
              src="../../../assets/images/apple.png"
              width={152}
              height={152}
            />
          </div>
          <div className="logo-card">
            <img
              src="../../../assets/images/bmw.png"
              width={152}
              height={152}
            />
          </div>
          <div className="logo-card">
            <img
              src="../../../assets/images/nike.png"
              width={152}
              height={152}
            />
          </div>
          <div className="logo-card">
            <img
              src="../../../assets/images/fila.png"
              width={152}
              height={152}
            />
          </div>
          <div className="logo-card">
            <img src="../../../assets/images/mi.png" width={152} height={152} />
          </div>
          <div className="logo-card">
            <img
              src="../../../assets/images/adidas.png"
              width={152}
              height={152}
            />
          </div>
        </div>
        <div className="description">
          <h2>Explore Most Popular Brands</h2>
          <p>Life is hard enough already. Let us make it a little easier.</p>
        </div>
      </section>

      {/* explore more section ends  */}

      {/* carousel start  */}
      {/* carousel ends  */}
    </>
  );
};

export default Home;
