import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { PLATFORM_ID, Inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';

interface Review {
    id: number;
    name: string;
    image: string;
    location: string,
    review: string;
}

@Component({
    selector: 'app-client-reviews',
    standalone: true,
    imports: [CommonModule,CardModule, ButtonModule,RatingModule],
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
            loop: true,
            mode: "snap",
            rtl: false,
          slides: { perView: "auto" },
          });
        }
      }

    loadReviews(): void {
        this.reviews = [
            {
                id: 1,
                name: "Naseer Ahmad",
                image: "assets/slide-3.jpg",
                location: "Sopore, Kashmir",
                review: "An unforgettable trip! The city’s vibrant culture and stunning architecture were beyond my expectations."
            },
            {
                id: 2,
                name: "Inayat Khan",
                image: "assets/slider-1.jpg",
                location: "Srinagar, Pakistan",
                review: "The perfect getaway! This destination offers breathtaking views and exceptional hospitality."
            },
            {
                id: 3,
                name: "Ali Raza",
                image: "assets/slider-1.jpg",
                location: "Islamabad Kashmir",
                review: "Amazing experience! The serene landscapes and historic sites made this trip truly memorable."
            },
            {
                id: 4,
                name: "Fatima Zahra",
                image: "assets/slider-1.jpg",
                location: "United Kingdom",
                review: "A scenic paradise! Murree’s lush greenery and cool climate make it a must-visit for nature lovers."
            },
            {
                id: 5,
                name: "Hassan Ali",
                image: "assets/slider-1.jpg",
                location: "Quetta, Pakistan",
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