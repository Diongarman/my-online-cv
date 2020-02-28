import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Project } from "../../models/Project";
import { projects } from "../../data/projects-data";
import { Input } from "@angular/core";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.css"]
})
export class ProjectDetailsComponent implements OnInit {
  //@Input() projectItem: Project;
  project: Project;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.project = projects.find(
        project => project.id === +params.get("projectId")
      );
    });
  }
}
