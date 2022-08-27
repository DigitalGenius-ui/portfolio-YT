import React, { useState } from 'react';
import styled from 'styled-components';
import {GiCandleFlame} from 'react-icons/gi';

const Header = () => {
    const [bar, setBar] = useState(false);
  return (
    <Content bar={bar}>
        <Logo>
            <span><GiCandleFlame/></span>
            <h1>Portfolio</h1>
        </Logo>
            <Nav bar={bar}>
                <a href="#home">Home</a>
                <a href="#service">Service</a>
                <a href="#project">Projects</a>
                <a href="#testimonial">Testimonials</a>
                <a href="#portfolio">Portfolio</a>
            </Nav>
                <div className="shadow"></div>
        <Bar bar={bar} onClick={() => setBar(!bar)}>
            <span className='active'></span>
        </Bar>
    </Content>
  )
}

export default Header;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    .shadow{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #0000009e;
        z-index: 1;
        display: ${props => props.bar ? "block" : "none"};
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
        color: #01be96;
    }
    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`
const Nav = styled.div`
    a{
        margin-left: 1rem;
        text-decoration: none;
        color: #fff;
        font-weight: 400;
    }
    @media(max-width:650px){
        background-color: #01be96;
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        top:${props => props.bar ? "90px" : "-20rem"};
        padding:${props => props.bar ? "1rem 0" : "0"};
        left: 5%;
        right: 5%;
        transition: all 400ms ease-in-out;
    }
    z-index: 10000;
`
const Bar = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    display: none;
    z-index: 100;
    @media(max-width:650px){
        display: flex;
    }
    span{
        position: absolute;
        width: 80%;
        height: 2px;
        background-color: ${props => props.bar ? "transparent" : `#fff`};
        border-radius: 5px;
        transition: all 400ms ease-in-out;
        :before, :after{
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fff;
            border-radius: 5px;
        }
        :before{
            transform: ${props => props.bar ? `rotate(-45deg)` : `translateY(8px)`};
            transition: all 400ms ease-in-out;
        }
        :after{
            transform: ${props => props.bar ? `rotate(45deg)` : `translateY(-8px)`};
            transition: all 400ms ease-in-out;
        }
    }
`