"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var baseships_1 = require("./baseships");
var MillenniumFalcons = /** @class */ (function (_super) {
    __extends(MillenniumFalcons, _super);
    function MillenniumFalcons() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 3;
        return _this;
    }
    MillenniumFalcons.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenniumFalcons;
}(baseships_1.Spacecrafts));
exports.MillenniumFalcons = MillenniumFalcons;
