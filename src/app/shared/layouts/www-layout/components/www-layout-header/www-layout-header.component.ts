import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-www-layout-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './www-layout-header.component.html',
  styleUrl: './www-layout-header.component.scss',
})
export class WwwLayoutHeaderComponent {
  isMenuScrolled = false;
  isMenuColored = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.scrollY > 50) {
      this.isMenuScrolled = true;
      if (window.scrollY > 580) {
        this.isMenuColored = true;
      } else {
        this.isMenuColored = false;
      }
    } else this.isMenuScrolled = false;

    // console.log(this.isMenuScrolled)
  }
}
