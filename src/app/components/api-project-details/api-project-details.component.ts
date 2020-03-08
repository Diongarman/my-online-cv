import { Component, OnInit } from "@angular/core";
import { TodoApiService } from "../../services/todo-api.service";

import { ActivatedRoute } from "@angular/router";

import { Project } from "../../models/Project";
import { projects } from "../../data/projects-data";

import { Location } from "@angular/common";

@Component({
  selector: "app-api-project-details",
  templateUrl: "./api-project-details.component.html",
  styleUrls: ["./api-project-details.component.css"]
})
export class ApiProjectDetailsComponent implements OnInit {
  project: Project;
  todos;
  isShow = false;
  loading = false;
  constructor(
    private todoApiService: TodoApiService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  back() {
    this._location.back();
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
    this.loading = this.isShow;

    if (this.isShow) {
      this.todoApiService.getTodos().subscribe(transformedData => {
        this.todos = [...transformedData];
        this.loading = false;
      });
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.project = projects.find(
        project => project.id === +params.get("projectId")
      );
    });
  }
}
