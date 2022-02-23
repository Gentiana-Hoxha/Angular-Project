import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  isLogged:any = localStorage.getItem("userLogged");

  // @Input() isUserLoggedIn: any;
  // @Output() changeUserLogged = new EventEmitter<any>();
  
  // handleLogIn(): void {
  //   this.changeUserLogged.emit(this.isUserLoggedIn);
  // }

  // logoutUser() {
  //   this.changeUserLogged.emit(false);
  //   this.handleLogIn();
  // } 
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("userLogged");
    window.location.reload();

    
  }

}
