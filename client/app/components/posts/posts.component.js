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
var task_service_1 = require('../../services/task.service');
var router_1 = require('@angular/router');
var PostsComponent = (function () {
    function PostsComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.posts = [];
        this.id = "1";
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.taskService.getUser(this.id).subscribe(function (posts) {
            _this.posts = posts;
        });
        this.detail(this.id);
    };
    PostsComponent.prototype.detail = function (id) {
        var _this = this;
        this.taskService.getUser(id).subscribe(function (posts) {
            _this.posts = posts[0];
        });
    };
    PostsComponent.prototype.save = function (task) {
        var _task = {
            _id: task._id,
            pseudo: task.pseudo,
            adresse: task.adresse,
            mobile: task.mobile,
            email: task.email,
            type_pathologie: task.type_pathologie,
            naissance: task.naissance,
            hopital: task.hopital,
            medecin: task.medecin,
            nom_contact_urgence: task.nom_contact_urgence,
            maladie_id: task.maladie_id,
            hospitalisation: task.hospitalisation,
            isDone: !task.isDone
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.isDone = !task.isDone;
        });
        this.validation = "Enregistrement effectuer";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PostsComponent.prototype, "validation", void 0);
    PostsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-posts',
            templateUrl: 'posts.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService, router_1.Router])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map