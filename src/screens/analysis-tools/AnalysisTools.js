import React, { Component } from "react";
import styled from "styled-components";
import { SystemFlex, SystemText, SystemSpace } from "../../system";
import { SystemMargin } from "../../system/SystemMargin";
import { observer } from "../../../node_modules/mobx-react";
import { observable, action } from "../../../node_modules/mobx";
import { LoactionSearch } from "../../map/LocationSearch";

import Button from "@material-ui/core/Button";
import LineWeightIcon from "@material-ui/icons/LineWeight";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const SystemButton = styled(Button)`
  margin: 0;
  padding: 0;
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButtonIcon = ({ Icon, onClick }) => {
  return (
    <SystemFlex justify="center" align="center">
      <SystemButton onClick={onClick}>
        <Icon
          style={{
            color: "white",
            width: "35px",
            height: "35px",
            padding: 0,
            margin: 0
          }}
        />
      </SystemButton>
      <div
        style={{ width: "55px", height: "1px", backgroundColor: "#85BDBF" }}
      />
      <SystemSpace size="BIG" />
    </SystemFlex>
  );
};

@observer
export class AnalysisTools extends Component {
  @observable
  hide = false;

  @action
  handleDrawer = () => {
    this.hide = !this.hide;
  };

  render() {
    const { handleOnSearch } = this.props;
    return (
      <ToolBar>
        <StyledButtonIcon Icon={LineWeightIcon} />
        <StyledButtonIcon onClick={handleOnSearch} Icon={SearchIcon} />
        <StyledButtonIcon Icon={SettingsIcon} />
        <StyledButtonIcon Icon={BookmarkBorderIcon} />
      </ToolBar>
    );
  }
}

const ToolBar = styled.div`
  width: 65px;
  height: 825px;
  ${({ theme }) => theme && `background-color: ${theme.colors.dark}`};
`;
