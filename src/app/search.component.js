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
var search_service_1 = require("./search.service");
var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.loading = false;
    }
    SearchComponent.prototype.submitSearch = function () {
        var _this = this;
        this.loading = true;
        this.searchService.search(this.searchUrl)
            .subscribe(function (data) { _this.fetchResult = data; _this.loading = false; }, function (error) { return _this.errorMessage = error; });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './templates/search.component.html',
        styleUrls: ['./styles/search.css']
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map