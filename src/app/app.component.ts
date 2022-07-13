import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DNDS';
  darkMode={
  	background : "black",
  	text : "#fff",
  	gradBckgrnd1 : "rgb(34,1,51)",
  	gradBckgrnd2 :"linear-gradient(150deg, rgba(34,1,51,1) 0%, rgba(38,0,55,1) 55%, rgba(19,0,65,1) 82%, rgba(0,57,34,1) 100%)"
  }
}