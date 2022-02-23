import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StudyProject';
  // userLogged = true;

  userLogged: any = localStorage.getItem("userLogged");


  // handleLogin(value: boolean) {
  //   console.log(" value ", value);
  //   this.userLogged = value;
  // }
}


