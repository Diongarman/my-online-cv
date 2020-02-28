import { Component, OnInit } from "@angular/core";

import { CvService } from "src/app/services/cv.service";

import { educationHistory } from "src/app/data/education-data";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.css"]
})
export class WorkExperienceComponent implements OnInit {
  workExperience;
  eduHistory = educationHistory;
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.workExperience = this.cvService.getWorkHistoryItems();
  }
}
