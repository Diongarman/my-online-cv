import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { TodoApiService } from "../../services/todo-api.service";

@Component({
  selector: "app-api-project-details",
  templateUrl: "./api-project-details.component.html",
  styleUrls: ["./api-project-details.component.css"]
})
export class ApiProjectDetailsComponent implements OnInit, OnDestroy {
  todos;
  todosSubs: Subscription;
  constructor(private todoApiService: TodoApiService) {}

  ngOnInit() {
    this.todoApiService.getTodos().subscribe(transformedData => {
      this.todos = [...transformedData];

      console.log(this.todos);
    });
  }

  ngOnDestroy() {
    this.todosSubs.unsubscribe();
  }
}
