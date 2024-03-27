import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit, OnDestroy {
  services = [
    {
      id: 0,
      name: 'Web Development',
      description:
        'lorem iplsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa quaerat iusto aspernatur error ipsa dolor suscipit tenetur! Illum eligendi rem iure sit facere magni omnis dolorum iusto reprehenderit et.',
      active: true,
    },
    {
      id: 1,
      name: 'Business Automation',
      description:
        'lorem iplsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa quaerat iusto aspernatur error ipsa dolor suscipit tenetur! Illum eligendi rem iure sit facere magni omnis dolorum iusto reprehenderit et.',
      active: true,
    },
    {
      id: 2,
      name: 'Digital Marketing',
      description:
        'lorem iplsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa quaerat iusto aspernatur error ipsa dolor suscipit tenetur! Illum eligendi rem iure sit facere magni omnis dolorum iusto reprehenderit et.',
      active: true,
    },
    {
      id: 3,
      name: 'Data Analytics',
      description:
        'lorem iplsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa quaerat iusto aspernatur error ipsa dolor suscipit tenetur! Illum eligendi rem iure sit facere magni omnis dolorum iusto reprehenderit et.',
      active: true,
    },
  ];

  currentServiceIndex = 0;

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef) {}
  ngOnInit() {
    // Reset currentServiceIndex to 0 when the component is initialized

    console.log('initiated');
  }
  ngOnDestroy() {
    // Reset currentServiceIndex to 0 when leaving the component
    if (this.observer) {
      this.observer.disconnect();
    }
    console.log('destroyed');
  }
  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.currentServiceIndex = entry.isIntersecting ? 0 : 1;
      });
    });

    this.observer.observe(this.el.nativeElement);
    console.log('after view init, currentServiceIndewx');
  }

  private observer!: IntersectionObserver;
  @Output() endOfServices = new EventEmitter<void>();
  @Output() startOfServices = new EventEmitter<void>();

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    const servicesElement = document.getElementById('services');
    const rect = servicesElement?.getBoundingClientRect();

    // Check if services section is in view
    if (!rect || rect.top > window.innerHeight || rect.bottom < 0) {
      return;
    }

    const direction = event.deltaY > 0 ? 1 : -1;

    // If scrolling down and not at the end of services, increment the currentServiceIndex
    if (
      direction === 1 &&
      this.currentServiceIndex < this.services.length - 1
    ) {
      this.currentServiceIndex++;
    }
    // If scrolling up and not at the start of services, decrement the currentServiceIndex
    else if (direction === -1 && this.currentServiceIndex > 0) {
      this.currentServiceIndex--;
    }

    // Emit events if at the start or end of services
    if (this.currentServiceIndex === 0 && direction === -1) {
      this.startOfServices.emit();
      console.log(`Start of service emitted`);
    } else if (
      this.currentServiceIndex === this.services.length - 1 &&
      direction === 1
    ) {
      this.endOfServices.emit();
      console.log(this.currentServiceIndex);
      console.log(`End of service emitted`);
    }

    // Trigger change detection
    this.cdr.detectChanges();
    // this.currentServiceIndex = 0;
  }
}
