import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { observer } from "mobx-react";
import { observable } from "../../node_modules/mobx";
import { SystemMargin } from "../system/SystemMargin";
import { action } from "mobx";

@withScriptjs
@withGoogleMap
@observer
class MapWithAMarker extends Component {
  @observable
  onStartCoords = { lat: 0, lng: 0 };

  @action
  handleCoords = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.onStartCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  };

  componentDidMount() {
    this.handleCoords();
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        center={this.onStartCoords}
        onClick={this.props.handleDataMovement}
      >
        {this.props.mapAttributes()}
      </GoogleMap>
    );
  }
}

export const MapComponent = ({ handleDataMovement, mapAttributes }) => {
  return (
    <SystemMargin size="SMALL">
      <MapWithAMarker
        mapAttributes={mapAttributes}
        handleDataMovement={handleDataMovement}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_GOOGLE_API
        }&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={
          <div style={{ height: `100%`, backgrounColor: "yellow" }} />
        }
        containerElement={
          <div
            style={{
              height: `500px`,
              width: "500px",
              backgroundColor: "blue",
              cursor: "pointer"
            }}
          />
        }
        mapElement={
          <div
            style={{
              height: `100%`,
              cursor: "pointer",
              backgroundColor: "orange"
            }}
          />
        }
      />
    </SystemMargin>
  );
};
