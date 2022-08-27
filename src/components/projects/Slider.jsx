import React, {useRef} from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import SingleProject from './SingleProject';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

let data = [
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]}

    
  const SliderComp = () => {
  const slideRef = useRef(null);
    let projectSlider = "";
    projectSlider = data.map((item) => (
        <SingleProject item={item} key={item.img}/>
    ));
    return (
        <Container>
            <Slider ref={slideRef} {...settings}>
                {projectSlider}
            </Slider>
            <Buttons>
                <Button onClick={() => slideRef?.current.slickNext()}><IoIosArrowForward/></Button>
                <Button1 onClick={() => slideRef?.current.slickPrev()}><IoIosArrowBack/></Button1>
            </Buttons>
        </Container>
      );
}

export default SliderComp;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  @media(max-width:970px){
    width: 100%;
  }
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 2rem;
`
const Button = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: rgba(255, 255, 255, 0.100);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
  position: absolute;
  top : 45%;
  right: -1rem;
  color: #01be96;
`

const Button1 = styled(Button)`
  left: -1rem;
`
