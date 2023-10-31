import "./Home.scss";

// import axios from "axios";
// import { useState } from 'react';
// import { useEffect } from 'react';
// const baseURL = "https://dummyjson.com/products";
const Home = () => {
  // const [trending, setTrending] = useState();

  // const list = () => {
  //   axios(baseURL).then((response) => setTrending(response.data.products));
  // };
  // useEffect(() => {
  //   list();
  // }, []);

  return (
    <>
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
      <section className="trending">
        <h1 className="secTitle">Shop Our Trending Products</h1>
        <p className="secP">
          Life is hard enough already. Let us make it a little easier.
        </p>

        {/* <Trending data={trending} /> */}
      </section>
    </>
  );
};

export default Home;
