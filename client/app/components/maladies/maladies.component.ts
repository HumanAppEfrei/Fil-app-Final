import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'maladies',
  templateUrl: 'maladies.component.html'
})

export class MaladiesComponent { 
	idUser:number = 1;
	maladie:Maladie[];
    constructor(private taskService: TaskService) { 
    	console.log("test");
    	this.taskService.getMaladie(this.idUser).subscribe(maladie => {
			this.maladie = maladie;
		});
					console.log(this.maladie);

	}
    getMaladie(){
		this.taskService.getMaladie(this.idUser).subscribe(maladie => {
			this.maladie = maladie;
		});
	}

}
