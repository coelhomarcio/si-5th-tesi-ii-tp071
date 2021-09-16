import { Injectable } from "@angular/core";

export interface Discipline {
  id: number | null,
  discipline: string | null,
  weekday: string | null,
  time: string | null,
  p1: number | null,
  p2: number | null
}

const DISCIPLINES: Discipline[] = [
  {
    id:      1, discipline: "Desenvolvimento para Dispositivos Móveis I",
    weekday: "Segunda-feira", time: "19:00", p1: null, p2: null
  },
  {
    id:      2, discipline: "Negócios e Marketing e Eletrônicos",
    weekday: "Quarta-feira", time: "19:00", p1: null, p2: null
  },
  {
    id:      3, discipline: "Desenvolvimento para Servidores II",
    weekday: "Quinta-feira", time: "19:00", p1: null, p2: null
  },
  {
    id:      4, discipline: "Tópicos Especiais em Sistemas para Internet II",
    weekday: "Sexta-feira", time: "19:00", p1: null, p2: null
  },
  {
    id:      5, discipline: "Projeto de Prototipagem e Testes de Usabilidade",
    weekday: "Sábado", time: "08:00", p1: null, p2: null
  },
  {
    id:      6, discipline: "Projeto de Trabalho de Graduação em Sistemas para Internet I",
    weekday: "Sábado", time: "11:30", p1: null, p2: null
  }
];

@Injectable({
  providedIn: "root"
})
export class DisciplinesService {
  private _disciplines: Discipline[];
  private _discipline: Discipline;

  constructor() {
    this._disciplines = Object.assign([], DisciplinesService.getLocalStorage());
    this._discipline = {
      id: null, discipline: null, weekday: null, time: null, p1: null, p2: null
    };
  }

  public get disciplines(): Discipline[] {
    return this._disciplines;
  }

  private set disciplines(value: Discipline[]) {
    this._disciplines = value;
  }

  public get discipline(): Discipline {
    return this._discipline;
  }

  public set discipline(value: Discipline) {
    this._discipline = value;
  }

  private static getLocalStorage(): Discipline[] {
    if (localStorage.hasOwnProperty("disciplines"))
      return JSON.parse(localStorage.disciplines);
    else
      return JSON.parse(DisciplinesService.setLocalStorage(DISCIPLINES));
  }

  private static setLocalStorage(disciplineArr: Discipline[]) {
    return localStorage.disciplines = JSON.stringify(disciplineArr);
  }

  public saveDiscipline() {
    if (this.disciplines !== DisciplinesService.getLocalStorage())
      this.disciplines = Object.assign([], DisciplinesService.getLocalStorage());
    if (this.discipline.id === null) {
      if (this.disciplines.length) {
        const maxId = this.disciplines.reduce((el1, el2) => {
          return el1.id! > el2.id! ? el1 : el2;
        }).id!;
        this.discipline.id = maxId + 1;
      }
      else
        this.discipline.id = 1;
      this.disciplines.push(this.discipline);
    }
    else {
      const disciplineIndex = this.disciplines.findIndex(el => el.id === this.discipline.id);
      if (disciplineIndex === -1)
        this.disciplines.push(this.discipline);
      else
        this.disciplines[disciplineIndex] = Object.assign({}, this.discipline);
    }
    DisciplinesService.setLocalStorage(this.disciplines);
  }

  public deleteDiscipline(id: number) {
    if (this.disciplines !== DisciplinesService.getLocalStorage())
      this.disciplines = Object.assign([], DisciplinesService.getLocalStorage());
    const disciplineIndex = this.disciplines.findIndex(el => el.id === id);
    if (disciplineIndex !== -1) {
      this.disciplines.splice(disciplineIndex, 1);
      DisciplinesService.setLocalStorage(this.disciplines);
    }
  }
}
