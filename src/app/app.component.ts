import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ClientReviewsComponent } from './components/client-reviews/client-reviews.component';
import { BannerComponent } from './components/banner/banner.component';
import { PackagesComponent } from "./components/packages/packages.component";
import { PlacesToVisitComponent } from './components/places-to-visit/places-to-visit.component';
import { WebFooterComponent } from "./components/web-footer/web-footer.component";
import { HerosectionComponent } from './components/herosection/herosection.component';
import { ChatComponentComponent } from "./components/chat-component/chat-component.component";
import { HomeComponetComponent } from "./components/home-componet/home-componet.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, ClientReviewsComponent, BannerComponent, PackagesComponent, PlacesToVisitComponent, HerosectionComponent, WebFooterComponent, ChatComponentComponent, HomeComponetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MountainsCalling';
}
