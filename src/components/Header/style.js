import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 13vh;
  font-family: 'Nunito Sans', sans-serif;
  box-shadow: 0 0 1em rgb(239, 203, 129, 0.1), 0 0 1em rgb(241, 177, 114, 0.2);
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  left: 5%;
  &:hover {
    cursor: pointer;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 80%;
  color: #f1b172;
`;

export const A = styled.button`
  font-size: 17px;
  font-weight: bolder;
  color: #f96525;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
    color: #d93240;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 110px;
  height: 30px;
`;

export const Lupa = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  background: rgba(255, 237, 201, 255);
  width: 25px;
  height: 25px;
  left: 5%;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  font-size: 17px;
  color: #f96525;
  background: #ffe4d9;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  width: 70px;
  height: 25px;
  &:hover {
    color: #ca3e02;
    border: 1px solid #ffe4d9;
    cursor: pointer;
  }
`;