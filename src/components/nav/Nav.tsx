import React from 'react';
import styled from 'styled-components';

const Nav: React.FC = () => {
  return (
    <Wrap>
      <Categories>
        <Category>About</Category>
        <Category>Stack</Category>
        <Category>Project</Category>
      </Categories>
    </Wrap>
  );
};

const Wrap = styled.nav`
  height: 5rem;
  /* border: 1px solid ${(props) => props.theme.subYellow}; */
  border: 1px solid black;
  background-color: black;
  color: white;
`;

const Categories = styled.div`
  width: 90rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  font-weight: 700;
  height: 100%;
`;

export default Nav;
