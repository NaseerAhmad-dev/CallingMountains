
import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { SwipePagesComponentComponent } from "../swipe-pages-component/swipe-pages-component.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { DividerModule } from 'primeng/divider';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
export interface Product {
  id: string
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number
  inventoryStatus: string;
  rating: number;
}
@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [ DividerModule ,BreadcrumbModule, SwipePagesComponentComponent, ContactUsComponent, RouterModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
})

export class PackagesComponent {

    items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Popular Plans' }, 
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/'  };
    }
}
