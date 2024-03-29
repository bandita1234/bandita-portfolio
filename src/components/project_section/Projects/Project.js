import React from "react";
import "./project.css";
import ProjectCard from "../projectCard/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

import djhfb from "../../../img/bandita_img.jpg";

const Project = () => {
  return (
    <div id="projects">
      <h2 className="heading">My Projects</h2>
      <div className="swiper_container">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            463: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
            },
            1700: {
              slidesPerView: 6,
            },
            2000: {
              slidesPerView: 7,
            },
          }}
        >
          <SwiperSlide>
            <div>
              <ProjectCard
                imageSrc={djhfb}
                title="fbhvcjsdhfujkc"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi recusandae fugit, et rem explicabo quaerat molestias maiores temporibus deserunt earum voluptatem tempore odio facere nihil aperiam quasi iusto velit!"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <ProjectCard
                imageSrc={djhfb}
                title="fbhvcjsdhfujkc"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi recusandae fugit, et rem explicabo quaerat molestias maiores temporibus deserunt earum voluptatem tempore odio facere nihil aperiam quasi iusto velit!"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <ProjectCard
                imageSrc={djhfb}
                title="fbhvcjsdhfujkc"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi recusandae fugit, et rem explicabo quaerat molestias maiores temporibus deserunt earum voluptatem tempore odio facere nihil aperiam quasi iusto velit!"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <ProjectCard
                imageSrc={djhfb}
                title="fbhvcjsdhfujkc"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi recusandae fugit, et rem explicabo quaerat molestias maiores temporibus deserunt earum voluptatem tempore odio facere nihil aperiam quasi iusto velit!"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <ProjectCard
                imageSrc={djhfb}
                title="fbhvcjsdhfujkc"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi recusandae fugit, et rem explicabo quaerat molestias maiores temporibus deserunt earum voluptatem tempore odio facere nihil aperiam quasi iusto velit!"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <ProjectCard
                imageSrc={djhfb}
                title="fbhvcjsdhfujkc"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi recusandae fugit, et rem explicabo quaerat molestias maiores temporibus deserunt earum voluptatem tempore odio facere nihil aperiam quasi iusto velit!"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
