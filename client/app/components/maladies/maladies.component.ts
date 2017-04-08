import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';


@Component({
  moduleId: module.id,
  selector: 'maladies',
  templateUrl: 'maladies.component.html'
})

export class MaladiesComponent implements OnInit { 
    @Input()
    maladie: any = [];
    id: string ="1";

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.taskService.getMaladie(this.id).subscribe(maladie => {
            this.maladie = maladie;
        });
        this.detail(this.id);
    }
    
    detail(id){
        this.taskService.getMaladie(id).subscribe(maladie => {
            this.maladie = maladie;
            console.log(this.maladie);
        });
    }
    
}
