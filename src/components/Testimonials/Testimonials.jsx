import React from "react";
import "./Testimonials.css";
import avatar1 from "../../assets/testimonials/avatar1.jpg";
import avatar2 from "../../assets/testimonials/avatar2.jpg";
// import avatar3 from "../../assets/testimonials/avatar3.JPG";
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
      "  I worked closely with Elina as her supervisor during her internship at Happens. Elina started her journey with us as a junior Frontend Developer. Throughout her internship, she made significant strides in developing her skills within frontend technologies, including HTML, CSS, and JavaScript (including libraries like React and GatsbyJS). She had a remarkable progress during the internship. Elina worked on a variety of projects, including SEO analysis and the implementation of various measures to enhance the user experience of Happens' website. She embraced these challenges with enthusiasm and a willingness to learn. What sets Elina apart is her dedication to self-improvement and her positive attitude. She may have joined us as a junior team member, but her determination to learn and grow has been remarkable. She's been receptive to guidance and eager to develop her skills, which is a great quality. I recommend Elina for her positive impact on our team and her dedication to personal growth. I believe she has a bright future ahead, and I wish her all the best in her future endeavors.",
    name: "Oskar Bergkvist",
    title: "CEO of Happens",
  },
  {
    id: 2,
    avatar: avatar2,
    review:
      "  Elina signed up to help the Admissions team at Hyper Island with several projects in spring and early summer of 2022. Elina worked on the project Application Task review and helped facilitate group tasks during the Admissions Days. Not only that, Elina also volunteered to present her program during several of the Admissions Days, in front of more than hundred applicants per day. The applicants provided great feedback after the presentations and were impressed by the work Elina had done during her time at Hyper Island. All projects consisted of several days of long hours and tedious work. Elina was reliable and showed up to do her tasks each day without fail. The Admissions team did not have to worry about the tasks not getting completed on time, or worry about the quality assurance of the tasks. Elina was also well prepared for the presentations and answered many questions from curious applicants. The Admissions team at Hyper Island are very pleased to have worked with Elina and would ask for their continued support in the future.",
    name: "Angelica Ferneborg",
    title: "Admissions Team Lead at Hyper Island",
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
        slidesPerView={2}
        direction={"vertical"}
        mousewheel={true}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review, id, title }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="client avatar" />
              </div>

              <h5 className="client__name">{name}</h5>
              <h5 className="client__name">{title}</h5>

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
