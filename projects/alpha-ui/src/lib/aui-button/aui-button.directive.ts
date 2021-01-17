import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[AuiButtonPrimary]'
})
export class AuiButtonDirective {
  @HostBinding('class.card-outline-primary') private isActive: boolean;
  constructor(
    private el: ElementRef,
    private rendrer: Renderer2
  ) {
    this.rendrer.setStyle(this.el.nativeElement, 'background-color', '#007bff');
    this.rendrer.setStyle(this.el.nativeElement, 'background-position', 'center');
    this.rendrer.setStyle(this.el.nativeElement, 'transition', 'background 0.5s');
    this.rendrer.setStyle(this.el.nativeElement, 'border', 'none');
    this.rendrer.setStyle(this.el.nativeElement, 'border-radius', '5px');
    this.rendrer.setStyle(this.el.nativeElement, 'padding', '0.65rem 1.2rem');
    this.rendrer.setStyle(this.el.nativeElement, 'font-size', '16px');
    this.rendrer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.rendrer.setStyle(this.el.nativeElement, 'outline', 'none');
    this.rendrer.setStyle(this.el.nativeElement, 'color', 'white');

  }
  @HostListener('mouseover')
  onMouseOver(event: Event) {
    this.rendrer.setStyle(this.el.nativeElement, 'background-color', '#409cff');
    this.rendrer.setStyle(this.el.nativeElement, 'background-position', 'center');
    this.rendrer.setStyle(this.el.nativeElement, 'transition', 'background 0.5s');
    this.rendrer.setStyle(this.el.nativeElement, 'border', 'none');
    this.rendrer.setStyle(this.el.nativeElement, 'border-radius', '5px');
    this.rendrer.setStyle(this.el.nativeElement, 'padding', '0.65rem 1.2rem');
    this.rendrer.setStyle(this.el.nativeElement, 'font-size', '16px');
    this.rendrer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.rendrer.setStyle(this.el.nativeElement, 'outline', 'none');
    this.rendrer.setStyle(this.el.nativeElement, 'color', 'white');
  }
  @HostListener('mouseout')
  onMouseOut(event: Event) {
    this.rendrer.setStyle(this.el.nativeElement, 'background-color', '#007bff');
    this.rendrer.setStyle(this.el.nativeElement, 'background-position', 'center');
    this.rendrer.setStyle(this.el.nativeElement, 'transition', 'background 0.5s');
    this.rendrer.setStyle(this.el.nativeElement, 'border', 'none');
    this.rendrer.setStyle(this.el.nativeElement, 'border-radius', '5px');
    this.rendrer.setStyle(this.el.nativeElement, 'padding', '0.65rem 1.2rem');
    this.rendrer.setStyle(this.el.nativeElement, 'font-size', '16px');
    this.rendrer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.rendrer.setStyle(this.el.nativeElement, 'outline', 'none');
    this.rendrer.setStyle(this.el.nativeElement, 'color', 'white');
  }

}
