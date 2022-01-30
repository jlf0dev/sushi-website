import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestimonialSlider = () => {
    return (
      <>
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
        >
          <SwiperSlide>
            <div className="h-full my-5 mx-10 text-center flex flex-col justify-center align-middle">
              <p className="font-light my-3 mx-10">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>
              <h5 className="font-normal my-3 mx-4">Michael Osvaldo</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full my-5 mx-10 text-center flex flex-col justify-center align-middle">
              <p className="font-light my-3 mx-4">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p>
              <h5 className="font-normal my-3 mx-4">Mario Brose</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full my-5 mx-10 text-center flex flex-col justify-center align-middle">
              <p className="font-light my-3 mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <h5 className="font-normal my-3 mx-4">Paula Kim</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
}

export default TestimonialSlider