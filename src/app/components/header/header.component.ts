import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connectedUser: any;
  name: string;
  role: any;

  constructor() { }

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    this.name = this.connectedUser.name;
    this.role = this.connectedUser.role;

  }






  logout() {
    localStorage.clear();
  }

}
