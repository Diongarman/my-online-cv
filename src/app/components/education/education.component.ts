import { Component, OnInit } from "@angular/core";

import { educationHistory } from "../../data/education-data";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent implements OnInit {
  eduHistory = educationHistory;
  faInfoCircle = faInfoCircle;
  constructor() {}

  ngOnInit(): void {}
}
