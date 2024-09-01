import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { PLATFORM_ID, Inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

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
    imports: [CommonModule,CardModule, ButtonModule,RatingModule, FormsModule],
    templateUrl: './client-reviews.component.html',
    styleUrls: ['./client-reviews.component.scss']
})
export class ClientReviewsComponent {
    @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
    slider: KeenSliderInstance | any = null

    
    reviews: Review[] = [];
    currentReviewIndex: number = 0;
    intervalId: any;
    showReview:boolean = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
        this.loadReviews();
        // this.startAutoPlay();
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.slider = new KeenSlider(this.sliderRef.nativeElement, {
                slides: {
                  perView: 1,
                  spacing: 15,
                },
                breakpoints: {
                  '(min-width: 768px)': {
                    slides: {
                      perView: 2, // Adjust this based on how many you want to show on larger screens
                      spacing: 15,
                    },
                  },
                  // Add more breakpoints if needed
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
                location: "Srinagar, Pakistan",
                rating:5,
                review: "The perfect getaway! This destination offers breathtaking views and exceptional hospitality."
            },
            {
                id: 3,
                name: "Ali Raza",
                 image: "assets/banner-1.jpg",
                location: "Islamabad Kashmir",
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
                location: "Quetta, Pakistan",
                rating:4,
                review: "A hidden gem! The rich history and stunning landscapes of Quetta provided an unforgettable adventure."
            }
        ];


    }
    
    // ngAfterViewInit() {
    //     this.slider = new KeenSlider(this.sliderRef.nativeElement, {
    //       loop: false,
    //       mode: "snap",
    //       rtl: false,
    //       slides: { perView: "auto" },
    //     })
    //   }

    startAutoPlay() {
        this.intervalId = setInterval(() => {
            this.nextReview();
        }, 3000); // Change slide every 3 seconds
    }

    previousReview() {
        if (this.currentReviewIndex > 0) {
            this.currentReviewIndex--;
        } else {
            this.currentReviewIndex = this.reviews.length - 1;
        }
    }

    nextReview() {
        if (this.currentReviewIndex < this.reviews.length - 1) {
            this.currentReviewIndex++;
        } else {
            this.currentReviewIndex = 0;
        }
    }

    ngOnDestroy(): void {
        if (this.slider && typeof this.slider.destroy === 'function') {
          this.slider.destroy();
        }
      }

}