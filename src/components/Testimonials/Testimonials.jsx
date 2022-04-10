import React from "react";
import "./Testimonials.css";
import avatar1 from "../../assets/testimonials/avatar1.jpg";
import avatar2 from "../../assets/testimonials/avatar2.jpg";
import avatar3 from "../../assets/testimonials/avatar3.JPG";
import { ImQuotesLeft } from "react-icons/im";

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
      "  I've had the pleasure of working with Elina on several projects. Not only is she hard working, organised and dedicated, but also a constant source of positivity and fun. I'd love to collaborate with her more in the future.",
    name: "Ben Ciantar",
  },
  {
    id: 2,
    avatar: avatar2,
    review:
      "  I worked with Elina on the module “design for the user” and you definitely want Elina in your team! Not only has she high work ethics and jumps in wherever she is needed, she provides a team as well with a highly sought after safety-zone by providing insights, sharing her knowledge (and chocolates :-)) and openly voicing her opinion constructively. She is constantly searching to improve her knowledge and has a great sense of design-thinking. I enjoyed working with Elina a lot and hope to have the opportunity to work together with her in the future again.",
    name: "Iwana Städeli",
  },
  {
    id: 3,
    avatar: avatar3,
    review:
      "  I have been working with Elina in several teams, both in supporting roles throughout our individual journeys as programmers and in roles where we have to work towards a common goal side by side, and I think she is an excellent person to be around in both cases. As a team member she is driven, curious, supportive and diligent. She is skilled with JavaScript, React, UX, Figma and more I probably don’t know about but wouldn’t be surprised about if she was skilled at. As a friend she is caring, helpful and kind. It’s always been a good time working with Elina and hope we can work much more!",
    name: "Ian Wallenberg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from teams</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={70}
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={true}
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

              <small className="client__review">
                <ImQuotesLeft className="quotes" size={22} />

                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
