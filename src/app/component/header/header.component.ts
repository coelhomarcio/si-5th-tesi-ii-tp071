import { Component, OnInit } from "@angular/core";

@Component({
  selector:    "app-header",
  templateUrl: "./header.component.html",
  styleUrls:   ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  title = "Disciplinas";
  navList = [
    { label: "Home", link: "home" },
    { label: "Disciplinas", link: "disciplines" },
    { label: "Notas", link: "grades" }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
