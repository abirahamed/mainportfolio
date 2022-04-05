import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from "../../Contest";
import { useContext } from "react";
const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam ullam repellendus repudiandae culpa quae voluptate fuga incidunt quo, autem nihil tenetur suscipit maxime dolores hic atque natus. Est, placeat.",
    },
    {
      img: profilePic2,
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam ullam repellendus repudiandae culpa quae voluptate fuga incidunt quo, autem nihil tenetur suscipit maxime dolores hic atque natus. Est, placeat.",
    },
    {
      img: profilePic3,
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam ullam repellendus repudiandae culpa quae voluptate fuga incidunt quo, autem nihil tenetur suscipit maxime dolores hic atque natus. Est, placeat.",
    },
    {
      img: profilePic4,
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam ullam repellendus repudiandae culpa quae voluptate fuga incidunt quo, autem nihil tenetur suscipit maxime dolores hic atque natus. Est, placeat.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Client always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{ color: darkMode ? "white" : "" }}>
                  {client.review}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
