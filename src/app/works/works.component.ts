import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  images: IMasonryGalleryImage[];

  constructor() {
    this.images = [
      { imageUrl: '../../assets/img/ARGÜERO.jpg' },
      { imageUrl: '../../assets/img/BOLAS 2.jpg' },
      { imageUrl: '../../assets/img/CAMISETAS 1.jpg' },
      { imageUrl: '../../assets/img/EUROYEYE.jpg' },
      { imageUrl: '../../assets/img/LAMBRETTA.jpg' },
      { imageUrl: '../../assets/img/MANRTA RAY.jpg' },
      { imageUrl: '../../assets/img/BOLSAS 3.jpg' },
      { imageUrl: '../../assets/img/MUNJITAS.jpg' },
      { imageUrl: '../../assets/img/RODRIGO CUEVAS.jpg' },
      { imageUrl: '../../assets/img/SONIDOPOLIS.jpg' }
    ];
  }

  ngOnInit() {}
}
