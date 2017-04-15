import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor: string = 'orange';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');  
  }

  @HostListener('mouseenter')  mouseOver(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');  
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');  
    this.backgroundColor = this.defaultColor;
  }
}
