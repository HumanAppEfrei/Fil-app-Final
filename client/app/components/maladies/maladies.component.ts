import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';
import {Friend} from '../../../Task';
import {User} from '../../../Task';
import {Auth} from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'maladies',
  templateUrl: 'maladies.component.html'
})

export class MaladiesComponent { 
    tasks: Task[];
    users: User[];
    friends: Friend[];
    title: string;
    idUser: number = 2;
    researched: User;

    areMyInvitaionsSelected: boolean = false;
    areMyFriendsSelected: boolean = false;

    showHideInvitation() {
        this.areMyInvitaionsSelected = !this.areMyInvitaionsSelected;
        console.log("hey");
    }

    
    showHideFriend() {
        this.areMyFriendsSelected = !this.areMyFriendsSelected;
        console.log("hey");
    }


    getResearched(pseudo){
        this.taskService.getResearched(pseudo)
            .subscribe(researched => {
                this.researched = researched;
                console.log(this.researched);
            });
    }

    getUsers(){
        this.taskService.getUsers()
            .subscribe(users => {
                this.users = users;
                console.log(this.users);
            });
    }

    getFriends(){
        this.taskService.getFriends(this.idUser)
            .subscribe(friends => {
                this.friends = friends;
                console.log(this.friends);
            });
    }

    deleteFriend(id){
        var tasks = this.tasks;
        
        this.taskService.deleteFriend(id).subscribe(data => {
            if(data.n == 1){
					var i = 0;
                for(i = 0;i < tasks.length;i++){
                    if(tasks[i]._id == id){
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    }

    constructor(private taskService:TaskService){
        this.taskService.getInvitations(this.idUser)
            .subscribe(tasks => {
                this.tasks = tasks;
            });

    }

    addInvitation(event){
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        }
        
        this.taskService.addInvitation(newTask)
            .subscribe(task => {
                this.tasks.push(task);
                this.title = '';
            });
    }
    
    deleteInvitation(id){
        var tasks = this.tasks;
        
        this.taskService.deleteInvitation(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < tasks.length;i++){
                    if(tasks[i]._id == id){
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateInvitationStatus(task){
        var _task = {
            _id:task._id,
            title: task.title,
            isDone: !task.isDone
        };
        
        this.taskService.updateInvitationStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
    }



    
}
