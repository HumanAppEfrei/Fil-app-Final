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
var core_1 = require('@angular/core');
var droits_service_1 = require('../../services/droits.service');
var Droits = (function () {
    function Droits() {
    }
    return Droits;
}());
exports.Droits = Droits;
var DroitsComponent = (function () {
    //Constructeur qui cree une variable de HTTPDroitService
    function DroitsComponent(_droitsservice) {
        this._droitsservice = _droitsservice;
        this.title = 'Infos Pratiques';
        this.droits = [{ id: 1, droit: "Droits 1" }, { id: 2, droit: "Droits 2" }, { id: 3, droit: "Droits 3" }];
        this.show = false;
        this.show2 = false;
    }
    ;
    /*
    ngOnInit(){

        //Le service HTTPDroit Service qui recupere les donnees du fichier test.php et ecrit dans la div avec l'id Madiv
        this._droitsservice.getText().subscribe(res =>this.setData(res));
        
    }
    */
    DroitsComponent.prototype.setData = function (response) {
        this.data = response;
        document.getElementById('Madiv').innerHTML = this.data;
    };
    //Cache ou fait apparaitre le menu 
    DroitsComponent.prototype.clickonme = function () {
        this.show = !this.show;
    };
    DroitsComponent.prototype.clickondroit = function (droitt) {
        var _this = this;
        this.droite = droitt;
        this.identi = droitt.id;
        this.show2 = !this.show2;
        if (this.identi == 1) {
            this._droitsservice.getText().subscribe(function (res) { return _this.setData(res); });
        }
        if (this.identi == 2) {
            this._droitsservice.getText().subscribe(function (res) { return _this.setData(res); });
        }
        if (this.identi == 3) {
            this._droitsservice.getText().subscribe(function (res) { return _this.setData(res); });
        }
    };
    DroitsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'droits',
            templateUrl: 'droits.component.html',
            providers: [droits_service_1.HTTPDroitsService]
        }), 
        __metadata('design:paramtypes', [droits_service_1.HTTPDroitsService])
    ], DroitsComponent);
    return DroitsComponent;
}());
exports.DroitsComponent = DroitsComponent;
//# sourceMappingURL=droits.component.js.map