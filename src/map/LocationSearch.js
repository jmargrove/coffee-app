import React from "react";
import styled from "styled-components";
import { SystemFlex, SystemSpace, SystemText } from "../system";

const SearchContainer = styled.div`
  height: 50px;
  width: 500px;
`;

const SystemInput = styled.input`
    width: 500px;
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

export const LoactionSearch = () => {
  return (
    <MarginLeftWrapper size={"ATOMIC"}>
      <SearchContainer>
        <SystemFlex row noFlex>
          <MarginLeftWrapper size={"ATOMIC"}>
            <SystemInput
              id="google-search-input"
              type="text"
              placeholder="Search location..."
            />
          </MarginLeftWrapper>
        </SystemFlex>
      </SearchContainer>
    </MarginLeftWrapper>
  );
};
