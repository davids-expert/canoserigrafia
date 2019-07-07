import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServProdComponent } from './serv-prod/serv-prod.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'servicios', component: ServProdComponent },
  { path: 'trabajos', component: WorksComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
