import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WwwLayoutHeaderComponent } from './components/www-layout-header/www-layout-header.component';
@Component({
  selector: 'app-www-layout',
  standalone: true,
  imports: [ RouterOutlet, WwwLayoutHeaderComponent],
  templateUrl: './www-layout.component.html',
  styleUrl: './www-layout.component.scss'
})
export class WwwLayoutComponent {

}
