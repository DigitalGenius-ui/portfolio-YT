import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
import Client from './Client';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from 'react';

let clients = [
    {
        name : "Milad Amiri",
        position : "web developer",
        img_url : "https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg",
        stars : 3,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "Milad Amiri",
        position : "web developer",
        img_url : "https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg",
        stars : 4,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "Milad Amiri",
        position : "web developer",
        img_url : "https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg",
        stars : 5,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "Milad Amiri",
        position : "web developer",
        img_url : "https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg",
        stars : 5,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Testimonials = () => {
  const buttonRef = useRef(null);
  
  let clientsDisc = "";
  clientsDisc = clients.map((item) => (
      <Client item={item} key={item.stars}/>
  ))
  return (
    <Container>
        <span className="green">TESTIMONIALS</span>
        <h1>What Clients Say</h1>
        <Clients>
            <Slider ref={buttonRef} {...settings}>
                {clientsDisc}
            </Slider>
            <Buttons>
              <button
              onClick={() => buttonRef.current.slickNext()}
              ><IoIosArrowBack/></button>
              <button
              onClick={() => buttonRef.current.slickPrev()}
              ><IoIosArrowForward/></button>
            </Buttons>
        </Clients>
    </Container>
  )
}

export default Testimonials;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;
    @media(max-width : 970px){
      width: 90%;
    }
    span{
        font-weight: 700;
    }

    h1{
        padding-top: 1rem;
    }

.slick-dots{
  text-align: left;
  padding-left: 1rem;
}

.slick-dots li button:before{
    content: "";
  }
  .slick-dots li button{
    background: linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
    height: 4px;
    width: 9px;
    padding: 0.1rem;
    border-radius: 50px;
    transition: all 500ms ease-in-out;
    margin-top: 1rem;
  }
  .slick-dots li.slick-active button{
    background: #01be96;
    width: 15px;
  }
  .slick-dots li{
    margin: 0 ;
  }

.slick-dots li.slick-active button{
  width: 15px;
}
.slick-list, .slick-slider, .slick-track {
  padding-bottom: 0rem;
}

`

const Clients = styled.div`
    margin-top: 2rem;
    position: relative;
`

const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;
  button{
    background-color: transparent;
    border: none;
    margin-left: 0.5rem;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }
  @media(max-width : 600px){
    display: none;
  }
`