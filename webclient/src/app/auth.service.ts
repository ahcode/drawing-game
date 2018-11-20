import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username){
    return this.http.post('/api/login', { user: username });
  }
  logout(){
    return this.http.get('/api/logout');
  }
  isauthenticated(){
    return this.http.get('/api/isauthenticated');
  }
}
