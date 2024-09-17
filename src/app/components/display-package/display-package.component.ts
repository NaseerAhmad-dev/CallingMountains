import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { WebFooterComponent } from "../web-footer/web-footer.component";

@Component({
    selector: 'app-display-package',
    standalone: true,
    imports: [CommonModule, BadgeModule, GalleriaModule, FieldsetModule, DividerModule, StepperModule, ButtonModule, TagModule, WebFooterComponent],
    templateUrl: './display-package.component.html',
    styleUrl: './display-package.component.scss'
})
export class DisplayPackageComponent {
    pack: any;
    loading:boolean = true;
    constructor(private dataService: DataserviceService) { }
    images: any[] | undefined;
    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];


    ngOnInit() {
        this.fetchPackDetails();
        this.assignImagesToPack();
    }
   
    fetchPackDetails() {
        this.dataService.packSelected.subscribe(res => {
            if (res)
            {
                this.pack = res;
                this.loading = false;
            }
        });
    }

    getSeverity(status: string) {
        switch (status) {
            case 'BESTSELLING':
                return 'success';
            case 'TRENDING':
                return 'warning';
            case 'POPULAR':
                return 'info';
        }
        return 'secondary'
    }


    
    assignImagesToPack() {

        this.images = [
            {
                itemImageSrc: 'assets/d-images/img-1.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'assets/d-images/img-2.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'assets/d-images/img-3.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'assets/d-images/img-4.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'assets/d-images/img-5.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            },
            {
                itemImageSrc: 'assets/d-images/img-6.jpg',
                alt: 'Description for Image 6',
                title: 'Title 6'
            },
            {
                itemImageSrc: 'assets/d-images/img-8.jpg',
                alt: 'Description for Image 7',
                title: 'Title 7'
            },
            {
                itemImageSrc: 'assets/d-images/img-8.jpg',
                alt: 'Description for Image 7',
                title: 'Title 8'
            },
            {
                itemImageSrc: 'assets/d-images/img-9.jpg',
                alt: 'Description for Image 7',
                title: 'Title 9'
            },
            {
                itemImageSrc: 'assets/d-images/img-10.jpg',
                alt: 'Description for Image 7',
                title: 'Title 10'
            }
        ]
    }
}
