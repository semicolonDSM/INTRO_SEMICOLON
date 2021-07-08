import { color } from './../../style/index';
import styled from "@emotion/styled";

//헤더
export const HeaderContainer = styled.div`
  height: 70px;
  background-color: #ffffff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 120px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  color: black;
  img {
    width: 64px;
    height: 64px;
  }



`;

export const HamburgerBar = styled.div`
  font-size: 18px;
  width: 30px;
  cursor: pointer;
`;
