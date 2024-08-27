import { Component } from '@angular/core';

import { WwwHomeS1Component } from './components/www-home-s1/www-home-s1.component';
import { WwwHomeS2Component } from './components/www-home-s2/www-home-s2.component';

@Component({
  selector: 'app-www-home',
  standalone: true,
  imports: [WwwHomeS1Component, WwwHomeS2Component ],
  templateUrl: './www-home.component.html',
  styleUrl: './www-home.component.scss'
})
export class WwwHomeComponent {

}
