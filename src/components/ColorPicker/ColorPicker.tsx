import { Sketch } from "@uiw/react-color";
import React from "react";
// import { Chrome } from "@uiw/react-color";

interface IColorPickerProps {
  onChangeColor: (value: string) => void;
  defaultValue: string;
  color: string;
}

export const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  return (
    <Sketch
      style={{ marginLeft: 20 }}
      color={props.defaultValue}
      onChange={(color) => {
        props.onChangeColor(color.hexa);
      }}
    />
  );
};
