import { Component, OnInit } from '@angular/core';
import { WebsocketsService } from '../websockets.service';

@Component({
  selector: 'app-websocket-test',
  templateUrl: './websocket-test.component.html',
  styleUrls: ['./websocket-test.component.css']
})
export class WebsocketTestComponent implements OnInit {

  constructor(private WS: WebsocketsService) { }

  ngOnInit() {
  }

}
