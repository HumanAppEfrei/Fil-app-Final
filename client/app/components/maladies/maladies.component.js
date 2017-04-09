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
var task_service_1 = require("../../services/task.service");
var MaladiesComponent = (function () {
    function MaladiesComponent(taskService) {
        this.taskService = taskService;
        this.maladie = [];
        this.id = "1";
    }
    MaladiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getMaladie(this.id).subscribe(function (maladie) {
            _this.maladie = maladie;
        });
        this.detail(this.id);
    };
    MaladiesComponent.prototype.detail = function (id) {
        var _this = this;
        this.taskService.getMaladie(id).subscribe(function (maladie) {
            _this.maladie = maladie;
            console.log(_this.maladie);
        });
    };
    return MaladiesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MaladiesComponent.prototype, "maladie", void 0);
MaladiesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'maladies',
        templateUrl: 'maladies.component.html'
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], MaladiesComponent);
exports.MaladiesComponent = MaladiesComponent;
//# sourceMappingURL=maladies.component.js.map