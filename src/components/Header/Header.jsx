import React from 'react';
import { Nav, Logo, Div, A, BoxButton, Lupa, Button } from './style';

const Header = () => {
  return (
    <Nav>
      <Logo>
       
      </Logo>

      <Div>
        <A> Home</A>
        <A>Contato</A>
        <BoxButton>
          <Lupa>
          </Lupa>
          <Button> Login</Button>
        </BoxButton>
      </Div>
    </Nav>
  );
};

export default Header;