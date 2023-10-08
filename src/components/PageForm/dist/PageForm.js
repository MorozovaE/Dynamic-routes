"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.PageForm = void 0;
var react_hook_form_1 = require("react-hook-form");
var store_1 = require("../../store/store");
var pagesSlice_1 = require("../../store/features/pagesSlice");
var ColorPicker_1 = require("../ColorPicker/ColorPicker");
var react_1 = require("react");
var error_message_1 = require("@hookform/error-message");
var pageForm_module_scss_1 = require("./pageForm.module.scss");
exports.PageForm = function () {
    var _a = react_1.useState("#fff"), color = _a[0], setColor = _a[1];
    var dispatch = store_1.useAppDispatch();
    var _b = react_hook_form_1.useForm(), register = _b.register, handleSubmit = _b.handleSubmit, reset = _b.reset, errors = _b.formState.errors;
    var onSubmit = function (data) {
        data.backgroundColor = color;
        dispatch(pagesSlice_1.addPage(data));
        reset();
    };
    return (React.createElement("form", { className: pageForm_module_scss_1["default"].pageForm, onSubmit: handleSubmit(onSubmit) },
        React.createElement("div", { className: pageForm_module_scss_1["default"].fieldsContainer },
            React.createElement("div", null,
                React.createElement("span", null, "Path:"),
                React.createElement("input", __assign({}, register("path", {
                    pattern: /\/?[A-Za-z0-9_.\-~]+(\/?[A-Za-z0-9_.\-~]+)*\/?/,
                    minLength: {
                        value: 2,
                        message: "Not enought characters, min 2"
                    },
                    max: 120,
                    required: "Path is required"
                }))),
                React.createElement(error_message_1.ErrorMessage, { errors: errors, name: "path", render: function (_a) {
                        var message = _a.message;
                        return React.createElement("span", null, message);
                    } })),
            React.createElement("div", null,
                React.createElement("span", null, "Meta Title:"),
                React.createElement("input", __assign({}, register("metaTitle", {
                    minLength: {
                        value: 2,
                        message: "Not enought characters, min 2"
                    },
                    max: 60,
                    required: "Meta Title is required"
                }))),
                React.createElement(error_message_1.ErrorMessage, { errors: errors, name: "metaTitle", render: function (_a) {
                        var message = _a.message;
                        return React.createElement("span", null, message);
                    } })),
            React.createElement("div", null,
                React.createElement("span", null, "Meta Description"),
                React.createElement("input", __assign({}, register("metaDescription", {
                    max: 155,
                    required: "Meta Description is required"
                }))),
                React.createElement(error_message_1.ErrorMessage, { errors: errors, name: "metaDescription", render: function (_a) {
                        var message = _a.message;
                        return React.createElement("span", null, message);
                    } })),
            React.createElement("div", null,
                React.createElement("span", null, "h1:"),
                React.createElement("input", __assign({}, register("h1", { required: "h1 is required" }))),
                React.createElement(error_message_1.ErrorMessage, { errors: errors, name: "h1", render: function (_a) {
                        var message = _a.message;
                        return React.createElement("span", null, message);
                    } })),
            React.createElement("div", null,
                React.createElement("span", null, "Text:"),
                React.createElement("input", __assign({}, register("text", { required: "Text is required" }))),
                React.createElement(error_message_1.ErrorMessage, { errors: errors, name: "text", render: function (_a) {
                        var message = _a.message;
                        return React.createElement("span", null, message);
                    } })),
            React.createElement("input", { type: "submit", value: "Create" })),
        React.createElement("div", { className: pageForm_module_scss_1["default"].backgroundContainer },
            React.createElement("span", null, "Background Color:"),
            React.createElement(ColorPicker_1.ColorPicker, { color: color, onChangeColor: setColor, defaultValue: color }))));
};
