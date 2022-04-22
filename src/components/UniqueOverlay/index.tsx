import React from 'react';
import { useTransform } from 'framer-motion';
import useWrapperScroll from '../Model/useWrapperScroll';
import { Container, Header, Logo, Burger, Footer } from './styles';


const UniqueOverlay: React.FC = () => {

  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);


  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href="https://www.tesla.com/">UI Clone</a>
          </li>
          <li>
            <a href="https://www.tesla.com/">all copyright ©  reserved for Tesla</a>
          </li>
          <li>
            <a href="https://github.com/MarceloMafraBJJ">By Marcelo Mafra ;)</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
