import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.scss'
})
export class MapComponentComponent {
    // private platform: any;
    // private map: any;
  
    // ngOnInit(): void {
    //   this.setUpMap()
    //   this.setUpMarker();
    // }


    // setUpMap(){
    //   this.platform = new H.service.Platform({
    //     apikey: 'M5jEyrMvcUnmOak6l6FPrQhzznJLoTNCRPzfPWgVkXc', // Replace with your API key
    //   });
  
    //   const defaultLayers = this.platform.createDefaultLayers();
    //   this.map = new H.Map(
    //     document.getElementById('mapContainer') as HTMLElement,
    //     defaultLayers.vector.normal.map,
    //     {
    //       zoom: 14,
    //       center: { lat: 27.7172, lng: 85.324 },
    //     }
    //   );
  
    //   const behavior = new H.mapevents.Behavior(
    //     new H.mapevents.MapEvents(this.map)
    //   );
    //   const ui = H.ui.UI.createDefault(this.map, defaultLayers);
    // }

    // setUpMarker(){
    //   this.map.addEventListener('tap', (event: any) => {
    //     const coord = this.map.screenToGeo(
    //       event.currentPointer.viewportX,
    //       event.currentPointer.viewportY
    //     );
    //     this.placeMarker(coord, 'temporary'); // Add a temporary marker
    //   });
    // }
}
