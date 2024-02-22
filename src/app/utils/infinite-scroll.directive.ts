import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements OnInit {
  @Input() triggerDistance: number = 50;
  @Output() nearBottom: EventEmitter<void> = new EventEmitter<void>();

  private window!: Window;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.window = window;
  }

  @HostListener('window:scroll', ['$event.target'])
  windowScrollEvent(event: Event) {
    const pageHeight = this.window.document.documentElement.scrollHeight;
    const elementHeight = this.el.nativeElement.scrollHeight;
    const currentScrollPosition = this.window.scrollY;
    const innerHeight = this.window.innerHeight;

    const spaceOfElementAndPage = pageHeight - elementHeight;
    const distanceToBottom = elementHeight - innerHeight - currentScrollPosition + spaceOfElementAndPage;

    if (distanceToBottom < this.triggerDistance) {
      this.nearBottom.emit();
    }
  }
}
