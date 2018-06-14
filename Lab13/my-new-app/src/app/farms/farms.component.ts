import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-farms',
  template: `
    <p>
      farms goes here!
    </p>
    <ul>
      <li *ngFor="let farm of farms">
        <a [routerLink]="['','farmDetails', farm['id']]">{{farm.Farm}}</a>
      </li>

      <router-outlet></router-outlet>

    </ul>
  `,
  styles: []
})
export class FarmsComponent implements OnInit {

  private farms: object[];

  constructor(private db: DbService) { 
    this.farms = db.getData();
  }

  ngOnInit() {
  }

}
