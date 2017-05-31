"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ResultComponent = (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.result.medium = this.determineMedium();
        this.result.type = this.determineType();
    };
    ResultComponent.prototype.determineMedium = function () {
        if (this.result.channel && this.result.channel.length > 0) {
            return this.result.channel[0]._type || 'error';
        }
        return 'error';
    };
    ResultComponent.prototype.determineType = function () {
        if (this.result.hasOwnProperty('post')) {
            return 'post';
        }
        else {
            return 'channel';
        }
    };
    return ResultComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ResultComponent.prototype, "result", void 0);
ResultComponent = __decorate([
    core_1.Component({
        selector: 'result',
        templateUrl: './templates/result.component.html',
        styleUrls: ['./styles/result.css']
    })
], ResultComponent);
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map