import React from "react";
import { Input } from "@material-ui/core/Input";
import styled from "styled-components";
const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs } = require("react-google-maps");
const {
  StandaloneSearchBox
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");

export const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_API
    }&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div style={{ height: `400px`, backgroundColor: "blue" }} />
    )
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          this.setState({
            places
          });
        }
      });
    }
  }),
  withScriptjs
)(props => {
  console.log(props);
  return (
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <SystemInput
        ref={el => (this.input = el)}
        type="text"
        autoFocus={true}
        placeholder="Search location"
      />
    </StandaloneSearchBox>
  );
});

const SystemInput = styled.input`
    content: none !important;
    width: 100%;
    height: 35px
    font-size: 20px;
    border-bottom: solid;
    border-bottom-width: thin;
    border-bottom-color: ${({ theme }) => theme.colors.dark}

`;
