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
var marker_service_1 = require('../../services/marker.service');
var centre_service_1 = require('../../services/centre.service');
var PreventionComponent = (function () {
    function PreventionComponent(_markerService, centreService) {
        var _this = this;
        this._markerService = _markerService;
        this.centreService = centreService;
        // Zoom level
        this.zoom = 12;
        this.markers = this._markerService.getMarkers();
        navigator.geolocation.watchPosition(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
        });
    }
    PreventionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.centreService.getCentres().subscribe(function (data) { return _this.centres = data; }, function (errorMessage) { return alert(" Error is : " + errorMessage); }, function () { return console.log("finished"); });
    };
    PreventionComponent.prototype.clickedMarker = function (marker, index) {
        console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
    };
    PreventionComponent.prototype.mapClicked = function ($event) {
        console.log('Map Clicked');
        var newMarker = {
            name: 'Untitled',
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        };
        this.markers.push(newMarker);
    };
    PreventionComponent.prototype.markerDragEnd = function (marker, $event) {
        console.log('dragEnd', marker, $event);
        var updMarker = {
            name: marker.name,
            lat: parseFloat(marker.lat),
            lng: parseFloat(marker.lng),
            draggable: false
        };
        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
        this._markerService.updateMarker(updMarker, newLat, newLng);
    };
    PreventionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'prevention',
            templateUrl: 'prevention.component.html',
            providers: [marker_service_1.MarkerService, centre_service_1.CentreService]
        }), 
        __metadata('design:paramtypes', [marker_service_1.MarkerService, centre_service_1.CentreService])
    ], PreventionComponent);
    return PreventionComponent;
}());
exports.PreventionComponent = PreventionComponent;
//# sourceMappingURL=prevention.component.js.map