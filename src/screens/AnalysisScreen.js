import React, { Component } from "react";
import { HeaderComponent } from "../header/HeaderComponent";
import { MapComponent } from "../map/MapComponent";
import { SystemSpace, SystemFlex, SystemMargin } from "../system";
import { LoactionSearch } from "../map/LocationSearch";
import { AnalysisTools } from "./analysis-tools/AnalysisTools";
import { observable, action } from "../../node_modules/mobx";
import { observer } from "mobx-react";
import styled from "styled-components";
import { Marker, Polygon } from "react-google-maps";
import { DataPresentation } from "../data-pressentation/DataPresentation";

// const MapWithSearch = () => {
//   return (
//     <div>
//       <LoactionSearch />
//       <MapComponent />
//     </div>
//   );
// };

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

  poly = [{ lat: 0.0, lng: 5 }, { lat: 5, lng: 5 }, { lat: 0.0, lng: 0 }];

  render() {
    return (
      <div>
        <HeaderComponent title="Coffee yeild generator" />
        <SystemFlex row noFlex>
          <AnalysisTools handleDataType={this.handleDataType} />
          <div>
            <MapComponent
              mapAttributes={() => (
                <Polygon draggable={true} path={this.poly} />
              )}
              dataType={this.dataType}
              handleDataMovement={this.handleDataMovement}
            />
          </div>
          {/* <DataPresentation dataCoords={this.dataCoords} /> */}
        </SystemFlex>
      </div>
    );
  }
}
