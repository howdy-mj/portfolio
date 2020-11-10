import React, { FC } from 'react';
import { Footer, Header, Nav, Project } from './components';
import { CategoryTitle, Lego } from './components/ui';
import styled from 'styled-components';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Main>
        <CategoryTitle>About</CategoryTitle>
        <Project />
      </Main>
      {/* <Lego /> */}
      <Footer />
    </div>
  );
};

const Main = styled.main`
  width: 90rem;
  margin: 0 auto;
`;

export default App;
