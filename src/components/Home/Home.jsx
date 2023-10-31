import "./Home.scss";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import Carousel from "react-elastic-carousel";
import Trending from "../Trending";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const baseURL = "https://dummyjson.com/products";
const Home = () => {
  const [trending, setTrending] = useState();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

      {/* </Carousel> */}

      {/* carousel ends  */}

      {/* sell section starts  */}
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
      {/* sell section ends  */}

      {/* about starts  */}

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
      {/* about ends  */}

      {/* service section starts  */}

      <section id="services" className="service">
        <h1 className="secTitle">Services</h1>

        <div className="service-row">
          <div className="service-div">
            <div>
              <img src="../../assets/images/about.png" alt="" />
            </div>
            <div className="service-des">
              <p>About Us</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum sed repellat vero temporibus illo. Aperiam alias dolorum
                vel nam recusandae a temporibus officiis reprehenderit eaque?
                Amet quos reiciendis nisi exercitationem.
              </p>
            </div>
          </div>
          <div className="service-div">
            <div>
              <img src="../../assets/images/about.png" alt="" />
            </div>
            <div className="service-des">
              <p>About Us</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum sed repellat vero temporibus illo. Aperiam alias dolorum
                vel nam recusandae a temporibus officiis reprehenderit eaque?
                Amet quos reiciendis nisi exercitationem.
              </p>
            </div>
          </div>
          <div className="service-div">
            <div>
              <img src="../../assets/images/about.png" alt="" />
            </div>
            <div className="service-des">
              <p>About Us</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum sed repellat vero temporibus illo. Aperiam alias dolorum
                vel nam recusandae a temporibus officiis reprehenderit eaque?
                Amet quos reiciendis nisi exercitationem.
              </p>
            </div>
          </div>
          <div className="service-div">
            <div>
              <img src="../../assets/images/about.png" alt="" />
            </div>
            <div className="service-des">
              <p>About Us</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum sed repellat vero temporibus illo. Aperiam alias dolorum
                vel nam recusandae a temporibus officiis reprehenderit eaque?
                Amet quos reiciendis nisi exercitationem.
              </p>
            </div>
          </div>
          <div className="service-div">
            <div>
              <img src="../../assets/images/about.png" alt="" />
            </div>
            <div className="service-des">
              <p>About Us</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum sed repellat vero temporibus illo. Aperiam alias dolorum
                vel nam recusandae a temporibus officiis reprehenderit eaque?
                Amet quos reiciendis nisi exercitationem.
              </p>
            </div>
          </div>
          <div className="service-div">
            <div>
              <img src="../../assets/images/about.png" alt="" />
            </div>
            <div className="service-des">
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
      {/* service section ends  */}

      {/* contact us starts */}

      <section id="contact" className="contact">
        <div className="contDiv">
          <GrLocation size={45} />
          <h3>Address</h3>
          <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="contDiv">
          <BsTelephone size={45} />
          <h3>Address</h3>
          <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="contDiv">
          <AiOutlineMail size={45} />
          <h3>Address</h3>
          <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
      {/* contact us ends */}
      <section className="carousel-container">
        <Slider {...settings}>
          <div className="testimonial">
            <div className="newCard">
              <img src="../../assets/images/av1.jpg" alt="" />
              <p>Jhon Doe</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, dicta!
              </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="newCard">
              <img src="../../assets/images/av2.jpg" alt="" />
              <p>Jhon Doe</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, dicta!
              </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="newCard">
              <img src="../../assets/images/av3.jpg" alt="" />
              <p>Jhon Doe</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, dicta!
              </p>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Home;
