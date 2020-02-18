import { Component, OnInit, AfterContentInit } from "@angular/core";
import * as AOS from "aos";
import "aos/dist/aos.css";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterContentInit {
  title = "my-online-cv-yo";
  ngOnInit() {
    AOS.init();
    console.log("before");

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

  ngAfterContentInit(): void {
    console.log("after");
  }
}

/*
Resources

AOS
integration - https://stackoverflow.com/questions/47253364/integrate-aos-library-with-angular4-application
AOS glitch fix - https://github.com/michalsnik/aos/issues/429

Bootstrap
Integration - https://stackoverflow.com/questions/45660802/how-to-use-bootstrap-4-with-sass-in-angular
*/
