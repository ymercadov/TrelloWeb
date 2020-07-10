import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration/configuration.service';
import { Statu } from '../models/Statu';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public status : Statu[];

  constructor(private api:ConfigurationService) { }

  ngOnInit() {
  
    this.getAll();
  }

  getAll(){  
    this.api.getAll()
    .subscribe((data:Statu[]) =>{
      this.status = data;
      console.log(this.status);
    },
    (erro:any)=>{
      console.error(erro);
    })
  }

}
