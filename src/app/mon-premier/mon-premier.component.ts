import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {

  premierName = 'LeFast';
  premierStatus = 'rapide';

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.premierStatus;
  }

}
