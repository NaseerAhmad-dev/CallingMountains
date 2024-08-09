import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-package',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-package.component.html',
  styleUrl: './display-package.component.scss'
})
export class DisplayPackageComponent {
  pack:any;
constructor(private dataService:DataserviceService){}
ngOnInit(): void {
  this.pack = this.dataService.getData();
}
}
