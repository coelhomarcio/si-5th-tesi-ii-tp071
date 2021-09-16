import { NgModule }           from "@angular/core";
import { MatToolbarModule }   from "@angular/material/toolbar";
import { MatButtonModule }    from "@angular/material/button";
import { MatIconModule }      from "@angular/material/icon";
import { MatMenuModule }      from "@angular/material/menu";
import { MatListModule }      from "@angular/material/list";
import { MatTooltipModule }   from "@angular/material/tooltip";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule }     from "@angular/material/input";
import { MatSelectModule }    from "@angular/material/select";

const materials = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule {
}
