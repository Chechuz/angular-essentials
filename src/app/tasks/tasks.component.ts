import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import {type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required :true}) userId!: string;
  @Input({required :true}) name!: string;   //otra alternativa
  isAddingTask= false;

 tasks = [
  {
    id:'t1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the bsico and advanced featuras of Angular & how to apply them',
    dueDate: '2025-12-31'
  },
  {
    id:'t2',
    userId: 'u2',
    title: 'Master Angular',
    summary: 'Learn all the bsico and advanced featuras of Angular & how to apply them',
    dueDate: '2025-12-31'
  },
  {
    id:'t3',
    userId: 'u3',
    title: 'Master Angular',
    summary: 'Learn all the bsico and advanced featuras of Angular & how to apply them',
    dueDate: '2025-12-31'
  },
 ];

 get selectedUserTasks(){
  return this.tasks.filter((task)=>task.userId === this.userId);
 }

 onCompleteTask(id:string){
  this.tasks= this.tasks.filter((task)=> task.id !== id);
 }

 onStartAddTask(){
  this.isAddingTask=true;
 }

 onCancelAddTask(){
  this.isAddingTask= false;
 }

 onAddTask(taskData: NewTaskData){
    this.tasks.unshift({          //"unshift" es como un "push" pero lo añande al ppio del array
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false;
 }
  
}
