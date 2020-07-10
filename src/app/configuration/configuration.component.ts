import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private api:ConfigurationService) { }

  ngOnInit() {
    debugger;
    this.api.getAll();
  }

}
