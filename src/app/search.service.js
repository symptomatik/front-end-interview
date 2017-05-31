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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.accessToken = 'uithbskdfhgiweru89uf0u9a22e0-7ghjjp';
        this.baseUrl = 'https://avspv9f312.execute-api.us-west-2.amazonaws.com/dev/search';
    }
    SearchService.prototype.createUrl = function (url) {
        return this.baseUrl
            + '?access_token='
            + this.accessToken
            + '&url='
            + url;
    };
    SearchService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SearchService.prototype.handleError = function (error) {
        console.log(error.json());
        return Observable_1.Observable.throw('hi');
    };
    SearchService.prototype.fetchResult = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SearchService.prototype.search = function (url) {
        var craftedUrl = this.createUrl(url);
        return this.fetchResult(craftedUrl);
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map