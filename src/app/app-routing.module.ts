import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectsComponent } from "./components/projects/projects.component";
import { CvComponent } from "./components/cv/cv.component";

import { ProjectDetailsComponent } from "./components/project-details/project-details.component";
import { ApiProjectDetailsComponent } from "./components/api-project-details/api-project-details.component";

const routes: Routes = [
  { path: "", component: ProjectsComponent },
  { path: "cv", component: CvComponent },
  { path: "project/:projectId", component: ProjectDetailsComponent },
  { path: "api-project/:projectId", component: ApiProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
