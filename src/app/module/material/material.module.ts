import { NgModule }         from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule }  from "@angular/material/button";
import { MatIconModule }    from "@angular/material/icon";
import { MatMenuModule }    from "@angular/material/menu";
import { MatListModule }    from "@angular/material/list";

const materials = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatListModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule {
}
