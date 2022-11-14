import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  constructor(private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.validateLogin();
    this.router.navigate(['/' + environment.routerPath.landing])
  }

  onSubmit(){
    
  }

  validateLogin() {
    console.log(this.loginForm.controls['username'].value?.trim(), this.loginForm.controls['password'].value?.trim())
  }

}