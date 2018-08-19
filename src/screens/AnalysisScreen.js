import React, { Component } from "react";
import { HeaderComponent } from "../header/HeaderComponent";
import { MapComponent } from "../map/MapComponent";
import { SystemSpace, SystemFlex, SystemMargin } from "../system";
import { LoactionSearch } from "../map/LocationSearch";
import { AnalysisTools } from "./analysis-tools/AnalysisTools";
import { observable, action } from "../../node_modules/mobx";
import { observer } from "mobx-react";
import styled from "styled-components";
import { Marker } from "react-google-maps";

const MapWithSearch = () => {
  return (
    <div>
      <LoactionSearch />
      <MapComponent />
    </div>
  );
};

const DataPresentationContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: solid;
  border-width: thin;
  border-color: ${({ theme }) => theme.colors.lightdark};
`;

const ToolBarHeaderContainer = styled.div`
  width: 500px;
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

const Cell = styled.div`
  width: 200px;
  height: 30px;
  border: solid;
  border-width: thin;
  border-color: ${({ theme }) => theme.colors.lightdark};
  &:hover {
    border-color: ${({ theme }) => theme.colors.light};
  }
`;

const DataPresentation = ({ dataCoords }) => {
  return (
    <div>
      <ToolBarHeader />
      <DataPresentationContainer>
        <Cell>{dataCoords.lat}</Cell>
        <Cell>{dataCoords.lng}</Cell>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </DataPresentationContainer>
    </div>
  );
};

@observer
export class AnalysisScreen extends Component {
  @observable
  dataType = "POINT";
  @observable
  dataCoords = { lat: 0, lng: 0 };

  @action
  handleDataMovement = coords => {
    this.dataCoords = { lat: coords.latLng.lat(), lng: coords.latLng.lng() };
  };

  @action
  handleDataType = type => {
    this.dataType = type;
  };

  render() {
    return (
      <div>
        <HeaderComponent title="Coffee yeild generator" />
        <SystemFlex row noFlex>
          <AnalysisTools handleDataType={this.handleDataType} />
          <div>
            <LoactionSearch />
            <MapComponent
              mapAttributes={() => <Marker position={this.dataCoords} />}
              dataType={this.dataType}
              handleDataMovement={this.handleDataMovement}
            />
          </div>
          <DataPresentation dataCoords={this.dataCoords} />
        </SystemFlex>
      </div>
    );
  }
}
