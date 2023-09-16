import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assurance';
  
  ngOnInit() {
    // let connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    // console.log("this is the connected user", connectedUser);

  }

}

