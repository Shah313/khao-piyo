import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";

import { ReviewsData } from "../../../data/ReviewData";

import "swiper/css";


import "./Review.css";

function Review() {
  return (
    <section className="reviews">
      <h1 className="title">Reviews</h1>

        <div className="carousel">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            slidesPerGroup={1}
            loop={true}
            className="tCarousel"
          >
            {ReviewsData.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial" >
                  <img   src={review.image} alt="" />

                  
                  <span > {review.comment}</span>
                  
                <hr />
                  
                  <span >{review.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      

    </section>
  );
}

export default Review;
