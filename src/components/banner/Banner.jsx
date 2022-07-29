import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ProfileComp from './Profile';

const BannerComp = () => {
  return (
    <Container>
        <Header/>
        <ProfileComp/>
    </Container>
  )
}

export default BannerComp;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    max-width: 1100px;
    @media(max-width:970px){
        width: 90%;
    }
`