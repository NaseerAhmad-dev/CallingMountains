import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { PLATFORM_ID, Inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

import { TagModule } from 'primeng/tag';

interface Review {
    id: number;
    name: string;
    image: string;
    location: string,
    rating:number,
    review: string;
}

@Component({
    selector: 'app-client-reviews',
    standalone: true,
    imports: [CommonModule,CardModule, ButtonModule,RatingModule, FormsModule,TagModule],
    templateUrl: './client-reviews.component.html',
    styleUrls: ['./client-reviews.component.scss']
})
export class ClientReviewsComponent {
    @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
    slider: KeenSliderInstance | any = null
    currentSlide:number = 0;
    totalSlides:number = 0;
    
    reviews: Review[] = [];
    currentReviewIndex: number = 0;
    intervalId: any;
    showReview:boolean = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
        this.loadReviews();
        this.totalSlides = this.reviews.length;
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.slider = new KeenSlider(this.sliderRef.nativeElement, {
                loop: false, // Set to false to control loop manually
                slides: {
                  perView: 1, // Adjust as per your setup
                  spacing: 2,
                },

                breakpoints: {
                    '(min-width: 768px)': {
                      slides: {
                        perView: 1,  // More slides per view on larger screens
                        spacing:0,
                      },
                    },
                    '(min-width: 1024px)': {
                      slides: {
                        perView: 3,  // More slides per view on even larger screens
                        spacing: 15,
                      },
                    },
                  },
                slideChanged: (slider) => {
                  this.currentSlide = slider.track.details.rel;
                },
              });
        }
      }

    loadReviews(): void {
        this.reviews = [
            {
                id: 1,
                name: "Naseer Ahmad",
                 image: "assets/banner-1.jpg",
                location: "Sopore, Kashmir",
                rating:5,
                review: "An unforgettable trip! The city’s vibrant culture and stunning architecture were beyond my expectations."
            },
            {
                id: 2,
                name: "Inayat Khan",
                 image: "assets/banner-1.jpg",
                location: "UttarPradesh, India",
                rating:5,
                review: "The perfect getaway! This destination offers breathtaking views and exceptional hospitality."
            },
            {
                id: 3,
                name: "Ali Raza",
                 image: "assets/banner-1.jpg",
                location: "United Kingdom",
                rating:5,
                review: "Amazing experience! The serene landscapes and historic sites made this trip truly memorable."
            },
            {
                id: 4,
                name: "Fatima Zahra",
                 image: "assets/banner-1.jpg",
                location: "United Kingdom",
                rating:5,
                review: "A scenic paradise! Murree’s lush greenery and cool climate make it a must-visit for nature lovers."
            },
            {
                id: 5,
                name: "Hassan Ali",
                 image: "assets/banner-1.jpg",
                location: "Mumbai, Maharastra",
                rating:4,
                review: "A hidden gem! The rich history and stunning landscapes of Quetta provided an unforgettable adventure."
            }
        ];


    }
    goToPreviousSlide() {
        if (this.currentSlide === 0) {
          // Move to the last slide but add an extra step for smooth transition
          this.slider.moveToIdx(this.totalSlides, true, () => {
            // Once animation ends, reset to actual last slide instantly
            this.slider.moveToIdx(this.totalSlides - 1, false);
          });
        } else {
          this.slider.prev();
        }
      }
    
      goToNextSlide() {
        if (this.currentSlide === this.totalSlides - 1) {
          // Move to the first slide but add an extra step for smooth transition
          this.slider.moveToIdx(0, true, () => {
            // Once animation ends, reset to actual first slide instantly
            this.slider.moveToIdx(0, false);
          });
        } else {
          this.slider.next();
        }
      }

    ngOnDestroy(): void {
        if (this.slider && typeof this.slider.destroy === 'function') {
          this.slider.destroy();
        }
      }

}