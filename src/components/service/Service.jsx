import React from 'react'
import styled from 'styled-components';
import { MdDesignServices } from 'react-icons/md';
import { FiCodesandbox } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import Card from './Card';
import Flip from 'react-reveal/Flip';
import { Fade } from 'react-reveal';

const Service = () => {
  return (
    <Content id='service'>
        <Flip top>
            <h4>My <span className="green">services</span></h4>
        </Flip>
        <Fade left>
            <h1>What I Do</h1>
        </Fade>
        <Cards>
            <Fade left>
                <Card
                Icon = {MdDesignServices}
                title = {"Ui/Ux Designer"}
                desc = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure rerum obcaecati et laborum earum!"}
                />
            </Fade>
            <Fade bottom>
                <Card
                Icon = {FiCodesandbox}
                title = {"Graphic Designer"}
                desc = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure rerum obcaecati et laborum earum!"}
                />
            </Fade>
            <Fade left>
                <Card
                Icon = {CgWebsite}
                title = {"Web Designer"}
                desc = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure rerum obcaecati et laborum earum!"}
                />
            </Fade>
        </Cards>
    </Content>
  )
}

export default Service;

const Content = styled.div`
    h1{
        padding-top: 1rem;
    }
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    @media(max-width:970px){
        width: 90%;
    }
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 4rem;
`