import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy, SimpleChanges, OnChanges, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.scss'
})
export class MapComponentComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  ngOnDestroy() {}
}