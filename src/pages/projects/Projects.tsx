import React from 'react';
import styled from 'styled-components';
import { Project } from '../../components';
import { CategoryTitle } from '../../components/ui';

const projectInfo = [
  {
    id: 1,
    title: 'BFRun',
    subtitle: '입문 개발자들을 위한 사이트',
    stacks: ['next', 'javascript', 'styled-componetns'],
    period: ['2020.07'],
    img:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/514f02b7-9bf3-4725-817d-285561dc8606/_2020-11-11__6.53.36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201111T100551Z&X-Amz-Expires=86400&X-Amz-Signature=a0f4ca6028c1427ab3dd0c3baa9750c0b937f0eacca14c55a3633d2480bd88ae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_2020-11-11__6.53.36.png%22',
    github: 'https://github.com/howdy-mj/wedac-frontend',
    description: '기획, 디자인, 개발',
  },
  {
    id: 2,
    title: 'GDAC',
    subtitle: '암호화폐 거래소 지닥 클론',
    stacks: ['react', 'redux', 'javascript', 'styled-componetns'],
    period: ['2020.04 - 2020.04 (2주)'],
    img:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/514f02b7-9bf3-4725-817d-285561dc8606/_2020-11-11__6.53.36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201111T100551Z&X-Amz-Expires=86400&X-Amz-Signature=a0f4ca6028c1427ab3dd0c3baa9750c0b937f0eacca14c55a3633d2480bd88ae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_2020-11-11__6.53.36.png%22',
    github: 'https://github.com/howdy-mj/wedac-frontend',
    youtube:
      'https://www.youtube.com/watch?v=LdF1LG_R4Uo&feature=youtu.be&ab_channel=yeeunlee',
  },
  {
    id: 1,
    title: '폴바셋',
    subtitle: '카페 폴바셋 웹 클론',
    stacks: ['react', 'javascript', 'scss'],
    period: ['2020.04 - 2020.04 (2주)'],
    img:
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/514f02b7-9bf3-4725-817d-285561dc8606/_2020-11-11__6.53.36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201111T100551Z&X-Amz-Expires=86400&X-Amz-Signature=a0f4ca6028c1427ab3dd0c3baa9750c0b937f0eacca14c55a3633d2480bd88ae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22_2020-11-11__6.53.36.png%22',
    github: 'https://github.com/howdy-mj/wedac-frontend',
    youtube:
      'https://www.youtube.com/watch?v=LdF1LG_R4Uo&feature=youtu.be&ab_channel=yeeunlee',
  },
];

const Projects = () => {
  return (
    <Wrap>
      <CategoryTitle>Projects</CategoryTitle>
      {projectInfo &&
        projectInfo.map((project) => (
          <Project
            key={project.id}
            img={project.img}
            title={project.title}
            subtitle={project.subtitle}
            stacks={project.stacks}
            period={project.period}
            github={project.github}
            youtube={project.youtube}
            description={project.description}
          />
        ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 2rem;
`;

export default Projects;
