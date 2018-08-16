import React from "react";
import styled from "styled-components";
import { SystemFlex, SystemSpace, SystemText } from "../system";

const SearchContainer = styled.div`
  height: 50px;
  width: 500px;
`;

const SystemInput = styled.input`
    width: 400px;
    height: 30px
    font-size: 20px;
    border-bottom: solid;
    border-bottom-color: ${({ theme }) => theme.colors.lightdark}
    border-bottom-width: thin
`;

const MarginLeftWrapper = ({ children, size }) => {
  return (
    <SystemFlex>
      <SystemSpace size={size} />
      <SystemFlex row noFlex>
        <SystemSpace size={size} />
        {children}
      </SystemFlex>
    </SystemFlex>
  );
};

const SystemButton = ({ onClick }) => {
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

export const LoactionSearch = () => {
  return (
    <MarginLeftWrapper size={"SMALL"}>
      <SearchContainer>
        <SystemFlex row noFlex>
          <MarginLeftWrapper size={"ATOMIC"}>
            <SystemInput
              id="google-search-input"
              type="text"
              placeholder="Search location..."
            />
          </MarginLeftWrapper>
          <SystemButton onClick={() => console.log("clicked")} />
        </SystemFlex>
      </SearchContainer>
    </MarginLeftWrapper>
  );
};
