import styled from "styled-components";

export const SystemSpace = styled.div`
  ${({ theme, size }) => `padding: ${theme.size[size]}`};
  ${({ color }) => `background-color: ${color}`};
`;
