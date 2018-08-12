import React from "react";
import styled from "styled-components";

export const SystemFlex = styled.div`
  display: flex;
  ${({ noFlex }) => noFlex && `flex: 1`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};
`;
