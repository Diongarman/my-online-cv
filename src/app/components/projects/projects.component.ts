import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/Project";
import { projects } from "../../data/projects-data";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {}

  ngOnInit(): void {
    this.projects = projects;
  }
}
