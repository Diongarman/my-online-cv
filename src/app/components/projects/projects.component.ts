import { Component, OnInit } from "@angular/core";
import { Project } from "../../models/Project";
import { projects } from "../../data/projects-data";
import { fadeIn } from "./../../animations";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  animations: [fadeIn],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {}

  ngOnInit(): void {
    this.projects = projects;
  }
}
//resources

//animations
//https://angular.io/guide/transition-and-triggers#enter-leave-view
//https://angular.io/guide/transition-and-triggers
