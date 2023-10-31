// import { Swiper, SwiperSlide } from "swiper/react";

import Carousel from "react-elastic-carousel";
const Slider = ({ trending }) => {
  console.log("check slides", trending);
  return (
    <Carousel>
      {trending &&
        trending.map((slide) => (
          <>
            <div className="slides">
              <img src="../../assets/images/camera.jpg" />
            </div>
          </>
        ))}
    </Carousel>
  );
};

export default Slider;
