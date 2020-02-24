import { Component, OnInit } from "@angular/core";

//import { workExperience } from "../../../data/work-exp-data";

import { CvService } from "src/app/services/cv.service";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.css"]
})
export class WorkExperienceComponent implements OnInit {
  workExperience;
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.workExperience = this.cvService.getWorkHistoryItems();
  }
}
