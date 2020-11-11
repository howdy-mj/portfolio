import React from 'react';
import styled from 'styled-components';
import { CategoryTitle, Lego } from '../../components/ui';

const About: React.FC = () => {
  return (
    <Wrap>
      <CategoryTitle>About</CategoryTitle>
      <div>안녕하세요, 프론트엔드 개발자 김민정입니다.</div>
      <div>
        React.js와 Next.js를 이용하여 웹 개발을 주로 하고 있습니다. 반응형 웹,
        크로스 브라우징, 디자인 시스템 구축에 관심이 많습니다.
      </div>
      <div>주로 사용하는 언어는 JavaScript와 TypeScript입니다.</div>
      <SeeResume href="https://howdy-mj.me/about" target="blank">
        이력서 보러가기
      </SeeResume>
    </Wrap>
  );
};

const Wrap = styled.div``;

const SeeResume = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  margin: 1rem 0;
  background-color: ${(props) => props.theme.yellow};
  border: 3px solid black;
`;

export default About;
