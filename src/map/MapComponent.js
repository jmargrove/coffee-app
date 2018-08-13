import React from "react";
import styled from "styled-components";
import GoogleMapLoader from "react-google-maps-loader";
import GoogleMap from "react-google-map";
import { LoactionSearch } from "./LocationSearch";
require("dotenv").config();

export const MapContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightdark};
  height: 500px;
  width: 500px;
`;

const Map = googleMaps => {
  return (
    googleMaps && (
      <GoogleMap
        googleMaps={googleMaps}
        // coordinates={[
        //   {
        //     title: "Toulouse",
        //     zoom: 8,
        //     position: {
        //       lat: 43.604363,
        //       lng: 1.443363
        //     },
        //     onLoaded: (google, map, marker) => {
        //       console.log("google", google);
        //       console.log("map", map);
        //       console.log("map", marker);
        //     }
        //   }
        // ]}
        center={{ lat: 43.604363, lng: 1.443363 }}
        zoom={8}
        onLoaded={(googleMaps, map) => {
          console.log("google2", googleMaps);
          console.log("map 2", map);
          const input = document.getElementById("googlep-search-input");
          const searchBox = new googleMaps.places.SearchBox(input);
          map.addListener("bounds_changed", function() {
            searchBox.setBounds(map.getBounds());
          });
          map.setMapTypeId(googleMaps.MapTypeId.SATELLITE);
        }}
      />
    )
  );
};

export const MapComponent = () => {
  return (
    <MapContainer>
      <GoogleMapLoader
        params={{
          key: "AIzaSyCEuDD9MNc8PVC94FavBG4hCgSXjbGRODU",
          libraries: "places,geometry"
        }}
        render={Map}
      />
    </MapContainer>
  );
};
