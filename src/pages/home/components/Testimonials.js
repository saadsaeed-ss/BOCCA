import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const testimonialList = [
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
      "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
    name: "Sara Tailor",
    position: "CEO & Founder ",
    content:
      "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
  },
];

const TestimonialItem = ({ item }) => {
  const { img, content, name, position } = item;
  return (
    <div className="shrink-0 w-full px-2 mb-4 lg:w-[28%] lg:px-2 lg:mb-0">
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
            <h5 style={{ fontFamily: '"Satoshi", sans-serif', color: "white" }}>
              {name}
            </h5>
            <p
              className="text-xs mb-2"
              style={{ fontFamily: '"Satoshi", sans-serif', color: "white" }}
            >
              {position}
            </p>
          </div>
        </div>
        <p
          className="text-sm opacity-75 mb-2 leading-snug"
          style={{ fontFamily: '"Satoshi", sans-serif', color: "white" }}
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
  const [visibleCount, setVisibleCount] = useState(3); // Start with 3 visible testimonials

  const handleControl = (type) => {
    const totalItems = testimonialList.length;
    const maxIndex = totalItems - 3; // Adjust for showing 3 testimonials on large screens

    if (type === "prev") {
      setIndex(index <= 0 ? maxIndex : index - 1);
    } else if (type === "next") {
      setIndex(index >= maxIndex ? 0 : index + 1);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 3, testimonialList.length)
    );
  };

  return (
    <section className="py-14 md:py-24 bg-black text-zinc-900 dark:text-white relative z-[1]">
      {/* Original Testimonials (Visible on lg and up) */}
      <div className="container max-w-full lg:pl-16 px-4 mx-auto hidden lg:block">
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
            style={{ transform: `translateX(-${index * 28}%)` }} // Display 3 items on large screens
          >
            {testimonialList.map((item, i) => (
              <TestimonialItem item={item} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Stacked Testimonials (Visible on small screens) */}
      <div className="container max-w-full px-4 mx-auto lg:hidden">
        <div className="grid gap-4">
          {testimonialList.slice(0, visibleCount).map((item, i) => (
            <TestimonialItem item={item} key={i} />
          ))}
        </div>
        {visibleCount < testimonialList.length && (
          <div className="text-center mt-4">
            <button
              className="bg-white dark:bg-slate-800 text-black dark:text-white px-4 py-2 rounded-full shadow-xl hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
