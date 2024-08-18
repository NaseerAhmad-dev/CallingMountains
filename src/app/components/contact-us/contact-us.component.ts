import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TagModule], // This should include GMapModule
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'] // Corrected to styleUrls
})
export class ContactUsComponent {
}