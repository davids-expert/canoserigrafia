import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any[];

  constructor() {
    this.images = [
      {
        img: './../../assets/img/portada1.jpg',
        title: 'Estampado',
        subtitle: 'Realización de estampaciones.'
      },
      {
        img: './../../assets/img/portada2.jpg',
        title: 'Diseño',
        subtitle: 'Diseñamos diferentes modelos.'
      },
      {
        img: './../../assets/img/portada3.jpg',
        title: 'Cercanía',
        subtitle: 'Pequeños, medianos y grandes pedidos.'
      }
    ];
  }

  ngOnInit() {}
}
