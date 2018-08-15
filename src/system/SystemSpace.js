import React from "react";
import styled from "styled-components";

export const SystemSpace = styled.div`
  ${({ theme, size }) => `padding: ${theme.size[size]}`};
`;
