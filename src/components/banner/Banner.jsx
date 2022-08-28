import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ProfileComp from './Profile';
import { Fade } from 'react-awesome-reveal';

const BannerComp = () => {
  return (
    <Container>
      <Fade top>
        <Header/>
      </Fade>
        <ProfileComp/>
    </Container>
  )
}

export default BannerComp;

const Container = styled.div`
    width: 85%;
    max-width: 1280px;
    margin: 0 auto;
    height: 100vh;
    min-height: 100%;
    @media(max-width:1100px){
      height: 100%;
    }
    @media(max-width:970px){
        width: 90%;
    }
`