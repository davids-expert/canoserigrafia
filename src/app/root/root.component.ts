import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  page: string;
  year: number;

  constructor(private router: Router) {
    this.page = location.pathname.split('/')[1];
    this.year = new Date().getFullYear();
  }

  ngOnInit() {}

  navigateTo(screen: string) {
    this.router.navigate([screen]);
    this.page = screen;
  }
}
