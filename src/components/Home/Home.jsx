import "./Home.scss";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import Carousel from "react-elastic-carousel";
import Trending from "../Trending";

const baseURL = "https://dummyjson.com/products";
const Home = () => {
  const [trending, setTrending] = useState();

  const list = () => {
    axios(baseURL).then((response) => {
      // const item = response.data.products.slice(0, 5);
      console.log(response.data.products);
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
      <section id="products" className="trending">
        <h1 className="secTitle">Shop by Category</h1>
        <p className="secP">
          Life is hard enough already. Let us make it a little easier.
        </p>
        <Trending data={trending} />
      </section>
      {/* products data show starts  */}

      {/* explore more section starts  */}

      <section id="explore" className="explore">
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
      {/* <Carousel> */}
      {/* <div className="slides">
        <div>
          <img src="../../assets/images/camera.jpg" />
        </div>
        <p>Anika</p>
        <p>description</p>
      </div>
      <div className="slides">
        <img src="../../assets/images/camera.jpg" />
      </div>
      <div className="slides">
        <img src="../../assets/images/camera.jpg" />
      </div> */}
      {/* </Carousel> */}

      {/* carousel ends  */}

      <section className="sell">
        <div>
          <h2>Sell Easily on Socialmedia</h2>
          <p>Life is hard enough already. Let us make it a little easier.</p>
        </div>
        <div className="imgDiv">
          <img
            src="../../../assets/images/sell.jpg"
            height={452}
            width={352}
            className="sellimg"
          />
        </div>
      </section>

      <section id="about" className="about">
        <div>
          <h1 className="secTitle">About Us</h1>
        </div>

        <div className="about-row">
          <div className="abImg">
            <div>
              <img src="../../assets/images/about.png" alt="" />
            </div>
            <div>
              <p>About Us</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum sed repellat vero temporibus illo. Aperiam alias dolorum
                vel nam recusandae a temporibus officiis reprehenderit eaque?
                Amet quos reiciendis nisi exercitationem.
              </p>
            </div>
          </div>

          <div className="abImg">
            <div>
              <img src="../../assets/images/about.png" alt="" />
            </div>
            <div>
              <p>About Us</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum sed repellat vero temporibus illo. Aperiam alias dolorum
                vel nam recusandae a temporibus officiis reprehenderit eaque?
                Amet quos reiciendis nisi exercitationem.
              </p>
            </div>
          </div>
          <div className="abImg">
            <div>
              <img src="../../assets/images/about.png" alt="" />
            </div>
            <div>
              <p>About Us</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum sed repellat vero temporibus illo. Aperiam alias dolorum
                vel nam recusandae a temporibus officiis reprehenderit eaque?
                Amet quos reiciendis nisi exercitationem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
