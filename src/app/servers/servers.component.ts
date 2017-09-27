import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
      
    }, 5000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
