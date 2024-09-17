import { Component } from '@angular/core';
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [ContactUsPageComponent, ContactUsComponent],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss'
})
export class ContactUsPageComponent {

}
