import React from 'react'
import styled from 'styled-components';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
  return (
    <Content>
        <h1>Recent <span className="green">Projects</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nam eos impedit voluptate aliquam ab reprehenderit alias quis pariatur facere. Eaque.</p>
        <Slide>
        <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ghazni/image/upload/v1659091340/Yt-portfolio/png-clipart-responsive-web-design-wordpress-website-wireframe-mobile-phones-mockup-wordpress-template-electronics_fhzndr.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ghazni/image/upload/v1659091340/Yt-portfolio/png-clipart-responsive-web-design-wordpress-website-wireframe-mobile-phones-mockup-wordpress-template-electronics_fhzndr.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ghazni/image/upload/v1659091340/Yt-portfolio/png-clipart-responsive-web-design-wordpress-website-wireframe-mobile-phones-mockup-wordpress-template-electronics_fhzndr.png" alt="" />
        </SwiperSlide>
      </Swiper>
        </Slide>
    </Content>
  )
}

export default Projects;

const Content = styled.div`
    padding: 3rem 0;
    text-align: center;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    h1{
        font-size: 1.9rem;
    }
    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 483px){
          width: 90%;
        }
    }
`

const Slide = styled.div``