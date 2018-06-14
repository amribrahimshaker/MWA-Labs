import { Component } from '@angular/core';
import { Router } from "@angular/router";

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs";
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  myForm: FormGroup;

  private formData: object = {
    name: '',
    email: '',
    post: ''
  };

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,private router: Router) {
    

    
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['', [Validators.required, this.exampleValidator]],
        'email': ['',
          Validators.required]
        ,
        'post': ['', [Validators.required,Validators.minLength(3)]]
      }),
     
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );

    // userService.getData();
  }

  getData() {
    this.userService.getData().subscribe(res =>  {
        console.log("data...: " + res['name']);
        console.log("data...: " + res['email']);

        this.formData['name'] = res['name'];
        this.formData['email'] = res['email'];
        
        this.userService.getPosts().subscribe(res =>  {
          console.log("getPosts...: " + res[0].body);
          this.formData['post'] = res[0].body;
        });
    });
    // (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('Amr', Validators.required, this.asyncExampleValidator));
  }

  onSubmit() {
    // console.log(this.myForm);
    // console.log(this.myForm.controls['userData'].controls['username']);
    console.log(this.formData);
    this.router.navigate(['/thankyou']);


  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {example: true};
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({'invalid': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

}
