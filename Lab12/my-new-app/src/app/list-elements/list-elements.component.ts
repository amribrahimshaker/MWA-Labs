import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-elements',
  template: `
    <ul>
      <li *ngFor="let item of items"  toUpper [myvisibility]="true" mycolor (ColorChange)="updateSelectedColor($event)">
          {{item}}
      </li>
    </ul>
    <p>Selected Color: {{color}}<p>
  `,
  styles: []
})
export class ListElementsComponent implements OnInit {

  @Input()
  items: Array<String> = ['A','B','5'];

  private color: string;

  constructor() { }

  ngOnInit() {
  }

  updateSelectedColor(color : string){
      this.color = color;
  }

}
