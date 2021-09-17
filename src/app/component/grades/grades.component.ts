import { Component, OnInit } from "@angular/core";

import { Discipline, DisciplinesService } from "../../service/disciplines.service";

@Component({
  selector:    "app-grades",
  templateUrl: "./grades.component.html",
  styleUrls:   [
    "../../shared/scss/home-disciplines.scss",
    "../../shared/scss/disciplines-grades.scss"
  ]
})
export class GradesComponent implements OnInit {
  public subTitle = "Notas";
  public formTitle = "Alterar";
  public isHideForm = true;
  private _ojbModel: Discipline = {
    id: null, discipline: null, weekday: null, time: null, p1: null, p2: null
  };
  public disciplineModel: Discipline;
  private _scrollTarget = "";

  constructor(public disciplines: DisciplinesService) {
    this.disciplineModel = this._ojbModel;
  }

  public hideForm() {
    this.isHideForm = true;
  }

  public submitForm() {
    if (!this.formErrors()) {
      this.disciplines.discipline = Object.assign({}, this.disciplineModel);
      this.saveDiscipline();
      this.scrollTo();
    }
  }

  private formErrors() {
    return isNaN(this.disciplineModel.p1!) ||
           this.disciplineModel.p1! < 0 ||
           this.disciplineModel.p1! > 10 ||
           isNaN(this.disciplineModel.p2!) ||
           this.disciplineModel.p2! < 0 ||
           this.disciplineModel.p2! > 10;
  }

  private saveDiscipline() {
    this.disciplines.discipline = Object.assign({}, this.disciplineModel);
    this.disciplines.saveDiscipline();
    this._scrollTarget = this.disciplines.discipline.id!.toString();
    this.disciplineModel = Object.assign({}, this._ojbModel);
    this.hideForm();
  }

  private scrollTo() {
    setTimeout(() => {
      const elToScroll = document.getElementById(this._scrollTarget)!;
      elToScroll.classList.add("highlight");
      elToScroll.scrollIntoView();
      setTimeout(() => elToScroll.classList.remove("highlight"), 2000);
    }, 500);
  }

  public updateGrade(discipline: Discipline) {
    this.isHideForm = false;
    this.disciplineModel = Object.assign({}, discipline);
  }

  ngOnInit(): void {
  }
}
