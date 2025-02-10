import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone : false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }

  ingresar(){
    this.router.navigateByUrl('/home' , { replaceUrl: true });
  }

}
