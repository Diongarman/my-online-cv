import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectsComponent } from "./components/projects/projects.component";
import { CvComponent } from "./components/cv/cv.component";

import { ProjectDetailsComponent } from "./components/project-details/project-details.component";

const routes: Routes = [
  { path: "", component: ProjectsComponent },
  { path: "cv", component: CvComponent },
  { path: "project/:projectId", component: ProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
