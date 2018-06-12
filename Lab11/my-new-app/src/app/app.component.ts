import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ComponentCounterValue: number = 5;

  constructor() {
  }

  counterValueChanged(value: number): void {
    this.ComponentCounterValue = value;
  }

  counterValueChangedInput(evt): void {
    console.log("evt.target.value: " + evt.target.value);
    this.ComponentCounterValue = evt.target.value;
  }

}
