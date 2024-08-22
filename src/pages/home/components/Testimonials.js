import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const testimonialList = [
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Arto",
      position: "Finland",
      content:
        "Very friendly and attentive staff and also very efficient at getting the room's cleaned whilst we had breakfast. We checked out quite early with no time for breakfast and they were even kind enough to give us a box of croissant's to take with us.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Nicola",
      position: "Storbritannien",
      content:
        "Beautiful boutique hotel, large and luxurious suite. Super comfortable large bed and huge bathroom with jacuzzi. Excellent sun loungers on balcony. Small but very well appointed gym with brand new high spec equipment.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Radim",
      position: "Czech Republic",
      content:
        "Very nice staff, many thanks to Antonela. We had a room facing the yard (to the rock) and was extremely quiet. Comfortable beds. Private beach just across the road, beach chairs and canopy spaced far enough apart to provide privacy.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CEO & Founder ",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. ",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position: "CEO & Founder ",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
  ],
];

const TestimonialItem = ({ item }) => {
  const { img, content, name, position } = item;
  return (
    <div className="shrink-0 w-[28%] px-2">
      <div className="border border-gray-300 shadow-xl rounded-xl h-full duration-300 p-4 xl:p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3">
            <img
              src={img}
              alt={name}
              className="max-w-full h-auto rounded-full border"
              width="65"
            />
          </div>
          <div>
            <h5 style={{ fontFamily: '"Satoshi", sans-serif' }}>{name}</h5>
            <p
              className="text-xs mb-2"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {position}
            </p>
          </div>
        </div>
        <p
          className="text-sm opacity-75 mb-2 leading-snug"
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

TestimonialItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleControl = (type) => {
    const totalItems = testimonialList.flat().length;
    const maxIndex = Math.ceil(totalItems - 3.5);

    if (type === "prev") {
      setIndex(index <= 0 ? maxIndex : index - 1);
    } else if (type === "next") {
      setIndex(index >= maxIndex ? 0 : index + 1);
    }
  };

  return (
    <section className="py-14 md:py-24 bg-[#040405] text-zinc-900 dark:text-white relative z-[1]">
      <div className="container max-w-full lg:pl-16 px-4 mx-auto">
        {" "}
        {/* Added padding-left on large screens */}
        <div className="flex justify-between mb-6">
          <div className="w-2/3 lg:max-w-lg"></div>
          <div className="w-1/3">
            <div className="flex justify-end items-center relative h-full">
              <button
                className="text-lg bg-white shadow-xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
                onClick={() => handleControl("prev")}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button
                className="text-lg bg-white shadow-xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
                onClick={() => handleControl("next")}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 w-full"
            style={{ transform: `translateX(-${index * 28}%)` }}
          >
            {testimonialList.flat().map((item, i) => (
              <TestimonialItem item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
