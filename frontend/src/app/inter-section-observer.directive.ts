import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;
  direction: number = 0;

  constructor(private el: ElementRef) {}
  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    this.direction = event.deltaY > 0 ? 1 : -1;
    // console.log(this.direction);
  }
  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
