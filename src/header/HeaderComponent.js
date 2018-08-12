import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: blue;
  height: 75px;
`;

export const HeaderComponent = ({ title }) => {
  return (
    <HeaderContainer>
      <p>{title}</p>
    </HeaderContainer>
  );
};
