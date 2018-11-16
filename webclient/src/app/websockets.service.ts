import { Injectable } from '@angular/core';
//import { HttpClient } from "@angular/common/http";
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {
  private socket;
  constructor() {
    this.socket = io();
  }
}
