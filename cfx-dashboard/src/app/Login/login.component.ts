import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;

  loginForm = this.formbuilder.group({
    username: [null],
    password: [null]
  })

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  login(){

  }

  onSubmit(){
    
  }

}
