import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ClientReviewsComponent } from './components/client-reviews/client-reviews.component';
import { BannerComponent } from './components/banner/banner.component';
import { PackagesComponent } from "./components/packages/packages.component";
import { CarouselComponent } from './components/carousel/carousel.component';
import { PlacesToVisitComponent } from './components/places-to-visit/places-to-visit.component';
import { WebFooterComponent } from "./components/web-footer/web-footer.component";
import { HerosectionComponent } from './components/herosection/herosection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ClientReviewsComponent, BannerComponent, PackagesComponent, CarouselComponent, PlacesToVisitComponent,HerosectionComponent,  WebFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MountainsCalling';
  chatIconUrl = 'https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg';

  
 openWhatsapp = () => {
  const Message = "I want to book a travel package";
  window.open(`https://wa.me/+918491015362?text=${Message}`, "_blank");
};
}
