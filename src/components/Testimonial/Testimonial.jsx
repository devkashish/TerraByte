import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1,
    name: "Emily Johnson - CTO, Tech Innovators",
    text: "Terrabyte's solutions have revolutionized our workflow. Their expertise in AI and web development has significantly boosted our productivity and efficiency.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Michael Smith - CEO, Future Enterprises",
    text: "Working with Terrabyte has been a game-changer. Their innovative approach to app development has enabled us to launch a top-tier product that stands out in the market.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sophia Martinez - Head of Digital Marketing, Bright Startups",
    text: "Terrabyte's team is incredibly skilled and professional. Their web development services have helped us create a stunning online presence that has attracted a lot of positive attention.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "James Brown - Product Manager, Innovative Solutions",
    text: "The AI tools developed by Terrabyte have transformed the way we analyze data and make decisions. Their solutions are truly cutting-edge and user-friendly.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 5,
    name: "Olivia Wilson - Director of IT, Global Ventures",
    text: "Terrabyte's comprehensive approach to app development has exceeded our expectations. They delivered a high-quality product on time and within budget.",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="py-10 bg-violet-200 dark:bg-gray-900">
      <div className="container mx-auto">
        <Slider {...settings}>
          {testimonialData.map(({ id, name, text, img }) => (
            <div key={id} className="mx-auto">
              <div className="flex flex-col items-center justify-center gap-5 p-4 bg-violet-300 dark:bg-gray-800 rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
                />
                <p className="text-gray-600 dark:text-gray-300 text-center">{text}</p>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
