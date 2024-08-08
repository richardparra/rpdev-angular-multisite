import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, CommonModule],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss'
})
export class LandingLayoutComponent {
  title = 'DM Formación';
  isMenuScrolled = false;
  openWhatsapp = false;

  ngOnInit() {

  }
  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.scrollY > 500)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;

    // console.log(this.isMenuScrolled)
  }

  /*
  openSideBar() {
    this.isSidebarShowing = true;
  }

  closeSideBar() {
    this.isSidebarShowing = false;
  }
*/
  openWhastApp(){
    this.openWhatsapp = true;
  }
  closeWhatsApp(){

  }
  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  data: any = '';
  @HostListener('FormSubmitCustomEvent', ['$event'])
  onCustomEventCaptured(event: any) {
    //console.log('Event Received', event.detail);
    this.data = event.detail.data;
    this.openWhatsapp = false;
  }
}


