import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

public taskForm:FormGroup;
public title = 'Task';
public taskSelected :Task;
public textSimple :string;
public modo = 'add';
public tasks : Task[];

constructor(private fb:FormBuilder, 
            private api:TaskService) { 
  this.createform();
}

ngOnInit() {
  this.getAll();
}

getAll(){  
  this.api.getAll()
  .subscribe((data:Task[]) =>{
    this.tasks = data;
    console.log(this.tasks);
  },
  (erro:any)=>{
    console.error(erro);
  })
}

createform()
{
  this.taskForm = this.fb.group({
    id:[''],
    taskName:['', Validators.required]
  });
}

save(task:Task){
   (task.id == '') ? this.modo='add' : this.modo = 'update';
   this.api[this.modo](task)
   .subscribe(
     (data:Task)=>{
       console.log(data);
       this.getAll();
     },
     (erro:any)=>{console.error(erro)}
   );
}

taskSubmit()
{ 
 this.save(this.taskForm.value);
  console.log(this.taskForm.value);
  this.back();
}

taskSelect(task:Task)
{  
  this.taskSelected = task;
this.taskForm.patchValue(task)
}

newTask()
{
  this.taskSelected = new Task();
  this.taskForm.patchValue(this.taskSelected);
}

back()
{
  this.taskSelected = null;
}

 
}
