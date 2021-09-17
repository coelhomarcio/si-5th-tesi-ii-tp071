import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm }                       from "@angular/forms";

import { Discipline, DisciplinesService } from "../../service/disciplines.service";

@Component({
  selector:    "app-disciplines",
  templateUrl: "./disciplines.component.html",
  styleUrls:   [
    "../../shared/scss/home-disciplines.scss",
    "../../shared/scss/disciplines-grades.scss"
  ]
})
export class DisciplinesComponent implements OnInit {
  public subTitle = "Disciplinas";
  public formTitle = "Incluir";
  public weekdays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];
  public isHideForm = true;
  private _ojbModel: Discipline = {
    id: null, discipline: null, weekday: null, time: null, p1: null, p2: null
  };
  public disciplineModel: Discipline;
  private _scrollTarget = "";
  public isHideConfirmDelete = true;

  @ViewChild("form") private _form!: NgForm;

  constructor(public disciplines: DisciplinesService) {
    this.disciplineModel = this._ojbModel;
  }

  public showForm() {
    this._form.resetForm();
    this.formTitle = "Incluir";
    this.isHideForm = false;
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
    return this.disciplineModel.discipline === null ||
           this.disciplineModel.discipline === "" ||
           this.disciplineModel.weekday === null ||
           this.disciplineModel.weekday === "" ||
           this.disciplineModel.time === null ||
           this.disciplineModel.time === "";
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

  public updateDiscipline(discipline: Discipline) {
    this.formTitle = "Alterar";
    this.isHideForm = false;
    this.disciplineModel = Object.assign({}, discipline);
  }

  public confirmDelete(discipline: Discipline) {
    this.disciplineModel = Object.assign({}, discipline);
    this.isHideConfirmDelete = false;
  }

  public hideConfirmDelete() {
    this.isHideConfirmDelete = true;
  }

  public deleteDiscipline() {
    const deleteTarget = this.disciplineModel.id!.toString();
    const elToDelete = document.getElementById(deleteTarget)!;
    elToDelete.classList.add("deleting");
    this.hideConfirmDelete();
    setTimeout(() => {
      this.disciplines.deleteDiscipline(this.disciplineModel.id!);
      this.disciplineModel = Object.assign({}, this._ojbModel);
    }, 2000);
  }

  ngOnInit(): void {
  }
}
