import React from 'react'
import styled from 'styled-components';
import {IoIosQuote} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";

const Client = (props) => {
    const {name, stars, position , img_url, disc} = props.item;
  return (
    <Container>
        <Header>
            <span className='quote'><IoIosQuote/></span>
            <div>
            {Array(stars).fill().map((_, i) => (
                    <span 
                    key={i}
                    className='stars'><AiOutlineStar/></span>
                    ))}
            </div>
        </Header>
        <Body>
            {disc}
        </Body>
        <Footer>
            <img src={img_url} alt={name} />
            <div className="details">
                <h1>{name}</h1>
                <p>{position}</p>
            </div>
        </Footer>
    </Container>
  )
}

export default Client;

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 0.5rem 1rem 1rem 1rem;
    margin: 0 1rem;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #01be96;
        opacity: 0.7;
    }
    .stars{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 4rem;
        border-radius: 50px;
    }
    h1{
        font-size: 1.2rem;
        font-weight: 700;
    }

    p{
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.500);
    }
`