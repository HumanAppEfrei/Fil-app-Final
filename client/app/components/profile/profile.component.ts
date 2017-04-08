import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent { 
    profile:any;
    token:any;
    constructor(private auth:Auth){
        this.profile = JSON.parse(localStorage.getItem('profile'));
       // this.token = JSON.parse(localStorage.getItem('id_token'));
        console.log(this.profile);
    }
}
