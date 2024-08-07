import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss'
})
export class HerosectionComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > 0; // Change this value to adjust when the blur starts
  }
}
