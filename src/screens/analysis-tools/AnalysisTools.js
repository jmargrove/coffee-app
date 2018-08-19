import React from "react";
import styled from "styled-components";
import { SystemFlex, SystemText } from "../../system";
import { SystemMargin } from "../../system/SystemMargin";

const AnalysisToolsContainer = styled.div`
  height: 750px;
  background-color: ${({ theme }) => theme.colors.darklight};
`;

const AnalysisToolsElementContainer = styled.div`
  width: 100px;
  height: 50px;
  border: solid;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: black;
  border-width: thin;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightdark};
    cursor: pointer;
  }
`;

const ToolBarHeaderContainer = styled.div`
  width: 100px;
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
        <div>Tools</div>
      </ToolBarHeaderContainer>
    </SystemMargin>
  );
};

const AnalysisToolsElement = ({ name, onClick }) => {
  return (
    <SystemMargin size={"SMALL"} botOff>
      <AnalysisToolsElementContainer onClick={onClick}>
        <SystemText>{name}</SystemText>
      </AnalysisToolsElementContainer>
    </SystemMargin>
  );
};

const analysisToolButtonData = [
  { name: "point", type: "POINT" },
  { name: "polygon", type: "POLYGON" }
];

export const AnalysisTools = ({ handleDataType }) => {
  return (
    <AnalysisToolsContainer>
      <ToolBarHeader />
      {analysisToolButtonData.map(data => {
        return (
          <AnalysisToolsElement
            key={data.name}
            name={data.name}
            type={data.type}
            onClick={() => {
              // console.log("clicked", data.type);
              handleDataType(data.type);
            }}
          />
        );
      })}
    </AnalysisToolsContainer>
  );
};
