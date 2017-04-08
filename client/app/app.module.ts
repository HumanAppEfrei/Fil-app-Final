import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent }  from './app.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';

import {PreventionComponent} from './components/prevention/prevention.component';
import {DiagnostiqueComponent} from './components/diagnostique/diagnostique.component';
import {TraitementComponent} from './components/traitement/traitement.component';
import {RemissionComponent} from './components/remission/remission.component';
import {MaladiesComponent} from './components/maladies/maladies.component';
import {TasksComponent} from './components/tasks/tasks.component';

import {InvitationsComponent} from './components/invitations/invitations.component';
import {PostsComponent} from './components/posts/posts.component';


import {Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';
import {TaskService} from './services/task.service';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent, RemissionComponent, DiagnostiqueComponent,
  					TraitementComponent, PreventionComponent, InvitationsComponent, PostsComponent, MaladiesComponent,TasksComponent],
  bootstrap: [ AppComponent ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard,
	TaskService
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class AppModule { }
