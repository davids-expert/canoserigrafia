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
      { imageUrl: '../../assets/img/works/aha.jpg' },
      { imageUrl: '../../assets/img/works/arguero.jpg' },
      { imageUrl: '../../assets/img/works/bigbeat.jpg' },
      { imageUrl: '../../assets/img/works/bolsas1.jpg' },
      { imageUrl: '../../assets/img/works/bolsas2.jpg' },
      { imageUrl: '../../assets/img/works/captains.jpg' },
      { imageUrl: '../../assets/img/works/cuevas.jpg' },
      { imageUrl: '../../assets/img/works/edgar.jpg' },
      { imageUrl: '../../assets/img/works/euroyeye.jpg' },
      { imageUrl: '../../assets/img/works/explosion.jpg' },
      { imageUrl: '../../assets/img/works/fangoria.jpg' },
      { imageUrl: '../../assets/img/works/ficx.jpg' },
      { imageUrl: '../../assets/img/works/folixa.jpg' },
      { imageUrl: '../../assets/img/works/folixaria.jpg' },
      { imageUrl: '../../assets/img/works/granda.jpg' },
      { imageUrl: '../../assets/img/works/kustom.jpg' },
      { imageUrl: '../../assets/img/works/kustom2.jpg' },
      { imageUrl: '../../assets/img/works/lambretta.jpg' },
      { imageUrl: '../../assets/img/works/locos.jpg' },
      { imageUrl: '../../assets/img/works/lorena72.jpg' },
      { imageUrl: '../../assets/img/works/malasana.jpg' },
      { imageUrl: '../../assets/img/works/munjitas.jpg' },
      { imageUrl: '../../assets/img/works/palentino.jpg' },
      { imageUrl: '../../assets/img/works/paradiso.jpg' },
      { imageUrl: '../../assets/img/works/pauline.jpg' },
      { imageUrl: '../../assets/img/works/petit.jpg' },
      { imageUrl: '../../assets/img/works/ray.jpg' }
    ];
  }

  ngOnInit() {}
}
