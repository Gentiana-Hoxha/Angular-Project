import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';

//me ndihmen e dokumentimi >> https://angular.io/guide/http

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  errorMessage!:String;
  users!:any;
  isLogged:any = localStorage.getItem("userLogged");

 

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get<any>('https://reqres.in/api/users').subscribe({
        next: data => {
            this.users = data.data;
        },
        error: error => { 
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
  }
}
