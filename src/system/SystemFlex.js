import styled from "styled-components";

export const SystemFlex = styled.div`
  ${({ noFlex }) => noFlex && `display: flex`};
  ${({ flex }) => flex && `flex: ${flex}`};
  ${({ row }) => row && `flex-direction: row`};
  ${({ col }) => col && `flex-direction: col`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ color }) => color && `background-color: ${color}`};
`;
