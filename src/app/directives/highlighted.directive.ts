import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'hl',
})
export class HighlightedDirective {
  @Input() appHighlighted = false;
  @Output()
  toggleHighlight = new EventEmitter();
  constructor() {}

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.appHighlighted;
  }
  @HostListener('mouseover', ['$event'])
  mouseOver() {
    this.appHighlighted = true;
    this.toggleHighlight.emit(this.appHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.appHighlighted = false;
    this.toggleHighlight.emit(this.appHighlighted);
  }
  @HostListener('click')
  click() {
    this.appHighlighted = false;
    this.toggleHighlight.emit(this.appHighlighted);
  }

  toggle(value: boolean) {
    this.appHighlighted = !value;
  }
}
