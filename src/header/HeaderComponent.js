import React from "react";
import styled from "styled-components";
import { SystemSpace, SystemHeaderText, SystemFlex } from "../system";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";

const HeaderContainer = styled.header`
  ${({ theme }) => `background-color:${theme.colors.dark}`};
  ${({ theme }) => `height: ${theme.size.HUGE};`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderComponent = ({ title }) => {
  return (
    <HeaderContainer>
      <div>
        <SystemSpace size={"SMALL"} />
        <SystemFlex row noFlex>
          <SystemSpace size={"BIG"} />
          <SystemHeaderText>{title}</SystemHeaderText>
        </SystemFlex>
      </div>
      <SystemFlex justify="center" align="center" noFlex row>
        <Avatar
          src={require("../assets/10_woman D.jpg")}
          style={{ width: "60px", height: "60px" }}
        />
        <SystemSpace size="SMALL" />
      </SystemFlex>
    </HeaderContainer>
  );
};
