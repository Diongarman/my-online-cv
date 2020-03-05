import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoApiService {
  todosChanged = new Subject<any>();
  private todos: any;
  constructor(private http: HttpClient) {}

  getTodos() {
    this.http
      .get<any>("https://secret-taiga-87491.herokuapp.com/todos", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-auth":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjA2ZGQ2NGIyOWRmMDE0MDBjYzUzYzIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTI3MTc2NTQ4fQ.Obgnui4kFqtUS9OcBZFx-0hdKNmHMq0b_TUjxLJMrLA"
        }
      })
      .pipe(
        map(resData => {
          //console.log(resData);
          return resData.todos.map((todo, index) => {
            return {
              text: todo.text
            };
          });
        })
      )
      .subscribe(transformedData => {
        this.todos = [...transformedData];
        this.todosChanged.next(this.todos);
      });
    return this.todos;
  }
}
