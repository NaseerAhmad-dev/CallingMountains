import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CarouselComponent } from '../carousel/carousel.component';
import { HerosectionComponent } from "../herosection/herosection.component";
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { SwipePagesComponentComponent } from "../swipe-pages-component/swipe-pages-component.component";
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
  imports: [CommonModule, CardModule, ButtonModule, CarouselComponent, HerosectionComponent, CarouselModule, ButtonModule, TagModule, SwipePagesComponentComponent],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
})

export class PackagesComponent {
  constructor(private router:Router, private dataService: DataserviceService){}
  active = 0;
  packsToDisplay:any  = []

  products!: Product[];
  responsiveOptions: any[] | undefined;
  packagesTypes = [
    {
      "id": 1,
      "title": "Solo Trip to Kashmir",
      "originPrice": "Rs 62,999",
      "discount": "Rs 58,999",
      "imgUrl": "https://kashmirtravelportal.com/wp-content/uploads/2024/07/vkkg9xouczi.jpg",
      "description": "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
      "days": 5,
      "nights": 4,
      "destinations": ["srinagar","sonamarg","pahalgam","gulmarg"],
      "activities": [
        {
          "day": "Airport to Srinagar",
          "dayActivity": "Site Seeing"
        },
        {
          "day": "Srinagar to sonamarg",
          "dayActivity": " Exploring Sonamarg"
        },
        {
          "day": "Srinagar to Pahalgam",
          "dayActivity": " Exploring Betaab, Aru Chandanwari"
        },
        {
          "day": "Srinagar to Gulmarg",
          "dayActivity": "Exploring Gulmarg"
        },
        {
          "day": "Srinagar to Airport",
          "dayActivity": "Leaving with beautiful Memories"
        },
      ],
      "inclusions":["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "all taxes" , "1 shikara ride"]
    },
    {
      "id": 3,
      'title': "Family-Friendly Ladakh",
      "originPrice": "Rs 14,999",
      "discount":"Rs 12,999",
      "imgUrl":'https://images.pexels.com/photos/8742541/pexels-photo-8742541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      "description":'Create lasting memories with your loved ones in the landscapes of Kashmir',
      "days": 5,
      "nights": 4,
      "destinations": ["srinagar","sonamarg","pahalgam","gulmarg"],
      "activities": [
        {
          "day": "Airport to Srinagar",
          "dayActivity": "Site Seeing"
        },
        {
          "day": "Srinagar to sonamarg",
          "dayActivity": " Exploring Sonamarg"
        },
        {
          "day": "Srinagar to Pahalgam",
          "dayActivity": " Exploring Betaab, Aru Chandanwari"
        },
        {
          "day": "Srinagar to Gulmarg",
          "dayActivity": "Exploring Gulmarg"
        },
        {
          "day": "Srinagar to Airport",
          "dayActivity": "Leaving with beautiful Memories"
        },
      ],
      "inclusions":["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "all taxes" , "1 shikara ride"]
      

    },
    {
      "id": 2,
      "title": "Serene Ladakh Sojourn",
      "originPrice": "Rs 14999",
      "discount":"Rs 12,999",
      "imgUrl":'https://kashmirtravelportal.com/wp-content/uploads/2024/07/vv0ff4eozai.jpg',
      "description":'Immerse yourself in the tranquil beauty of Ladakh',
      "days": 5,
      "nights": 4,
      "destinations": ["srinagar","sonamarg","pahalgam","gulmarg"],
      "activities": [
        {
          "day": "Airport to Srinagar",
          "dayActivity": "Site Seeing"
        },
        {
          "day": "Srinagar to sonamarg",
          "dayActivity": " Exploring Sonamarg"
        },
        {
          "day": "Srinagar to Pahalgam",
          "dayActivity": " Exploring Betaab, Aru Chandanwari"
        },
        {
          "day": "Srinagar to Gulmarg",
          "dayActivity": "Exploring Gulmarg"
        },
        {
          "day": "Srinagar to Airport",
          "dayActivity": "Leaving with beautiful Memories"
        },
      ],
      "inclusions":["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "all taxes" , "1 shikara ride"]
    },
    {
      "id": 2,
      "title": "Culinary Delights of Kashmir",
      'originPrice': "Rs 14999",
      "discount":"Rs 12,999",
      "imgUrl":'https://kashmirtravelportal.com/wp-content/uploads/2023/11/4gyueebwdwo.jpg',
      "description":'Embark on a gastronomic journey through Kashmir.'
    },
    {
      "id": 3,
      "title": "Trekking Through Meadows and Mountains",
      "originPrice": "Rs 14999",
      "discount":"Rs 12,999",
      "imgUrl":'https://kashmirtravelportal.com/wp-content/uploads/2024/07/jlzvbaicew0-960x636.jpg',
      "description":'Embark on a breathtaking trekking adventure through Kashmir"s stunning landscapes',
      "days": 5,
      "nights": 4,
      "destinations": ["srinagar","sonamarg","pahalgam","gulmarg"],
      "activities": [
        {
          "day": "Airport to Srinagar",
          "dayActivity": "Site Seeing"
        },
        {
          "day": "Srinagar to sonamarg",
          "dayActivity": " Exploring Sonamarg"
        },
        {
          "day": "Srinagar to Pahalgam",
          "dayActivity": " Exploring Betaab, Aru Chandanwari"
        },
        {
          "day": "Srinagar to Gulmarg",
          "dayActivity": "Exploring Gulmarg"
        },
        {
          "day": "Srinagar to Airport",
          "dayActivity": "Leaving with beautiful Memories"
        },
      ],
      "inclusions":["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "all taxes" , "1 shikara ride"]
    },
    {
      "id": 3,
      "title": "Adrenaline-Fueled Expeditions",
      "originPrice": "Rs 14999",
      "discount":"Rs 12,999",
      "imgUrl":'https://kashmirtravelportal.com/wp-content/uploads/2023/12/11019174-960x636.jpg',
      "description":'Embrace the thrill of remote adventures, explore remote destinations.',
      "days": 5,
      "nights": 4,
      "destinations": ["srinagar","sonamarg","pahalgam","gulmarg"],
      "activities": [
        {
          "day": "Airport to Srinagar",
          "dayActivity": "Site Seeing"
        },
        {
          "day": "Srinagar to sonamarg",
          "dayActivity": " Exploring Sonamarg"
        },
        {
          "day": "Srinagar to Pahalgam",
          "dayActivity": " Exploring Betaab, Aru Chandanwari"
        },
        {
          "day": "Srinagar to Gulmarg",
          "dayActivity": "Exploring Gulmarg"
        },
        {
          "day": "Srinagar to Airport",
          "dayActivity": "Leaving with beautiful Memories"
        },
      ],
      "inclusions":["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "all taxes" , "1 shikara ride"]
    }
  ]
  ngOnInit(){
    this.packsToDisplay = JSON.parse(JSON.stringify(this.packagesTypes))
    this.setResponsiveOptions();
    this.setProducts()
  }

  setResponsiveOptions(){
    this.responsiveOptions = [
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
  ];
  }

  setProducts(){
   this.products = [
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
  },
   ]
  }

  filterPacks(packId: number) {
    this.active = packId;
    if (packId === 0) {
      this.packsToDisplay = [...this.packagesTypes];
    } else {
      this.packsToDisplay = this.packagesTypes.filter(pack => pack.id === packId);
    }
  }

 
  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
    }
    return
}

}
