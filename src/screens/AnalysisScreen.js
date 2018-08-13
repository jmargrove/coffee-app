import React from "react";
import { HeaderComponent } from "../header/HeaderComponent";
import { MapComponent } from "../map/MapComponent";
import { SystemSpace, SystemFlex } from "../system";
import { LoactionSearch } from "../map/LocationSearch";

export const AnalysisScreen = () => {
  return (
    <div>
      <HeaderComponent title="Coffee yeild generator" />
      <SystemFlex row>
        <LoactionSearch />
        <SystemSpace size={"SMALL"} />
        <SystemFlex noFlex>
          <SystemSpace size={"SMALL"} />
          <MapComponent />
        </SystemFlex>
      </SystemFlex>
    </div>
  );
};
