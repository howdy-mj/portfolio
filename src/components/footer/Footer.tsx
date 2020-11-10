import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <Wrap>
      <Content>
        아이콘 제작자{' '}
        <a href="https://smashicons.com/" title="Smashicons">
          Smashicons
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/kr/" title="Flaticon">
          {' '}
          www.flaticon.com
        </a>
      </Content>
    </Wrap>
  );
};

const Wrap = styled.footer`
  background-color: ${(props) => props.theme.subColor};
  color: white;
`;

const Content = styled.div`
  width: 90rem;
  margin: 0 auto;
`;

export default Footer;
