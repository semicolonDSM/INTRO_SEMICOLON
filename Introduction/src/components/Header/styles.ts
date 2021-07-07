import styled from "@emotion/styled";
import { color } from "../../style";

//헤더
export const HeaderContainer = styled.div`
  height: 70px;
  background-color: #ffffff;
  color: black;
  border-bottom: 1px solid rgb(200, 200, 200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 100px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  img {
    width: 64px;
    height: 64px;
  }
`;

export const Github = styled.a`
  img {
    width: 24px;
    height: 24px;
  }
`;
