import React from "react";
import { SystemFlex } from "./SystemFlex";
import { SystemSpace } from "./SystemSpace";

export const SystemMargin = ({
  topOff,
  botOff,
  leftOff,
  rightOff,
  children,
  size,
  color
}) => {
  return (
    <SystemFlex>
      {!topOff && <SystemSpace size={size} color={color} />}
      <SystemFlex row noFlex>
        {!leftOff && <SystemSpace size={size} color={color} />}
        {children}
        {!rightOff && <SystemSpace size={size} color={color} />}
      </SystemFlex>
      {!botOff && <SystemSpace size={size} color={color} />}
    </SystemFlex>
  );
};
