import { Component } from '@angular/core';
import {Auth} from './services/auth.service';
import {TaskService} from './services/task.service';
import {CentreService} from './services/centre.service';
import {MarkerService} from './services/marker.service';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
  	directives:[TaskService, CentreService, MarkerService]
})
export class AppComponent {
    constructor(private auth:Auth){
        
    }
}
