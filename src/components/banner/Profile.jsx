import React from 'react'
import styled from 'styled-components';
import {AiOutlineInstagram} from 'react-icons/ai';
import {GiEarthAmerica} from 'react-icons/gi';
import {FaLinkedinIn} from 'react-icons/fa';
import {Fade} from 'react-awesome-reveal';

const ProfileComp = () => {
  return (
    <Content>
        <Fade left>
            <Texts>
                <h4>Hello <span className='green'>I'm</span></h4>
                <h1>Milad Amiri</h1>
                <h3>UX/UI Designer and graphic designer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum nulla explicabo voluptatum eum fugiat est eligendi 
                aut fuga vel iste?</p>
                <button>Let's Talk</button>
                <Social>
                    <p>Check out my</p>
                    <div className="social-icons">
                        <span><a href="#instagram"><AiOutlineInstagram/></a></span>
                        <span><a href="#website"><GiEarthAmerica/></a></span>
                        <span><a href="3linkedIn"><FaLinkedinIn/></a></span>
                    </div>
                </Social>
            </Texts>
        </Fade>
        <Fade right>
            <Profile>
                <img 
                src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png" 
                alt="" />
            </Profile>
        </Fade>
    </Content>
  )
}

export default ProfileComp;

const Content = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 3rem;
    z-index: 99999;
    @media(max-width:1100px){
        padding: 1.5rem 0;
    }
    @media(max-width:650px){
        flex-direction: column;
    }
`
const Texts = styled.div`
    flex: 1;
    h4{
        padding: 1rem 0;
        font-weight: 500;
    }
    h1{
        font-size: 2rem;
        font-family: 'Secular One', sans-serif;
        letter-spacing: 2px;
        color: #01be96;
    }
    h3{
        font-weight: 500;
        font-size: 1.2rem;
        padding-bottom: 1.2rem;
        text-transform: capitalize;
    }
    p{
        font-weight: 300;
    }
    button{
        margin-top: 3rem;
        padding: 0.7rem 2rem;
        cursor: pointer;
        background-color: #01be96;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-weight: 500;
        filter: drop-shadow(0px 10px 10px #01be9551);
        &:hover{
            filter: drop-shadow(0px 10px 10px #01be9570);
        }
    }
`
const Profile = styled.div`
    img{
        filter: brightness(120%);
        filter: contrast(100%);
        filter: drop-shadow(0px 10px 10px #01be9570);
        width: 25rem;
        transition: transform 400ms ease-in-out;
        @media(max-width:810px){
            width: 20rem;
        }
        @media(max-width:671px){
            width: 19rem;
        }
        @media(max-width:650px){
            width: 100%;
        }
    }
    :hover img{
        transform: translateY(-10px);
    }
`

const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    p{
        font-size: 0.9rem;
        @media(max-width:700px){
            font-size: 0.8rem;
        }
    }
    .social-icons{
        display: flex;
        align-items: center;
        gap: 1rem;
        span{
            width: 2.3rem;
            height: 2rem;
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
            position: relative;
            background-color: #01be96;
            transition: transform 400ms ease-in-out;
            :hover{
                transform: rotate(360deg);
            }
            a{
                color: #fff;
                position: absolute;
                top: 55%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
`