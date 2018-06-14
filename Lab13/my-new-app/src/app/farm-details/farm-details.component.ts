import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-farm-details',
  template: `
    <p>
      farm-details works!
      
    </p>

    <p>
      Route Parameter!  ID: {{id}}
      
    </p>

    <p>id: {{farm.id}}</p>
      <p>Farm ID: {{farm.Farm}}</p>
      <p>produce: {{farm.produce}}</p>
  `,
  styles: []
})
export class FarmDetailsComponent implements OnInit {

  private subscription: Subscription;
  id: string;
  private farm: object;

  constructor(private activatedRoute: ActivatedRoute, db: DbService) {
    // params will return an Observable
    // we need it so we track changes in parameters as this code will be run once at constructor
    this.subscription = activatedRoute.params.subscribe(
        (param: any) => {
          this.id = param['id'];
          this.farm = db.getDataFromId(param['id']);
        }
    );
  
    
  }

  ngOnInit() {
  }

}
