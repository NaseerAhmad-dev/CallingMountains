import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';
import { HerosectionComponent } from "../herosection/herosection.component";
import { DisplayPackageComponent } from "../display-package/display-package.component";
import { PackagesComponent } from "../packages/packages.component";
import { PlacesToVisitComponent } from "../places-to-visit/places-to-visit.component";
import { ClientReviewsComponent } from "../client-reviews/client-reviews.component";
import { ChatComponentComponent } from '../chat-component/chat-component.component';
import { WebFooterComponent } from "../web-footer/web-footer.component";
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { SwipePagesComponentComponent } from '../swipe-pages-component/swipe-pages-component.component';

@Component({
  selector: 'app-home-componet',
  standalone: true,
  imports: [HeaderComponent,ContactUsComponent, ChatComponentComponent, RouterOutlet, HerosectionComponent, DisplayPackageComponent, PackagesComponent, PlacesToVisitComponent, ClientReviewsComponent, WebFooterComponent, SwipePagesComponentComponent],
  templateUrl: './home-componet.component.html',
  styleUrl: './home-componet.component.scss'
})
export class HomeComponetComponent {

}
