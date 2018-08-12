import React from "react";
import { HeaderComponent } from "../header/HeaderComponent";
import { MapComponent } from "../map/MapComponent";
import { SystemSpace, SystemFlex } from "../system";

export const AnalysisScreen = () => {
  return (
    <div>
      <HeaderComponent title="coffee yeild generator" />
      <SystemFlex row>
        <SystemSpace size={"SMALL"} />
        <SystemFlex noFlex>
          <SystemSpace size={"SMALL"} />
          <MapComponent />
        </SystemFlex>
      </SystemFlex>
    </div>
  );
};
