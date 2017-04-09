import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {PreventionComponent} from './components/prevention/prevention.component';
import {DiagnostiqueComponent} from './components/diagnostique/diagnostique.component';
import {TraitementComponent} from './components/traitement/traitement.component';
import {RemissionComponent} from './components/remission/remission.component';
import {InvitationsComponent} from './components/invitations/invitations.component';
import {MaladiesComponent} from './components/maladies/maladies.component';
import {PostsComponent} from './components/posts/posts.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {DepistageComponent} from './components/depistage/depistage.component';
import {DroitsComponent} from './components/droits/droits.component'


import {AuthGuard} from './auth.guard';

const appRoutes: Routes= [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'profile',
        component:ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
    	path:'prevention',
        component:PreventionComponent
    },
    {
    	path:'diagnostique',
        component:DiagnostiqueComponent
    },
    {
    	path:'traitement',
        component:TraitementComponent
    },
    {
    	path:'remission',
        component:RemissionComponent
    },
	{
    	path:'invitation',
        component:InvitationsComponent
    },
    {
        path:'maladie',
        component:MaladiesComponent
    },
    {
        path:'post',
        component:PostsComponent
    },
     {
        path:'task',
        component:TasksComponent
    },
    {
        path:'depistage',
        component:DepistageComponent
    }/*,
    {
        path:'droit',
        component:DroitsComponent
    }*/



];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
