import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProjectItemComponent } from "./components/project-item/project-item.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CvComponent } from "./components/cv/cv.component";
import { WorkExperienceComponent } from "./components/cv/work-experience/work-experience.component";
import { WorkExpItemComponent } from "./components/cv/work-exp-item/work-exp-item.component";
import { EducationComponent } from "./components/education/education.component";
import { ProjectDetailsComponent } from "./components/project-details/project-details.component";
import { ApiProjectDetailsComponent } from "./components/api-project-details/api-project-details.component";
import { ContactComponent } from "./components/contact/contact.component";

//animation
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavbarComponent,
    ProjectItemComponent,
    CvComponent,
    WorkExperienceComponent,
    WorkExpItemComponent,
    EducationComponent,
    ProjectDetailsComponent,
    ApiProjectDetailsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
