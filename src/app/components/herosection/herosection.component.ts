import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HerosectionComponent {

  scroll() {
    window.scrollBy({
        top: 600,  // Scroll 500px down
        left: 0,
        behavior: 'smooth'  // Smooth scrolling
    });
}

  
}
