import React, { FC } from 'react';
import styled from 'styled-components';
import { Footer, Header, Nav } from './components';
import { About, Projects } from './pages';

const App: FC = () => {
  return (
    <div>
      <Header />
      {/* <Nav /> */}
      <Main>
        <About />
        <Projects />
      </Main>
      {/* <Lego /> */}
      <Footer />
    </div>
  );
};

const Main = styled.main`
  width: 90rem;
  margin: 5rem auto;
`;

export default App;
