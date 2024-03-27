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

    if (
      direction === 1 &&
      currentSection === 'services' &&
      !this.endOfServicesReached
    ) {
      this.isScrolling = false;
      return; // Don't scroll down if end of services not reached
    }

    if (nextSectionIndex >= 0 && nextSectionIndex < this.sections.length) {
      const nextSection = this.sections[nextSectionIndex];
      const currentSectionElement = document.getElementById(currentSection);
      const targetDiv = currentSectionElement?.querySelector('.hidden-div');

      if (targetDiv && direction === 1) {
        targetDiv.classList.add('fade-out');
      }

      const nextSectionElement = document.getElementById(nextSection);
      if (nextSectionElement) {
        nextSectionElement.scrollIntoView({ behavior: 'smooth' });
        this.currentSectionIndex = nextSectionIndex;
      }
    }

    setTimeout(() => {
      this.isScrolling = false;
      const currentSection = this.sections[this.currentSectionIndex];
      const currentSectionElement = document.getElementById(currentSection);
      const targetDiv = currentSectionElement?.querySelector('.hidden-div');

      if (targetDiv && direction === -1) {
        targetDiv.classList.remove('fade-out');
      }
    }, 500); // Adjust delay as needed
  }

  onEndOfServices() {
    // Handle scroll to the next section
    this.endOfServicesReached = true;
    console.log(
      'end of services reached from public component, value is ' +
        this.endOfServicesReached
    );
    return;
  }

  onStartOfServices() {
    // Reset endOfServicesReached flag
    this.endOfServicesReached = false;

    // Handle scroll to the previous section
    this.currentSectionIndex -= 1;
    this.currentSectionIndex = Math.max(
      0,
      Math.min(this.currentSectionIndex, this.sections.length - 1)
    );
    const previousSection = document.getElementById(
      this.sections[this.currentSectionIndex]
    );
    if (previousSection) {
      previousSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit() {}
}
