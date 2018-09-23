import styled from "styled-components";

export const Cell = styled.div`
  width: 198px;
  height: 28px;
  border: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.lightdark};
  &:hover {
    border-color: ${({ theme }) => theme.colors.light};
  }
`;
