import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.scss']
})
export class HelloUserComponent implements OnInit {
  userName: any = localStorage.getItem("userLogged");

  constructor() { }
  greetings = [
    'Hello',
    'Hi',
    'Welcome',
    'Howdy',
    'Good Day',
    'Greetings'
  ]
  colorRandom!:String;
  letters = '0123456789ABCDEF';

  getRandomGreeting(){
    let randomGreeting = this.greetings[Math.floor(Math.random() * this.greetings.length)]
    return randomGreeting;
  }

  getRandomColor() {
    this.colorRandom = '#0';
    for (var i = 0; i < 5; i++) {
        this.colorRandom += this.letters[Math.floor(Math.random() * 16)];
    }
    this.colorRandom +="34";
  }

  ngOnInit(): void {
    this.getRandomColor();
  }
  
}
