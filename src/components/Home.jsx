import React from 'react'
import styled from 'styled-components';
import BannerComp from './banner/Banner';
import Projects from './projects/Projects';
import Service from './service/Service';

const Home = () => {
  return (
    <Container>
      <Banner>
        <BannerComp/>
      </Banner>
      <Service/>
      <Projects/>
    </Container>
  )
}

export default Home;

const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`