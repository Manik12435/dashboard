import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;

  loginForm = this.formbuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  validated: boolean = false;
  success: boolean = false;
  errorMessage: string = "";

  constructor(private formbuilder: FormBuilder, private router: Router, private service: AppService) { }

  ngOnInit(): void {
  }

  login(){
    this.validateLogin();
    if(this.validated){
      this.success = true;
      let loginReq = {
        "body" : {
          "username": this.loginForm.controls['username'].value?.trim(),
          "password": this.loginForm.controls['password'].value?.trim()
        }
      }
      // this.service.login(loginReq).subscribe((loginRes: any) => {
        // console.log(loginRes);
        this.router.navigate(['/' + environment.routerPath.landing]);
      // })
      
    } else {
      this.success = false;
      this.errorMessage = 'Please enter the required fields!';
    }
  }

  onSubmit(){
    
  }

  validateLogin() {
    console.log(this.loginForm.controls['username'].value?.trim(), this.loginForm.controls['password'].value?.trim());
    if(this.loginForm.controls['username'].value?.trim() != "" || this.loginForm.controls['username'].value?.trim() != null ||
    this.loginForm.controls['username'].value?.trim() != undefined || this.loginForm.controls['password'].value?.trim() != "" ||
    this.loginForm.controls['password'].value?.trim() != null || this.loginForm.controls['password'].value?.trim() != undefined) {
      this.validated = true;
    }
    else {
      this.validated = false;
    }
  }

}