import React from "react";
import styled from "styled-components";
import Group5 from "../Pages/Group5.jpg";

const Hero = () => {
  return (
    <Container>
      <Main>
        <Image src={Group5} />
        <TextHolder>
          <Text>
            THIS IS GROUP 5 STUDENTS, we design great and highly responsive
            websites
          </Text>
        </TextHolder>
      </Main>
    </Container>
  );
};

export default Hero;

const TextHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200vh;
  width: 50vw;
  margin: 30px;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Image = styled.img`
  width: 600px;
  height: 70vh;
//  border-radius: 10px;
    transition: translate(-9px, -9px)
    transition: all 450ms ease-in-out;
    object-fit: cover;

    `;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: teal;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 90vh;
  width: 100%;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
