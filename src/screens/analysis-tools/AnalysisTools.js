import React, { Component } from "react";
import styled from "styled-components";
import { SystemFlex, SystemText } from "../../system";
import { SystemMargin } from "../../system/SystemMargin";
import { observer } from "../../../node_modules/mobx-react";
import { observable, action } from "../../../node_modules/mobx";
import { LoactionSearch } from "../../map/LocationSearch";

const AnalysisToolsContainer = styled.div`
  width: 440px;
  height: 750px;
  background-color: ${({ theme }) => theme.colors.darklight};
  ${({ hide }) => hide && `overflow: hidden`};
  ${({ hide }) => hide && `width: 5px`};
`;

const AnalysisToolsElementContainer = styled.div`
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

const DrawerButtonContainer = styled.div`
  position: relative;
  top: 200px;
  right: 5px;
  border-radius: 5px;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.lightdark};
  border: solid;
  border-color: black;
  border-width: thin;
  &:hover {
    background-color: white;
  }
`;

const DrawerButton = ({ onClick }) => {
  return <DrawerButtonContainer onClick={onClick} />;
};

@observer
export class AnalysisTools extends Component {
  @observable
  hide = false;

  @action
  handleDrawer = () => {
    this.hide = !this.hide;
  };

  render() {
    const { handleDataType } = this.props;
    return (
      <AnalysisToolsContainer hide={this.hide}>
        <LoactionSearch />
        <ToolBarHeader />
        {analysisToolButtonData.map(data => {
          return (
            <AnalysisToolsElement
              key={data.name}
              name={data.name}
              type={data.type}
              onClick={() => {
                handleDataType(data.type);
              }}
            />
          );
        })}
        <DrawerButton onClick={this.handleDrawer} />
      </AnalysisToolsContainer>
    );
  }
}
