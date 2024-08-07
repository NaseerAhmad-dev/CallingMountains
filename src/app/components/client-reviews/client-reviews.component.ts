import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Review {
  id: number;
  name: string;
  image: string;
  location:string,
  review: string;
}

@Component({
  selector: 'app-client-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-reviews.component.html',
  styleUrl: './client-reviews.component.scss'
})
export class ClientReviewsComponent {

   reviews: Review[] = [];
    currentReviewIndex: number = 0;
    intervalId: any;

    constructor() {}

    ngOnInit(): void {
        this.loadReviews();
        // this.startAutoPlay();
    }

    loadReviews(): void {
      this.reviews = [
        {
            id: 1,
            name: "Naseer Ahmad",
            image: "assets/slide-3.jpg",
            location: "Karachi, Pakistan",
            review: "An unforgettable trip! The city’s vibrant culture and stunning architecture were beyond my expectations."
        },
        {
            id: 2,
            name: "Ayesha Khan",
            image: "assets/slider-1.jpg",
            location: "Lahore, Pakistan",
            review: "The perfect getaway! This destination offers breathtaking views and exceptional hospitality."
        },
        {
            id: 3,
            name: "Ali Raza",
            image: "assets/slider-1.jpg",
            location: "Islamabad, Pakistan",
            review: "Amazing experience! The serene landscapes and historic sites made this trip truly memorable."
        },
        {
            id: 4,
            name: "Fatima Zahra",
            image: "assets/slider-1.jpg",
            location: "Murree, Pakistan",
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
    ngOnDestroy() {
        clearInterval(this.intervalId);
    }

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
  
  }