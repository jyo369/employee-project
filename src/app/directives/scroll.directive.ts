import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  scrolling: boolean;
  constructor() {}
  @HostBinding('class.highlighted')
  get cssClasses() {
    return true;
  }
  @HostListener('scroll', ['$event'])
  scrollHandler() {
    console.debug('Scroll Event');
  }
  @HostListener('window:scroll', ['$event'])
  dotheJob(event: Event) {
    console.debug('Scroll Event', window);
  }
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    console.log('working scroll');
  }
  // @HostListener('window:scroll', ['$event']) onScrollEvent($event: Event) {
  //   // console.log($event['Window']);
  @HostListener('document:scroll', ['$event']) onScrollEvent($event: Event) {
    console.log('scrollex');
    if (
      (!this.scrolling && document.body.scrollTop > 0) ||
      document.documentElement.scrollTop > 0
    ) {
      this.scrolling = true;
    } else {
      this.scrolling = false;
    }
  }
}
