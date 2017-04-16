import { Component, OnInit, Input, ViewEncapsulation, 
  OnChanges, SimpleChanges, DoCheck, AfterContentInit,
   AfterContentChecked, AfterViewChecked, AfterViewInit, 
   OnDestroy, ElementRef, ViewChild, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Nataive
})
export class ServerElementComponent implements OnInit, OnChanges, 
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name : string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('Constructor Called');
  }

  // Called once the component is initialized
  ngOnInit() {
    console.log('ngOnInit Called');
    console.log('Heading Element (Text)', (<HTMLDivElement>(this.header.nativeElement)).textContent);
    console.log('Paragraph Element (Text)', (<HTMLParagraphElement>(this.paragraph.nativeElement)).textContent);
  }

  // Called after a bound input property changes
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called", changes);
  }

  // Called during every change detection run
  ngDoCheck(){
    console.log('ngDoCheck Called');
  }

  // Called after content (ng-content) has been projected into view
  ngAfterContentInit(){
    console.log('ngAfterContentInit Called');
    console.log('Paragraph Element (Text)', (<HTMLParagraphElement>(this.paragraph.nativeElement)).textContent);
  }

  // Called every time the projected content has been checked
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

  // Called after the components view (and child views) has been initialized
  ngAfterViewInit(){
    console.log('ngAfterViewInit Called');
    console.log('Heading Element (Text)', (<HTMLDivElement>(this.header.nativeElement)).textContent);
  }

  // Called every time the view (and child views) have been checked
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Called')
  }

  // Called once the component is about to be destroyed (Removed from the DOM)
  ngOnDestroy(){
    console.log("ngOnDestroy Called");
  }
}
