import React from "react";
import styled from "styled-components";

export const SystemButton = ({ onClick }) => {
  const ButtonContainer = styled.div`
    width: 70px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.lightdark};
    border-radius: 5px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darklight};
      cursor: pointer;
    }
  `;

  return (
    <MarginLeftWrapper size={"ATOMIC"}>
      <ButtonContainer onClick={onClick}>
        <SystemFlex noFlex flex={1} justify="center" align="center">
          <SystemText>go.</SystemText>
        </SystemFlex>
      </ButtonContainer>
    </MarginLeftWrapper>
  );
};
