import React from "react";
import styled from "styled-components";
import { SystemMargin } from "../system/SystemMargin";

const SystemInput = styled.input`
    width: 400px;
    height: 35px
    font-size: 20px;
    border-bottom: solid;
    border-bottom-color: ${({ theme }) => theme.colors.dark}
    border-bottom-width: thin
`;

export const LoactionSearch = () => {
  return (
    <SystemMargin size={"SMALL"} botOff>
      <SystemInput
        id="google-search-input"
        type="text"
        placeholder="Search location..."
      />
    </SystemMargin>
  );
};
