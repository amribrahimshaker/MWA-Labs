import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <!--<input type="number" (input)="setCounterValue($event)" value="{{counterValue}}"/>-->
      <button (click)="decrementCounter()">-</button>
      <span>{{counterValue}}</span>
      <button (click)="incrementCounter()">+</button>
    </div>
  `,
  styles: [`
    div {
      border: 1px solid green;
      margin: 5px;
      padding: 5px;
    }
  `]
})
export class Counter implements OnInit {

  @Input('ComponentCounterValue') 
  counterValue: number=0;

  @Output()
  OnCounterChange: EventEmitter<number>;

  constructor() { 
    this.OnCounterChange = new EventEmitter();
  }

  incrementCounter(): boolean {
    this.counterValue = this.counterValue + 1;
    this.emitCounterValue();
    return false;
  }

  decrementCounter(): boolean {
    this.counterValue = this.counterValue - 1;
    this.emitCounterValue();
    return false;
  }
  emitCounterValue() {
    this.OnCounterChange.emit(this.counterValue);
  }

  ngOnInit() {
    this.emitCounterValue();
  }

}
