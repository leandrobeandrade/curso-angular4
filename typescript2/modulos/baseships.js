"use strict";
exports.__esModule = true;
var Spacecrafts = /** @class */ (function () {
    function Spacecrafts(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecrafts.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with: " + this.propulsor);
    };
    return Spacecrafts;
}());
exports.Spacecrafts = Spacecrafts;
