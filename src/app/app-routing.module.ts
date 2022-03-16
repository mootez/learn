import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DevisComponent } from './devis/devis.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { VitresComponent } from './vitres/vitres.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact',  component: ContactComponent },
  { path: 'devis',  component: DevisComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'service',  component: ServiceComponent },
  { path: 'vitre',  component: VitresComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
