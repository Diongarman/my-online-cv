import { Component, OnInit } from "@angular/core";

import { TodoApiService } from "../../services/todo-api.service";

import { Subscription } from "rxjs";

@Component({
  selector: "app-api-project-details",
  templateUrl: "./api-project-details.component.html",
  styleUrls: ["./api-project-details.component.css"]
})
export class ApiProjectDetailsComponent implements OnInit {
  todos;
  todosSubs: Subscription;
  constructor(private todoApiService: TodoApiService) {}

  ngOnInit(): void {
    this.todos = this.todoApiService.getTodos();
  }
}
