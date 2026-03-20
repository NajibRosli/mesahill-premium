import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { HeroComponent } from './hero.component';
import { GalleryComponent } from './gallery.component';
import { SpecsComponent } from './specs.component';
import { CheckinComponent } from './checkin.component';
import { RulesComponent } from './rules.component';
import { SustainabilityComponent } from './sustainability.component';
import { LaundryComponent } from './laundry.component';
import { FacilitiesComponent } from './facilities.component';
import { FooterComponent } from './footer.component';
import { ReviewsComponent } from './reviews.component';
import { FaqComponent } from './faq.component';
import { AmenitiesComponent } from './amenities.component';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { LocationComponent } from './location.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    GalleryComponent,
    SpecsComponent,
    ReviewsComponent,
    CheckinComponent,
    RulesComponent,
    SustainabilityComponent,
    LaundryComponent,
    FacilitiesComponent,
    LocationComponent,
    FooterComponent,
    FaqComponent,
    AmenitiesComponent,
    ScrollToTopComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

