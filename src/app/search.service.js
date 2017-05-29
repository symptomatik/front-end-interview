"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SearchService = (function () {
    function SearchService() {
        this.accessToken = 'uithbskdfhgiweru89uf0u9a22e0-7ghjjp';
        this.baseUrl = 'https://avspv9f312.execute-api.us-west-2.amazonaws.com/dev/search';
    }
    SearchService.prototype.search = function (url) {
        var craftedUrl = this.createUrl(url);
        console.log(craftedUrl);
    };
    SearchService.prototype.createUrl = function (url) {
        return this.baseUrl
            + '?access_token='
            + this.accessToken
            + '&url='
            + url;
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable()
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map