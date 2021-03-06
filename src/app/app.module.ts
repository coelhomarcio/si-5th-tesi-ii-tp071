import { NgModule }                from "@angular/core";
import { BrowserModule }           from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule }             from "@angular/forms";
import { registerLocaleData }      from "@angular/common";
import localePt                    from "@angular/common/locales/pt";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule }   from "./module/material/material.module";

import { AppComponent }         from "./app.component";
import { HeaderComponent }      from "./component/header/header.component";
import { HomeComponent }        from "./component/home/home.component";
import { DisciplinesComponent } from "./component/disciplines/disciplines.component";
import { GradesComponent }      from "./component/grades/grades.component";

import { DisciplinesService } from "./service/disciplines.service";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DisciplinesComponent,
    GradesComponent
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers:    [DisciplinesService],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
