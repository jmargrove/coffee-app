import React from "react";
import styled from "styled-components";
import { SystemSpace, SystemHeaderText } from "../system";
const HeaderContainer = styled.header`
  ${({ theme }) => `background-color:${theme.colors.dark}`};
  ${({ theme }) => `height: ${theme.size.HUGE};`};
`;

export const HeaderComponent = ({ title }) => {
  return (
    <HeaderContainer>
      <SystemSpace size={"BIG"} />
      <SystemHeaderText>{title}</SystemHeaderText>
    </HeaderContainer>
  );
};
