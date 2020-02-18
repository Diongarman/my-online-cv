import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectsComponent } from "./components/projects/projects.component";
import { CvComponent } from "./components/cv/cv.component";

const routes: Routes = [
  { path: "", component: ProjectsComponent },
  { path: "cv", component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
