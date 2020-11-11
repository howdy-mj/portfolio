import React from 'react';
import styled from 'styled-components';
import ex from '../../images/logo_trans.png';
import { AiFillGithub, AiFillYoutube, AiOutlineGlobal } from 'react-icons/ai';

interface ProjectProps {
  title: string;
  subtitle: string;
  stacks: string[];
  img?: string;
  period: string[];
  github: string;
  description?: string;
  youtube?: string;
  web?: string;
}

const Project = (props: ProjectProps): JSX.Element => {
  const {
    title,
    subtitle,
    stacks,
    img = ex,
    period,
    github,
    description = null,
    youtube = null,
    web = null,
  } = props;
  return (
    <Wrap>
      <Img src={img} alt="project img" />
      <Description>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <div>{period}</div>
        {description && <div>{description}</div>}
        <Stacks>
          {stacks &&
            stacks.map((stack, index) => (
              <Stack key={index} stack={stack}>
                {stack}
              </Stack>
            ))}
        </Stacks>
        <More>
          {github && (
            <a href={github} target="blank">
              <GithubImg />
            </a>
          )}
          {youtube && (
            <a href={youtube} target="blank">
              <YoutubeImg />
            </a>
          )}
          {web && (
            <a href={web} target="blank">
              <AiOutlineGlobal />
            </a>
          )}
        </More>
      </Description>
    </Wrap>
  );
};

interface StackStyleProps {
  stack?: string;
}

const Wrap = styled.div`
  border-radius: 1rem;
  display: flex;
  margin: 2rem 0;
  position: relative;
`;

const Img = styled.img`
  width: 30rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 1rem;
`;

const Description = styled.div`
  margin-left: 2rem;
`;

const Title = styled.h2``;

const SubTitle = styled.h4`
  font-weight: 400;
  margin: 1rem 0;
`;

const Stacks = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const Stack = styled.div<StackStyleProps>`
  border-radius: 2rem;
  color: white;
  background-color: ${(props) => props.theme.test};
  padding: 0.3rem 0.8rem;
  font-size: 1.3rem;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const More = styled.div`
  display: flex;
  /* position: absolute;
  bottom: 0; */
`;

const GithubImg = styled(AiFillGithub)`
  font-size: 2.5rem;
`;

const YoutubeImg = styled(AiFillYoutube)`
  font-size: 2.5rem;
  color: red;
`;

export default Project;
