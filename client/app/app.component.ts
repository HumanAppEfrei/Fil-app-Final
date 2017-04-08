import { Component } from '@angular/core';
import {Auth} from './services/auth.service';
import {TaskService} from './services/task.service';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
  	directives:[TaskService]
})
export class AppComponent {
    constructor(private auth:Auth){
        
    }
}
