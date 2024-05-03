import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('slideInImages', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }), // Initial state
        animate(
          '500ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ), // Transition to visible state
      ]),
    ]),
  ],
})
export class PortfolioComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private autoChangeInterval = 5000; // Change every 5 seconds (5000 milliseconds)
  private autoChangeTimeout: any;
  sliderPaused = false;
  portfolio = [
    {
      category: 'Visual Arts',
      description:
        'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
      works: [
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400/65dce0164505081.63f7b49428d5b.jpg',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400/2e4836164505081.63f7aaa35faf0.gif',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400/a0f8a0195862353.6615717c8a523.png',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://plus.unsplash.com/premium_photo-1670333183141-9e3ffc533dfa?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
      ],
    },
    {
      category: 'Developer Solutions',
      description:
        'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
      works: [
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://images.unsplash.com/photo-1714329454060-7b243446995b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://plus.unsplash.com/premium_photo-1694618623649-51733e6001fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://images.unsplash.com/photo-1714409571530-62e0942da4e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://images.unsplash.com/photo-1713528197472-7b7f7dbb5bb4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
      ],
    },

    {
      category: 'Business Automation',
      description:
        'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
      works: [
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://plus.unsplash.com/premium_photo-1670333242751-0c517a2ce0d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://images.unsplash.com/photo-1603832286879-91f1ed184dd7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://images.unsplash.com/photo-1600073956897-4fc08a2b27d0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
        {
          title: 'lorem ipsum project title',
          coverImage:
            'https://images.unsplash.com/photo-1513354032436-edd8bdaf3a66?q=80&w=1701&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
            'For Hispanic Heritage Month in the US, ESPN used a formula created by FiveThirtyEight, which incorporates on-field performance, social media popularity and ESPN analyst commentary to arrive at a conclusion of just who the most popular Latin athlete is. ',
        },
      ],
    },
  ];
  currentCategoryIndex = 0;
  currentWorkIndex = 0;
  showModal = false; // Boolean flag to control modal visibility

  constructor(private cdr: ChangeDetectorRef) {
    this.startAutoChange();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  startAutoChange(): void {
    interval(this.autoChangeInterval)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (!this.sliderPaused && !this.autoChangeTimeout) {
          this.nextCategory();
        }
      });
  }

  nextCategory(): void {
    this.currentCategoryIndex =
      (this.currentCategoryIndex + 1) % this.portfolio.length;
    this.resetAutoChangeTimeout();
  }

  selectPortfolioCategory(index: number): void {
    this.currentCategoryIndex = index;
    this.resetAutoChangeTimeout(); // Reset auto change timeout when selecting a new category
  }

  resetAutoChangeTimeout(): void {
    if (this.autoChangeTimeout) {
      clearTimeout(this.autoChangeTimeout);
    }
    this.autoChangeTimeout = setTimeout(() => {
      this.nextCategory(); // Trigger next category change after timeout
      this.cdr.detectChanges();
    }, this.autoChangeInterval); // Set timeout for auto change interval
  }

  pauseSlider(): void {
    this.sliderPaused = true;
    if (this.autoChangeTimeout) {
      clearTimeout(this.autoChangeTimeout);
      this.autoChangeTimeout = null;
    }
  }

  resumeSlider(): void {
    this.sliderPaused = false;
    this.resetAutoChangeTimeout(); // Resume auto change after slider is resumed
  }

  openModal(index: number): void {
    this.currentWorkIndex = index;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
    this.pauseSlider(); // Pause slider when modal is opened
  }

  closeModal(): void {
    this.showModal = false;
    document.body.style.overflow = 'auto';
    this.resumeSlider(); // Resume slider when modal is closed
  }
}
