import React from "react";
import styled from "styled-components";
import { Cell } from "./cell/Cell";
import { SystemMargin } from "../system/SystemMargin";

const DataPresentationContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: solid;
  border-width: thin;
  border-color: ${({ theme }) => theme.colors.lightdark};
`;

const ToolBarHeaderContainer = styled.div`
  width: 600px;
  height: 30px;
  border-bottom: solid;
  border-bottom-color: black;
  border-bottom-width: thin;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToolBarHeader = () => {
  return (
    <SystemMargin size={"SMALL"} botOff>
      <ToolBarHeaderContainer>
        <div>Data</div>
      </ToolBarHeaderContainer>
    </SystemMargin>
  );
};

const Cells = ({ n }) => {
  const cellNumber = Array(n).fill(1);
  return cellNumber.map(el => {
    return <Cell />;
  });
};

export const DataPresentation = ({ dataCoords }) => {
  return (
    <div>
      <ToolBarHeader />
      <SystemMargin size={"SMALL"}>
        <DataPresentationContainer>
          <Cells n={17 * 3} />
        </DataPresentationContainer>
      </SystemMargin>
    </div>
  );
};
