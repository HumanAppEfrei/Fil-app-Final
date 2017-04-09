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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var angular2_jwt_1 = require('angular2-jwt');
var core_1 = require('@angular/core');
var home_component_1 = require('./components/home/home.component');
var profile_component_1 = require('./components/profile/profile.component');
var prevention_component_1 = require('./components/prevention/prevention.component');
var diagnostique_component_1 = require('./components/diagnostique/diagnostique.component');
var traitement_component_1 = require('./components/traitement/traitement.component');
var remission_component_1 = require('./components/remission/remission.component');
var maladies_component_1 = require('./components/maladies/maladies.component');
var tasks_component_1 = require('./components/tasks/tasks.component');
var depistage_component_1 = require('./components/depistage/depistage.component');
var invitations_component_1 = require('./components/invitations/invitations.component');
var posts_component_1 = require('./components/posts/posts.component');
var auth_service_1 = require('./services/auth.service');
var auth_guard_1 = require('./auth.guard');
var task_service_1 = require('./services/task.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, profile_component_1.ProfileComponent, remission_component_1.RemissionComponent, diagnostique_component_1.DiagnostiqueComponent,
                traitement_component_1.TraitementComponent, prevention_component_1.PreventionComponent, invitations_component_1.InvitationsComponent, posts_component_1.PostsComponent, maladies_component_1.MaladiesComponent, tasks_component_1.TasksComponent, depistage_component_1.DepistageComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                app_routing_1.appRoutingProviders,
                angular2_jwt_1.AUTH_PROVIDERS,
                auth_service_1.Auth,
                auth_guard_1.AuthGuard,
                task_service_1.TaskService
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map