import React from 'react'
import styled from 'styled-components';
import {MdAlternateEmail} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {HiOutlineMailOpen} from "react-icons/hi";
import {AiFillGithub, AiFillLinkedin, AiOutlineArrowUp} from "react-icons/ai";
import {BsFacebook, BsSlack} from "react-icons/bs";
import {FiMail, FiPhoneCall} from "react-icons/fi";
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
    const [state, handleSubmit] = useForm("xeqdorro");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    const scrollHandler = () => {
        window.scroll({
            top: 0,
            behavior : "smooth"
        })
    }
  return (
    <Container>
        <Wrapper>
            <Profile>
                <h1>Portfolio</h1>
                <div className="address">
                    <h1>Address:</h1>
                    <p>1030 Southwood Dr San Luis Obispo, California(CA), 93401</p>
                </div>
                <div className="links">
                    <h1>Contact me Directly:</h1>
                    <div >
                        <span><FiPhoneCall/></span>
                        <a href="tel:+4733378901">+47 333 78 901</a>
                    </div>
                    <div>
                        <span><HiOutlineMailOpen/></span>
                        <a href="mailto:miladamiri@gmail.com">miladamiri@gmail.com</a>
                    </div>
                </div>
                    <div className="profile">
                        <h1>Check my Profiles:</h1>
                        <div className="icons">
                            <span><a href="#github"><AiFillGithub/></a></span>
                            <span><a href="#fb"><BsFacebook/></a></span>
                            <span><a href="#slack"><BsSlack/></a></span>
                            <span><a href="#linkedIn"><AiFillLinkedin/></a></span>
                        </div>
                    </div>
                    <ArrowUp
                    onClick={scrollHandler}
                    ><AiOutlineArrowUp/></ArrowUp>
            </Profile>
            <Form>
                <h1>Contact <span className="green">Me</span></h1>
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <div><CgProfile/></div>
                        <input 
                        id='name' name='name'
                        type="text" placeholder='Fullname...' />
                    </div>
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                    <div className="email">
                        <div><MdAlternateEmail/></div>
                        <input 
                        id="email" name='email'
                        type="email" placeholder='Email...' />
                    </div>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <div className="message">
                        <div className='messageIcon'><FiMail/></div>
                        <textarea
                        id='message' name='message'
                        cols="30" rows="10" placeholder='Message...' ></textarea>
                    </div>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    background:  linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    margin-top: 2rem;
    position: relative;
`
const Wrapper = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    @media(max-width : 970px){
        width: 90%;
    }
    @media(max-width : 650px){
        flex-direction: column;
        gap: 3rem;
    }
`
const Profile = styled.div`
    flex: 1;
    .address{
        padding: 1rem 0;
        h1{
            font-size: 1.2rem;
        }
        p{
            width: 60%;
            padding-top: 0.5rem;
            @media(max-width : 650px){
                width: 100%;
            }
        }
    }
    .links{
        h1{
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }
        div{
            display: flex;
            align-items: center;
            gap:0.5rem;
            a{
                text-decoration: none;
                color: lightgray;
            }
        }
    }
    .profile{
        h1{
            font-size: 1.2rem;
            padding: 1rem 0 ;
        }
        .icons{
            display: flex;
            align-items: center;
            span{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: black;
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem ;
                border-radius: 50px;
                a{
                    margin-top: 0.2rem;
                    color: white;
                }
            }
        }
    }
`
const Form = styled.div`
    flex: 1;
    h1{
        font-size: 1.3rem;
        padding-bottom: 0.7rem;
    }
    form {
        border-radius: 5px;
        background-color: #191923;
        padding: 0.8rem;
        .name, .email, .message {
            display: flex;
            border: 1px solid gray;
            margin-bottom: 0.5rem;
            input, textarea{
                width: 100%;
                border: none;
                outline: none;
                color: white;
                background-color: transparent;
                border: none;
                padding: 1rem 0.5rem;
            }
            div{
                background-color: #3e3e3e;
                width: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .messageIcon{
                align-items: flex-start;
                padding-top: 0.5rem;
            }
        }
        button{
            width: 5rem;
            height: 1.8rem;
            cursor: pointer;
            background-color: #01be96;
            border: none;
            border-radius: 5px;
            filter: drop-shadow(0px 4px 5px #01be9551);
            :hover{
                filter: drop-shadow(0px 6px 9px #01be9551);
            }
        }
    }
`
const ArrowUp = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: #01be96;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.3rem;
    position: absolute;
    bottom: 3rem;
    @media(max-width: 650px){
        top: 40%;
        right: 1rem;
    }
`