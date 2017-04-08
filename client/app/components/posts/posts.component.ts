import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html'
})
export class PostsComponent implements OnInit {
	 // instantiate posts to an empty array
	@Input()
	posts: any = [];
	id: string ="1";

	constructor(private taskService: TaskService) { }

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
            pseudo: task.title,
            adresse: task.adresse;
            mobile: task.mobile;
			email: task.email,
			utilisateur: task.utilisateur,
			naissance: task.naissance,
            isDone: !task.isDone
        };
        
		
		
        this.taskService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
		location.reload();
	}

}
