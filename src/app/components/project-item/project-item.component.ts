import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { Project } from "../../models/Project";

@Component({
  selector: "app-project-item",
  templateUrl: "./project-item.component.html",
  styleUrls: ["./project-item.component.css"]
})
export class ProjectItemComponent implements OnInit {
  @Input() projectItem: Project;
  faGithub = faGithub;
  faInfoCircle = faInfoCircle;

  constructor() {}

  ngOnInit(): void {}
}

/*
Resources

https://github.com/FortAwesome/angular-fontawesome


*/
