import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
    this.renderer.setStyle(this.el.nativeElement, 'width', 'fit-content');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }

}
