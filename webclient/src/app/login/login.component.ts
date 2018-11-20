import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  login(){
    if (this.username){
      this.auth.login(this.username).then((redirect) => {
        if(redirect)
          this.router.navigate(['menu']);
      });
    }
  }

}
