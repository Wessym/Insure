import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm: FormGroup;
  errorMsg: string;
  imagePreview: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(8)]],
      adresse: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmPwd: [""],
      role: ["", [Validators.required]],
      cin: ["", [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
      tel: ["", [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
      regles: ["", Validators.requiredTrue],
      img: [""],
    }, {
      validators: MustMatch("pwd", "confirmPwd"),
    })

  }








  signup() {

    this.userService.signup(this.userForm.value, this.userForm.value.img).subscribe(
      (response) => {
        console.log("here response after signup", response);
        if (response.message == "user saved with success") {
          this.router.navigate(['/login']);

        } else {
          this.errorMsg = "Email Already Exist";
        }
      }
    )

  }



  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log("here file", file);

    this.userForm.patchValue({ img: file });
    this.userForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}


