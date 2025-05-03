import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import { User } from '../models/User';
import { Statu } from '../models/Statu';
import { TastToUserDetail } from '../models/TastToUserDetail';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TaskService } from '../task/task.service';
import { TasktoUserService } from './tasktouser.service';
import { TaskToUser } from '../models/TaskToUser';

@Component({
  selector: 'app-tasktouser',
  templateUrl: './tasktouser.component.html',
  styleUrls: ['./tasktouser.component.css']
})
export class TasktouserComponent implements OnInit {

  public tasktouserForm:FormGroup;
  public tasktouserdetailForm:FormGroup;

  public title = "Task to User"
  public tasks : Task[];
  public users :  User[];
  public status:  Statu[];  
  public tasktouserdetails : TastToUserDetail[];
  public tasktouserSelected :TaskToUser;
  public tasktouserdetailSelected:TastToUserDetail;

  public modo = "add";
  public _tasktouser = new TaskToUser;
  
constructor(private fb:FormBuilder,
          private api:TasktoUserService) 
          { 
  this.createform();
}

ngOnInit() {
  this.consulDetail();
  
}

createform(){
  this.tasktouserForm = this.fb.group({
    id:[''],
    Task:['', Validators.required],
    User:['', Validators.required],
    Statu:['', Validators.required]
});
this.tasktouserdetailForm = this.fb.group({
  id:[''],
  userName:['', Validators.required],
  taskName:['', Validators.required],
  name:['', Validators.required]
});
}

getAllTask(){  
  this.api.getAllTask()
  .subscribe((data:Task[]) =>{
    this.tasks = data;
    console.log(this.tasks);
  },
  (erro:any)=>{
    console.error(erro);
  })
}

getAlluser(){  
  this.api.getAllUser()
  .subscribe((data:User[]) =>{
    this.users = data;
    console.log(this.users);
  },
  (erro:any)=>{
    console.error(erro);
  })
}

getAllstatu(){  
  this.api.getAllStatu()
  .subscribe((data:Statu[]) =>{
    this.status = data;
    console.log(this.status);
  },
  (erro:any)=>{
    console.error(erro);
  })
}





save(tasktouser:TaskToUser){
  (tasktouser.id == '') ? this.modo='add' : this.modo = 'update';
  this.api[this.modo](tasktouser)
  .subscribe(
    (data:Task)=>{
      console.log(data);
      this.consulDetail();
    },
    (erro:any)=>{console.error(erro)}
  );
}

tasktouserSubmit()
{ 
  this._tasktouser.idTask = this.tasktouserForm.value.Task.id;
  this._tasktouser.idUser = this.tasktouserForm.value.User.id;
  this._tasktouser.idStatu = '';
  this._tasktouser.id = '';

debugger;
  this.save(this._tasktouser);
  console.log(this.tasktouserForm.value);
  this.back();
}
  back()
  {   
    this.tasktouserSelected = null;   
  }

  newtasktouserDetail()
  {
    this.getAllTask();
    this.getAlluser(); 
    this.getAllstatu();
    this.tasktouserSelected = new TaskToUser();
  /*  this.userForm.patchValue(this.userSelected);*/
  }

consulDetail()
{
  this.api.consultaDetail()
  .subscribe(
    (data:TastToUserDetail[])=>{
      this.tasktouserdetails = data;
      console.log(this.tasktouserdetails);
    },
    (erro : any)=>{console.error(erro)}
  )
}

tasktouserdetailSelect(tasktouserdetail:TastToUserDetail)
  {
    
    this.tasktouserdetailSelected = tasktouserdetail;
    //this.tasktouserForm.patchValue(tasktouserdetail)
  }

delete(id:string)
{
  this.api.delete(id)
  .subscribe(
    (model:any)=>{
      console.log(model);
      this.consulDetail();
    },
    (erro:any)=>{console.error(erro)}
  )
  
}


}
