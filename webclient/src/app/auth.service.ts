import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username){
    return this.http.post('/api/login', { user: username }).toPromise().then(
      () => {
        localStorage.setItem('username', username);
        return true;
      }
    ).catch(
      (err) => {
        if (err.error.error == "E01.02"){ //Username is in use
          //TODO Throw Error Message
          return false;
        }else if (err.error.error == "E01.04"){ //Incorrect username format
          //TODO Throw Error Message
          return false;
        }else{
          throw err;
        }
      }
    );
  }
  logout(){
    return this.http.get('/api/logout');
  }
  isauthenticated(){
    return this.http.get('/api/isauthenticated');
  }
}
