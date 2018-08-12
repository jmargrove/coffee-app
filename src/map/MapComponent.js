import React from "react";
import styled from "styled-components";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map";
require("dotenv").config();

export const MapContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightdark};
  height: 500px;
  width: 500px;
`;

export const MapComponent = () => {
  return (
    <MapContainer>
      <ReactGoogleMapLoader
        params={{
          key: process.env.GOOGLE_API,
          libraries: "places"
        }}
        render={googleMaps =>
          googleMaps && (
            <ReactGoogleMap
              googleMaps={googleMaps}
              center={{ lat: 43.604363, lng: 1.443363 }}
              zoom={8}
            />
          )
        }
      />
    </MapContainer>
  );
};
