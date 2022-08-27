import React from 'react'
import styled from 'styled-components';
import { MdDesignServices } from 'react-icons/md';
import { FiCodesandbox } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import Card from './Card';

const Service = () => {
  return (
    <Content>
        <h4>My <span className="green">services</span></h4>
        <h1>What I Do</h1>
        <Cards>
            <Card
            Icon = {MdDesignServices}
            title = {"Ui/Ux Designer"}
            desc = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure rerum obcaecati et laborum earum!"}
            />
            <Card
            Icon = {FiCodesandbox}
            title = {"Graphic Designer"}
            desc = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure rerum obcaecati et laborum earum!"}
            />
            <Card
            Icon = {CgWebsite}
            title = {"Web Designer"}
            desc = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure rerum obcaecati et laborum earum!"}
            />
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