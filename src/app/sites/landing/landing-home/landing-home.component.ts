import { Component } from '@angular/core';

import { LandingHomeHeaderComponent } from './components/landing-home-header/landing-home-header.component';
import { LandingHomeS1Component } from './components/landing-home-s1/landing-home-s1.component';
import { LandingHomeS2Component } from './components/landing-home-s2/landing-home-s2.component';
@Component({
  selector: 'app-landing-home',
  standalone: true,
  imports: [LandingHomeHeaderComponent, LandingHomeS1Component, LandingHomeS2Component],
  templateUrl: './landing-home.component.html',
  styleUrl: './landing-home.component.scss'
})
export class LandingHomeComponent {

}
