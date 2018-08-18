import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //after importing, if use api service, you need to use it as parameter
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  //create register function and call the server
  registerUser(user) {
    this.apiService.registerUser(user);
  }

}
