import { Injectable } from "@angular/core";

interface Discipline {
  weekday: string,
  time: string,
  discipline: string,
  p1: number,
  p2: number
}

const DISCIPLINES: Discipline[] = [
  {
    weekday:    "Segunda-feira",
    time:       "19:00",
    discipline: "Desenvolvimento para Dispositivos Móveis I",
    p1:         NaN,
    p2:         NaN
  },
  {
    weekday:    "Quarta-feira",
    time:       "19:00",
    discipline: "Negócios e Marketing e Eletrônicos",
    p1:         NaN,
    p2:         NaN
  },
  {
    weekday:    "Quinta-feira",
    time:       "19:00",
    discipline: "Desenvolvimento para Servidores II",
    p1:         NaN,
    p2:         NaN
  },
  {
    weekday:    "Sexta-feira",
    time:       "19:00",
    discipline: "Tópicos Especiais em Sistemas para Internet II",
    p1:         NaN,
    p2:         NaN
  },
  {
    weekday:    "Sábado",
    time:       "08:00",
    discipline: "Projeto de Prototipagem e Testes de Usabilidade",
    p1:         NaN,
    p2:         NaN
  },
  {
    weekday:    "Sábado",
    time:       "11:30",
    discipline: "Projeto de Trabalho de Graduação em Sistemas para Internet I",
    p1:         NaN,
    p2:         NaN
  }
];

@Injectable({
  providedIn: "root"
})
export class DisciplinesService {
  private _disciplines: Discipline[];

  constructor() {
    this._disciplines = DISCIPLINES;
  }

  public get disciplines(): Discipline[] {
    return this._disciplines;
  }

  public set disciplines(value: Discipline[]) {
    this._disciplines = value;
  }
}
