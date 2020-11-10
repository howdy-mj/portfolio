import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo_trans.png';

const Header: React.FC = () => {
  return (
    <Wrap>
      <Logo src={logo} />
      <Text>Frontend Developer</Text>
    </Wrap>
  );
};

const Wrap = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primaryColor};
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 20rem;
  height: 20rem;
`;

const Text = styled.div`
  font-family: 'Lego';
  font-weight: 600;
  color: white;
  font-size: 4rem;
`;

export default Header;
