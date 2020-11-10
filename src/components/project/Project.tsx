import React from 'react';
import styled from 'styled-components';
import ex from '../../images/logo_trans.png';

interface ProjectProps {
  stack?: string[];
  javascript?: boolean;
  typescript?: boolean;
  react?: boolean;
  next?: boolean;
  scss?: boolean;
  styledComponents?: boolean;
  storybook?: boolean;
  github?: string;
  youtube?: string;
  web?: string;
}

const Project: React.FC<ProjectProps> = () => {
  return (
    <Wrap>
      <Img src={ex} alt="project img" />
      <Description>
        <Title>GDAC</Title>
        <SubTitle>암호화폐 거래소 지닥 클론</SubTitle>
        <Stacks>
          <Stack>JavaScript</Stack>
          <Stack>React</Stack>
        </Stacks>
      </Description>
    </Wrap>
  );
};

const Wrap = styled.div`
  border: 1px solid gray;
  border-radius: 1rem;
  width: 30rem;
  height: 50rem;
`;

const Img = styled.img`
  border: 1px solid red;
  width: 100%;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 1rem 1rem;
`;

const Title = styled.h2``;

const SubTitle = styled.h4`
  font-weight: 400;
  margin: 1rem 0;
`;

const Stacks = styled.div`
  display: flex;
`;

const Stack = styled.div`
  border: 1px solid yellow;
  border-radius: 2rem;
  background-color: yellow;
  padding: 0 0.5rem;
  font-size: 1.3rem;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default Project;
