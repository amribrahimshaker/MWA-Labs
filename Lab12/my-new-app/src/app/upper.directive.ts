import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[toUpper]'
})
export class UpperDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2) { 

    renderer2.setStyle(element.nativeElement,'text-transform','uppercase');
  }

}
