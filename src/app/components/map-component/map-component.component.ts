import { Component, OnInit, PLATFORM_ID, Inject, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map-component',
  standalone: true,
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent {
  private map!: any; // Using 'any' type for Leaflet map instance
  private centroid: [number, number] = [42.3601, -71.0589];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // private async initMap(): Promise<void> {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const L = (await import('leaflet')).default; // Dynamic import of Leaflet

  //     this.map = L.map('map', {
  //       center: this.centroid,
  //       zoom: 12
  //     });

  //     const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       maxZoom: 18,
  //       minZoom: 10,
  //       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //     });

  //     // Create 5 random jitteries and add them to the map
  //     Array(5).fill(this.centroid).map(
  //       x => [x[0] + (Math.random() - 0.5) / 10, x[1] + (Math.random() - 0.5) / 10] as [number, number]
  //     ).map(
  //       x => L.marker(x)
  //     ).forEach(
  //       marker => marker.addTo(this.map)
  //     );

  //     tiles.addTo(this.map);
  //   }
  // }

  // ngAfterViewInit(): void {
  //   this.initMap();
  // }
}
