import React from "react";
import "./Testimonials.css";
import avatar1 from "../../assets/testimonials/avatar1.png";
import avatar2 from "../../assets/testimonials/avatar2.png";
import avatar3 from "../../assets/testimonials/avatar3.png";
import avatar4 from "../../assets/testimonials/avatar4.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: avatar1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti, maxime labore, cupiditate et nesciunt ex distinctio atque animi dolorum expedita velit illo nihil?",
    name: "Name",
  },
  {
    id: 2,
    avatar: avatar2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti, maxime labore, cupiditate et nesciunt ex distinctio atque animi dolorum expedita velit illo nihil?",
    name: "Name",
  },
  {
    id: 3,
    avatar: avatar3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti, maxime labore, cupiditate et nesciunt ex distinctio atque animi dolorum expedita velit illo nihil?",
    name: "Name",
  },
  {
    id: 4,
    avatar: avatar4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti, maxime labore, cupiditate et nesciunt ex distinctio atque animi dolorum expedita velit illo nihil?",
    name: "Name",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review, id }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="client avatar" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
