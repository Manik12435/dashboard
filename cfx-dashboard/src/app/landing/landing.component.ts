import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  authorized: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  callAPI1(){
    this.authorized = true
  }

  callAPI2(){
    this.authorized = false
  }

  logout(){
    this.router.navigate(['/' + environment.routerPath.login])
  }

}
