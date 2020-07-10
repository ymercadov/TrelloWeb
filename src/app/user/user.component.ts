import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from './user.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userForm:FormGroup;
  public title = "User";
  public userSelected :User;
  public modo = 'add';
  public users : User[];

constructor(private fb:FormBuilder,
        private api:UserService) { 
  this.createform();
}

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.api.getAll()
    .subscribe((data:User[]) =>{
    this.users = data;
    console.log(this.users);
  },
    (erro:any)=>{
      console.error(erro);
  })
  }

  createform()
  {
    this.userForm = this.fb.group({
      id:[''],
      userName:['', Validators.required]
    });
  }

  save(user:User)
  {
    (user.id == '') ? this.modo='add' : this.modo = 'update';
    this.api[this.modo](user)
    .subscribe(
      (data:User)=>{
        console.log(data);
        this.getAll();
      },
      (erro:any)=>{console.error(erro)}
    );
  }

  userSubmit(){
    debugger;
    this.save(this.userForm.value);
    console.log(this.userForm.value);
    this.back();
  }

  userSelect(user:User)
  {
    this.userSelected = user;
    this.userForm.patchValue(user)
  }
  newUser()
  {
    this.userSelected = new User();
    this.userForm.patchValue(this.userSelected);
  }

  back()
  {
    this.userSelected = null;
  }



 



}
