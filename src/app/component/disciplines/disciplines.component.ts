import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm }                       from "@angular/forms";

import { Discipline, DisciplinesService } from "../../service/disciplines.service";

@Component({
  selector:    "app-disciplines",
  templateUrl: "./disciplines.component.html",
  styleUrls:   [
    "./disciplines.component.scss",
    "../../shared/scss/home-disciplines.scss"
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
  private ojbModel: Discipline = {
    id: null, discipline: null, weekday: null, time: null, p1: null, p2: null
  };
  public disciplineModel: Discipline;

  @ViewChild("form") private form!: NgForm;

  constructor(public disciplines: DisciplinesService) {
    this.disciplineModel = this.ojbModel;
  }

  public showForm() {
    this.isHideForm = false;
  }

  public hideForm() {
    this.formTitle = "Incluir";
    this.isHideForm = true;
    this.form.resetForm();
  }

  public submitForm() {
    if (!this.formErrors()) {
      this.disciplines.discipline = Object.assign({}, this.disciplineModel);
      this.saveDiscipline();
    }
  }

  public updateDiscipline(discipline: Discipline) {
    this.formTitle = "Alterar";
    this.isHideForm = false;
    this.disciplineModel = Object.assign({}, discipline);
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
    this.formTitle = "Incluir";
    this.isHideForm = true;
    this.disciplines.discipline = Object.assign({}, this.disciplineModel);
    this.disciplines.saveDiscipline();
    this.disciplineModel = Object.assign({}, this.ojbModel);
    this.form.resetForm();
  }

  ngOnInit(): void {
  }
}
