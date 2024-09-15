import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-places-to-visit',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './places-to-visit.component.html',
  styleUrl: './places-to-visit.component.scss'
})
export class PlacesToVisitComponent {

  places = [
    {
      name: "Gulmarg",
      ImgUrl: 'assets/gulmarg.jpg'
    },
    {
      name: "Doodhpathri",
      ImgUrl: 'assets/doodhpathri.jpg'

    },
    {
      name: "Sonamarg",
      ImgUrl: 'assets/sonamarg.jpg'

    },
    {
      name: "Pahalgam",
      ImgUrl: 'assets/pahalgam.jpg'
    },
    {
      name: "Srinagar",
      ImgUrl: 'assets/srinagar.jpg'
    },
    {
      name: "Gurez",
      ImgUrl: 'assets/gurez.jpg'
    },
    {
      name: "Bangus Valley",
      ImgUrl: 'assets/bangus.jpg'
    },
  ]

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ]
  placeClicked(place: any) {
    console.log(place)
  }
}

