import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  public afterLoginClick(){
    this.router.navigate(['./home']);
  }
  public createAccount(){
    this.router.navigate(['./createAccount']);
  }
  public forgetPassword(){
    this.router.navigate(['./forgetPassword']);
  }

  ngOnInit() {
  }

}
