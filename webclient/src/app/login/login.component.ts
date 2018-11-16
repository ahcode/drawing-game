import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;

  constructor( private rq: RequestsService, private router: Router ) { }

  ngOnInit() {
  }

  login(){
    this.rq.login(this.username).subscribe(() => this.router.navigate(['menu']));
  }

}
