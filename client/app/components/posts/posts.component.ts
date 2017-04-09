import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';
import {Router} from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html'
})
export class PostsComponent implements OnInit {
	 // instantiate posts to an empty array
	@Input()
	validation: string;
	posts: any = [];
	id: string ="1";

	constructor(private taskService: TaskService, private router: Router) { }

	ngOnInit() {
		// Retrieve posts from the API
		this.taskService.getUser(this.id).subscribe(posts => {
			this.posts = posts;
		});
		this.detail(this.id);
	}
	
	detail(id){
		this.taskService.getUser(id).subscribe(posts => {
			this.posts = posts[0];
		});
	}
	
	save(task){
		var _task = {
            _id:task._id,
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
        
		
		
        this.taskService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
	this.validation="Enregistrement effectuer";
	}
}
