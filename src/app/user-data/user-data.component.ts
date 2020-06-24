import { Component, OnInit } from '@angular/core';
import { UserData } from './user-data';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  // Create Object for one way data bindling
  user: UserData = {
    id: 1234567,
    name: 'srinath',
    email: 'ssrinath.sri@gmail.com',
    mobile: 123456789,

  };
  constructor() { }

  ngOnInit() {
  }

}
