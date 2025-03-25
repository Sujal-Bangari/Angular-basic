import { Directive, ElementRef,  Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnInit {
  @Input() appTextColor="'blue'";
  constructor(private el:ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.color=this.appTextColor;
  }
}
