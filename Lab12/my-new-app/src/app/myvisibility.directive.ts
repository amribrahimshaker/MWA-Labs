import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective implements OnInit {

  @Input()
  private myvisibility: boolean;
  
  constructor(private e:ElementRef) { 
    
  }

  ngOnInit(): void {
    if(!this.myvisibility)
    this.e.nativeElement.style.display = 'none';
  }

}
