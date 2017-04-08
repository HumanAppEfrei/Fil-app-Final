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
var MaladiesComponent = (function () {
    function MaladiesComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.idUser = 2;
        this.areMyInvitaionsSelected = false;
        this.areMyFriendsSelected = false;
        this.taskService.getInvitations(this.idUser)
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    MaladiesComponent.prototype.showHideInvitation = function () {
        this.areMyInvitaionsSelected = !this.areMyInvitaionsSelected;
        console.log("hey");
    };
    MaladiesComponent.prototype.showHideFriend = function () {
        this.areMyFriendsSelected = !this.areMyFriendsSelected;
        console.log("hey");
    };
    MaladiesComponent.prototype.getResearched = function (pseudo) {
        var _this = this;
        this.taskService.getResearched(pseudo)
            .subscribe(function (researched) {
            _this.researched = researched;
            console.log(_this.researched);
        });
    };
    MaladiesComponent.prototype.getUsers = function () {
        var _this = this;
        this.taskService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
        });
    };
    MaladiesComponent.prototype.getFriends = function () {
        var _this = this;
        this.taskService.getFriends(this.idUser)
            .subscribe(function (friends) {
            _this.friends = friends;
            console.log(_this.friends);
        });
    };
    MaladiesComponent.prototype.deleteFriend = function (id) {
        var tasks = this.tasks;
        this.taskService.deleteFriend(id).subscribe(function (data) {
            if (data.n == 1) {
                var i = 0;
                for (i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    MaladiesComponent.prototype.addInvitation = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };
        this.taskService.addInvitation(newTask)
            .subscribe(function (task) {
            _this.tasks.push(task);
            _this.title = '';
        });
    };
    MaladiesComponent.prototype.deleteInvitation = function (id) {
        var tasks = this.tasks;
        this.taskService.deleteInvitation(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    MaladiesComponent.prototype.updateInvitationStatus = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateInvitationStatus(_task).subscribe(function (data) {
            task.isDone = !task.isDone;
        });
    };
    MaladiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'maladies',
            templateUrl: 'maladies.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], MaladiesComponent);
    return MaladiesComponent;
}());
exports.MaladiesComponent = MaladiesComponent;
//# sourceMappingURL=maladies.component.js.map