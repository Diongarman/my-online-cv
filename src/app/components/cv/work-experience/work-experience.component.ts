import { Component, OnInit } from "@angular/core";

import { workExperience } from "../../../data/work-exp-data";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.css"]
})
export class WorkExperienceComponent implements OnInit {
  workExperience;
  constructor() {}

  ngOnInit(): void {
    this.workExperience = workExperience;
  }
}
