import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent }        from "./component/home/home.component";
import { DisciplinesComponent } from "./component/disciplines/disciplines.component";
import { GradesComponent }      from "./component/grades/grades.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "disciplines", component: DisciplinesComponent },
  { path: "grades", component: GradesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
