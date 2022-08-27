import React from 'react'
import styled from 'styled-components';
import Slider from './Slider';
import Pulse from "react-reveal/Pulse"

const ProjectsSlide = () => {
  return (
    <Content id='project'>
        <Pulse>
          <h1>Recent <span className="green">Projects</span></h1>
        </Pulse>
        <Pulse>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nam eos impedit voluptate aliquam ab reprehenderit alias quis pariatur facere. Eaque.</p>
        </Pulse>
        <Slide>
          <Slider/>
        </Slide>
    </Content>
  )
}

export default ProjectsSlide;

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

const Slide = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
`