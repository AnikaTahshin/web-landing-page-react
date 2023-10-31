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
        <h1 className="secTitle">Shop by Category</h1>
        <p className="secP">
          Life is hard enough already. Let us make it a little easier.
        </p>
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="../../../assets/images/laptop.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper> */}

        {/* {trending &&
          trending.map((item, index) => (
            <div key={index}>
              <Trending item={item} name={item.title} image={item.images} />
            </div>
          ))} */}

        <Trending data={trending} />
      </section>
    </>
  );
};

export default Home;
