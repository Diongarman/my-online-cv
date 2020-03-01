import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoApiService {
  todosChanged = new Subject<any>();
  todos = [];
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http
      .get<any>("https://secret-taiga-87491.herokuapp.com/todos", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-auth":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjA2ZGQ2NGIyOWRmMDE0MDBjYzUzYzIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTI3MTc2NTQ4fQ.Obgnui4kFqtUS9OcBZFx-0hdKNmHMq0b_TUjxLJMrLA"
        }
      })
      .pipe(
        map(resData => {
          return resData.todos;
        })
      )
      .subscribe(transformedData => {
        return [...transformedData];
      });
  }
}

/*
fetchCharacters() {
  this.http.get<any>('https://swapi.co/api/people/?format=json')
    .pipe(map(resData => {
      return resData.results.map((character, index) => {
        return {
          id: index,
          name: character.name,
          gender: character.gender
        };
      });
    }))
    .subscribe(transformedData => {
    this.characters = [...transformedData];
    this.charactersChanged.next(this.characters);
  });

  return this.characters;
}
*/
