import { Directive, EventEmitter, Output, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective implements OnInit {

  
  private colors: string[];

  private colorIndex = 0;

  @Output()
  private ColorChange: EventEmitter<string>;

  @HostBinding('style.color')
  activeColor = 'Black';

  @HostListener('click', ['$event'])
  changeColor(event: Event){

    console.log(event.target.innerHTML);
    this.activeColor = this.colors[(this.colorIndex + 1) % this.colors.length];
    
    this.ColorChange.emit(this.activeColor);
    this.colorIndex++;
  }

  constructor() {
    this.colors = ['Red', 'Green','Blue', 'Black'];
    this.ColorChange = new EventEmitter();
   }

   ngOnInit(): void {
    this.ColorChange.emit(this.activeColor);
  }

}
