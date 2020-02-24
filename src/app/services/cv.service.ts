import { Injectable } from "@angular/core";

import { workExperience } from "../data/work-exp-data";

@Injectable({
  providedIn: "root"
})
export class CvService {
  workExperience = workExperience;

  constructor() {}

  getWorkHistoryItems() {
    return this.workExperience;
  }

  getWorkHistoryItem(i: number) {
    return this.workExperience[i];
  }
}
