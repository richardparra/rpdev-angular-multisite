import { Routes } from "@angular/router";
import { WwwHomeComponent } from "./www-home/www-home.component";
import { WwwLayoutComponent } from "../../shared/layouts/web-layout/www-layout.component";

export const WWW_ROUTES: Routes = [
  {path:'', component: WwwLayoutComponent, children:[
    {path:'', component: WwwHomeComponent}
  ]}
]
