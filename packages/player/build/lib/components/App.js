"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var application_1 = require("../constants/application");
var Layout_1 = require("./Layout");
var react_redux_1 = require("react-redux");
require("../../../../node_modules/bootstrap/dist/css/bootstrap.css");
require("bootstrap");
var mapStateToProps = function (store) { return ({ application: store.application }); };
exports.App = function (props) {
    switch (props.application.mode) {
        case application_1.PLAY: {
            return React.createElement(Layout_1.default, null);
        }
        default: {
            return null;
        }
    }
};
exports.default = react_redux_1.connect(mapStateToProps)(exports.App);
//# sourceMappingURL=App.js.map