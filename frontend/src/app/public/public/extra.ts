// import { Component, HostListener, ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-public',
//   templateUrl: './public.component.html',
//   styleUrls: ['./public.component.css'],
// })
// export class PublicComponent {
//   sections: string[] = ['home', 'services', 'portfolio', 'about', 'contact'];
//   isScrolling!: boolean;
//   currentSectionIndex = 0;
//   endOfServicesReached = false;

//   constructor(private elementRef: ElementRef) {}

//   // on each scroll
//   @HostListener('window:wheel', ['$event'])
//   async onWindowScroll(event: WheelEvent) {
//     // If already scrolling, ignore this scroll event
//     if (this.isScrolling) {
//       return;
//     }

//     // Set scrolling flag
//     this.isScrolling = true;

//     // Determine the direction of the scroll
//     const direction = event.deltaY > 0 ? 1 : -1;

//     if (
//       this.sections[this.currentSectionIndex] === 'services' &&
//       this.endOfServicesReached === false
//     ) {
//       console.log(
//         `can't scroll into next view because endOfServicesReached is ` +
//           this.endOfServicesReached
//       );
//       return;
//     }
//     // Get the current section and the target div within the current section
//     const currentSection = document.getElementById(
//       this.sections[this.currentSectionIndex]
//     );

//     console.log(currentSection);
//     const targetDiv = currentSection?.querySelector('.hidden-div');

//     // If scrolling down, add the 'fade-out' class to the target div
//     if (direction === 1 && targetDiv) {
//       targetDiv.classList.add('fade-out');
//     }

//     // Update the current section index based on the scroll direction
//     this.currentSectionIndex += direction;

//     // Clamp the currentSectionIndex to the bounds of the sections array
//     this.currentSectionIndex = Math.max(
//       0,
//       Math.min(this.currentSectionIndex, this.sections.length - 1)
//     );

//     // Wait for the fade-out effect to finish
//     await new Promise((resolve) => setTimeout(resolve, 400)); // Adjust the delay as needed

//     // Get the next section and the target div within the next section
//     const nextSection = document.getElementById(
//       this.sections[this.currentSectionIndex]
//     );
//     const nextTargetDiv = nextSection?.querySelector('.hidden-div');

//     // If scrolling up, add the 'fade-out' class to the next target div, wait, then remove it
//     if (direction === -1 && nextTargetDiv) {
//       targetDiv?.classList.add('fade-out');
//       nextTargetDiv.classList.add('fade-out');
//       await new Promise((resolve) => setTimeout(resolve, 200));
//       nextSection?.scrollIntoView({ behavior: 'smooth' });
//       await new Promise((resolve) => setTimeout(resolve, 200));
//       targetDiv?.classList.remove('fade-out');
//       nextTargetDiv.classList.remove('fade-out');
//     }

//     // Scroll to the next section
//     else if (nextSection) {
//       nextSection.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Reset scrolling flag
//     this.isScrolling = false;

//     // Reset endOfServicesReached flag if we're leaving the services section
//     if (this.sections[this.currentSectionIndex] !== 'services') {
//       this.endOfServicesReached = false;
//     }
//   }
//   onEndOfServices() {
//     // Handle scroll to the next section
//     this.endOfServicesReached = true;
//     console.log(
//       'end of services reached from public component, value is ' +
//         this.endOfServicesReached
//     );
//     return;
//   }

//   onStartOfServices() {
//     // Reset endOfServicesReached flag
//     this.endOfServicesReached = false;

//     // Handle scroll to the previous section
//     this.currentSectionIndex -= 1;
//     this.currentSectionIndex = Math.max(
//       0,
//       Math.min(this.currentSectionIndex, this.sections.length - 1)
//     );
//     const previousSection = document.getElementById(
//       this.sections[this.currentSectionIndex]
//     );
//     if (previousSection) {
//       previousSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   }

//   ngOnInit() {}
// }
