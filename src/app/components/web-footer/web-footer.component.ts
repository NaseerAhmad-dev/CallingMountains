import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-web-footer',
  standalone: true,
  imports: [BannerComponent, CommonModule, RouterModule],
  templateUrl: './web-footer.component.html',
  styleUrl: './web-footer.component.scss'
})
export class WebFooterComponent {

}
