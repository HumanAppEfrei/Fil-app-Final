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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var CentreService = (function () {
    function CentreService(http) {
        this.http = http;
        this.mongoURL = "https://api.mlab.com/api/1/databases/my_filapp_database/collections/";
        this.apiKey = "QASWwDr0wEXEyyBUSniEc8mtRvqdRUuL";
    }
    CentreService.prototype.getCentres = function () {
        return this.http.get(this.mongoURL + "Centres" + "?apiKey=" + this.apiKey)
            .map(function (res) { return res.json(); });
    };
    return CentreService;
}());
CentreService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CentreService);
exports.CentreService = CentreService;
//# sourceMappingURL=centre.service.js.map