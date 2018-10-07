import React from "react";
import styled from "styled-components";
import {
  SystemSpace,
  SystemHeaderText,
  SystemFlex,
  SystemText
} from "../system";
import Avatar from "@material-ui/core/Avatar";

const HeaderContainer = styled.header`
  ${({ theme }) => `background-color:${theme.colors.dark}`};
  ${({ theme }) => `height: ${theme.size.HUGE};`};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderComponent = ({ title }) => {
  return (
    <HeaderContainer>
      <SystemFlex row noFlex align="center">
        <SystemSpace size={"BIG"} />
        <SystemHeaderText>{title}</SystemHeaderText>
      </SystemFlex>
      <SystemSpace size={"SMALL"} />

      <SystemFlex justify="center" align="center" noFlex row>
        <Avatar
          src={require("../assets/10_woman D.jpg")}
          style={{ width: "60px", height: "60px" }}
        />
        <SystemText size={12}>Name: Sofia Rios</SystemText>
        <SystemSpace size="SMALL" />
      </SystemFlex>
    </HeaderContainer>
  );
};
