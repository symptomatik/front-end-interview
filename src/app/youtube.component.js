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
var YoutubeComponent = (function () {
    function YoutubeComponent() {
    }
    YoutubeComponent.prototype.ngOnInit = function () {
        this.channel = this.result.channel[0]._source;
        if (this.result.type === 'post') {
            this.post = this.result.post[0]._source;
        }
    };
    return YoutubeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], YoutubeComponent.prototype, "result", void 0);
YoutubeComponent = __decorate([
    core_1.Component({
        selector: 'youtube',
        templateUrl: './templates/youtube.component.html',
        styleUrls: ['./styles/result.css', './styles/youtube.css']
    })
], YoutubeComponent);
exports.YoutubeComponent = YoutubeComponent;
//# sourceMappingURL=youtube.component.js.map