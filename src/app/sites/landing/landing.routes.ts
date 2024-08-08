import { Routes } from "@angular/router";
import { LandingHomeComponent } from "./landing-home/landing-home.component";
import { LandingLayoutComponent } from "../../shared/layouts/landing-layout/landing-layout.component";

export const LANDING_ROUTES: Routes = [
  {
    path:'', component: LandingLayoutComponent, children: [
      { path: '' , component:LandingHomeComponent },
      { path: 'landing' , component:LandingHomeComponent },
      { path: ':codigourl' , component:LandingHomeComponent },
      { path: 'landing/:codigourl' , component:LandingHomeComponent }
    ]
  }
]
