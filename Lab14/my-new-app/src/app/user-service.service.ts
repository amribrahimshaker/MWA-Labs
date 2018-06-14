import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

// import { HttpModule } from '@angular/http';
// import { map } from 'rxjs/operators';

// import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class UserServiceService {

  data:Object;

  constructor(public http: HttpClient) { }

  // constructor() { }

  getData(){
    console.log("calling getData...");
    // this.http.get('http://jsonplaceholder.typicode.com/users/1')
    //           .subscribe(res => {this.data = res; console.log(this.data)});

    return this.http.get('http://jsonplaceholder.typicode.com/users/1');          
  }

  getPosts(){
    console.log("calling getPosts...");
    // this.http.get('http://jsonplaceholder.typicode.com/users/1')
    //           .subscribe(res => {this.data = res; console.log(this.data)});

    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');          
  }
}
