import { Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminLayoutComponent } from "../../shared/layouts/admin-layout/admin-layout.component";

export const ADMIN_ROUTES: Routes = [
  {
    path:'', component: AdminLayoutComponent, children: [
      {path:'', component: AdminHomeComponent}
    ]
  }
]

