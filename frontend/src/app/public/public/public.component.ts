import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent {
  sections: string[] = ['home', 'services', 'portfolio', 'about', 'contact'];
  isScrolling = false;
  currentSectionIndex = 0;
  endOfServicesReached = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:wheel', ['$event'])
  async onWindowScroll(event: WheelEvent) {
    if (this.isScrolling) {
      return;
    }

    this.isScrolling = true;

    const direction = event.deltaY > 0 ? 1 : -1;
    const currentSection = this.sections[this.currentSectionIndex];
    const nextSectionIndex = this.currentSectionIndex + direction;

    if (nextSectionIndex < 0 || nextSectionIndex > 4) {
      this.isScrolling = false;
      return;
    }

    if (nextSectionIndex >= 0 && nextSectionIndex < this.sections.length) {
      const nextSection = this.sections[nextSectionIndex];
      const currentSectionElement = document.getElementById(currentSection);
      const targetDiv = currentSectionElement?.querySelector('.hidden-div');
      const nextSectionElement = document.getElementById(nextSection);

      if (targetDiv && nextSection) {
        targetDiv.classList.add('fade-out');
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (nextSectionElement) {
          nextSectionElement.scrollIntoView({ behavior: 'smooth' });
          this.currentSectionIndex = nextSectionIndex;
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        targetDiv.classList.remove('fade-out');
      } else if (targetDiv && nextSection && direction === -1) {
        targetDiv.classList.add('fade-out');
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (nextSectionElement) {
          nextSectionElement.scrollIntoView({ behavior: 'smooth' });
          this.currentSectionIndex = nextSectionIndex;
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        targetDiv.classList.remove('fade-out');
      }
      this.isScrolling = false;
    }
  }

  ngOnInit() {}
}
