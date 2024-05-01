import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private autoChangeTimeout: any; // Hold reference to auto change timeout

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

  constructor(private cdr: ChangeDetectorRef) {
    this.startAutoChange();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  startAutoChange(): void {
    interval(3500)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (!this.autoChangeTimeout) {
          this.nextService();
          this.cdr.detectChanges();
        }
      });
  }

  nextService(): void {
    this.currentServiceIndex =
      (this.currentServiceIndex + 1) % this.services.length;
    this.resetAutoChangeTimeout();
  }

  selectService(index: number): void {
    this.currentServiceIndex = index;
    this.resetAutoChangeTimeout();
  }

  resetAutoChangeTimeout(): void {
    if (this.autoChangeTimeout) {
      clearTimeout(this.autoChangeTimeout);
    }
    this.autoChangeTimeout = setTimeout(() => {
      this.autoChangeTimeout = null;
      this.nextService(); // Continue to the next service after timeout
      this.cdr.detectChanges();
    }, 3500); // Delay until next auto change time (3.5 seconds)
  }
}
