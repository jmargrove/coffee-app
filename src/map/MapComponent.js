import React, { Component } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { action, observable } from "mobx";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { LoactionSearch } from "./LocationSearch";
import { SystemFlex, SystemSpace } from "../system";

const MapContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightdark};
  height: 500px;
  width: 500px;
`;

@GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_API })
@observer
export class MapComponent extends Component {
  @observable
  location = { lat: 0, lng: 0 };
  @observable
  viewport = null;
  @observable
  searchBox = null;

  @action
  searchBoxHandler = () => {
    // const input = document.getElementById("google-search-input");
    // const searchBox = new this.props.google.maps.places.SearchBox(input);
    this.searchBox &&
      this.searchBox.addListener("places_changed", () => {
        var places = this.searchBox.getPlaces();
        (this.location = places[0].geometry.location),
          (this.viewport = places[0].geometry.viewport);
      });
  };

  componentDidMount() {
    const input = document.getElementById("google-search-input");
    this.searchBox = new this.props.google.maps.places.SearchBox(input);
    navigator.geolocation.getCurrentPosition(position => {
      this.location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  }

  render() {
    this.searchBoxHandler();
    const bounds = new this.props.google.maps.LatLngBounds();
    if (!this.viewport) {
      bounds.extend(this.location);
    } else {
      bounds.union(this.viewport);
    }

    return (
      <Map
        style={{ width: "500px", height: "500px" }}
        google={this.props.google}
        zoom={8}
        bounds={bounds}
      >
        {/* <Marker position={this.location} /> */}
      </Map>
    );
  }
}
