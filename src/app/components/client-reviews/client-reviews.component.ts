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
    flag:string;
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
    slider!: KeenSliderInstance;
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
                loop: true, // Set to false to control loop manually
                slides: {
                  perView: 1, // Adjust as per your setup
                  spacing: 15,
                },

                breakpoints: {
                    '(min-width: 768px)': {
                      slides: {
                        perView: 2,  // More slides per view on larger screens
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
                name: "Arjun Sharma ",
                 image: "assets/review-avtar.svg",
                location: "Dehli, India",
                rating:5,
                flag:'in',
                review: "MagicalMountains made our trip to Kashmir unforgettable! The scenic beauty was breathtaking, and the attention to detail from start to finish was impeccable. Highly recommend their services!"
            },
            {
                id: 2,
                name: "Ananya Patel",
                 image: "assets/review-avtar.svg",
                location: "Gujarat, India",
                rating:5,
                flag:'in',
                review: "Our Kashmir tour with MagicalMountains was a dream come true. From the comfortable accommodations to the guided tours, everything was perfectly arranged. A five-star experience!"
            },
            {
                id: 3,
                name: "Rohan Gupta",
                 image: "assets/review-avtar.svg",
                location: "Uttar Pradesh",
                flag:'in',
                rating:5,
                review: "I had an amazing time exploring Kashmir with MagicalMountains. The landscapes were mesmerizing, and the tour guides were incredibly knowledgeable and friendly. Worth every penny!"
            },
            {
                id: 4,
                name: "Priya Desai",
                 image: "assets/review-avtar.svg",
                location: "Maharashtra",
                flag:'in',
                rating:5,
                review: "MagicalMountains provided an excellent tour of Kashmir. The itinerary was well-planned, and the local experiences added a special touch. I couldn't have asked for a better trip!"
            },
            {
                id: 5,
                name: "Vikram Singh",
                 image: "assets/review-avtar.svg",
                location: "Rajasthan",
                flag:'in',
                rating:5,
                review: "The Kashmir trip organized by MagicalMountains exceeded our expectations. The team’s professionalism and the quality of the tour made our vacation truly magical. Thank you!"
            },
            {
              id: 6,
              name: "Isha Reddy",
               image: "assets/review-avtar.svg",
              location: "Karnataka",
              flag:'in',
              rating:5,
              review: "Our experience with MagicalMountains in Kashmir was outstanding. The tour was well-coordinated, and every moment was filled with awe-inspiring views and great hospitality."
          },
          {
            id: 7,
            name: "Aarav Mehta",
             image: "assets/review-avtar.svg",
            location: "Punjab",
            flag:'in',
            rating:4,
            review: "MagicalMountains truly lived up to their name. The Kashmir tour was meticulously planned, and every detail was taken care of. I highly recommend their services for an unforgettable experience."
        },
        {
          id: 8,
          name: "Sanya Kapoor ",
           image: "assets/review-avtar.svg",
          location: "Haryana",
          flag:'in',
          rating:5,
          review: "The trip to Kashmir arranged by MagicalMountains was fantastic. The stunning landscapes and the smooth travel arrangements made our vacation a memorable one. Great job!"
      },
      {
        id: 9,
        name: "Neha Bhat",
         image: "assets/review-avtar.svg",
        location: "Kashmir ",
        flag:'in',
        rating:4,
        review: "As a local resident, I can say that MagicalMountains knows Kashmir inside out. Their tour was well-curated, showcasing the best of the region. Fantastic experience!"
    }
        ];
    }

    ngOnDestroy(): void {
        if (this.slider && typeof this.slider.destroy === 'function') {
          this.slider.destroy();
        }
      }

}