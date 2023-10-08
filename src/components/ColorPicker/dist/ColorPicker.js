"use strict";
exports.__esModule = true;
exports.ColorPicker = void 0;
var react_color_1 = require("@uiw/react-color");
var react_1 = require("react");
exports.ColorPicker = function (props) {
    return (react_1["default"].createElement(react_color_1.Sketch, { color: props.defaultValue, onChange: function (color) {
            props.onChangeColor(color.hexa);
        } }));
};
