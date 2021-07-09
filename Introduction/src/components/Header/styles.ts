import { COLOR } from './../../style/index';
import styled from "@emotion/styled";

//헤더
export const HeaderContainer = styled.div`
  height: 70px;
  background-color: #ffffff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 160px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  color: black;
  img {
    width: 64px;
    height: 64px;
    z-index: 10;
  }

  div {
    z-index: 10;
  }
`;

export const HamburgerBar = styled.div`
  font-size: 15px;
  width: 30px;
  cursor: pointer;
  z-index: 10;
`;
