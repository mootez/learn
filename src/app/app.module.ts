import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';


import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DevisComponent } from './devis/devis.component';
import { ServiceComponent } from './service/service.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VitresComponent } from './vitres/vitres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    DevisComponent,
    ServiceComponent,
    VitresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtv5AGlFoZ-GZeK8BPYMQ5DeJfH3QGAjo'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
