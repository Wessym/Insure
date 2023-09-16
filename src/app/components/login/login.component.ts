import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { DemandeService } from 'src/app/Services/demande.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form ID
  userForm: FormGroup;

  //  error msg
  errorMsg: string;


  path: string;



  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]],
    })

  }



  login() {

    this.userService.login(this.userForm.value).subscribe((response) => {
      console.log('response after login', response);
      if (response.message != "2") {
        this.errorMsg = "Please check Email / Mot de Passe"
      } else {
        console.log("here user id bro", response.user._id);
        localStorage.setItem('connectedUser', JSON.stringify(response.user));
        if (response.user.role == "Assureur") {
          this.navigateWithRefresh("assureur-profile");
        } else {
          this.navigateWithRefresh("assure-profile");
        }
      }
    });

  };






  navigateWithRefresh(path) {
    const urlTree = this.router.createUrlTree([path]);
    const url = this.router.serializeUrl(urlTree);
    window.location.href = url;
  }



}
