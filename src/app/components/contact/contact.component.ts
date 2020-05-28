import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      emailAddress: new FormControl("", [
        Validators.required,
        Validators.email,
      ]),

      body: new FormControl("", [Validators.required]),

      subject: new FormControl("", [Validators.required]),
    });
  }

  get fval() {
    return this.contactForm.controls;
  }

  sendEmail(cdata) {
    return this.http
      .post<any>("https://node-email-webservice.herokuapp.com/email", cdata, {
        headers: new HttpHeaders({
          "Content-Type": "application/json; charset=utf-8",
        }),
      })
      .pipe((resData) => resData);
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    this.contactForm.reset();
    this.submitted = false;

    //Submit post to email routing API here
    console.warn("Your order has been submitted", customerData);

    this.sendEmail(customerData).subscribe((data) => console.log(data));
    //this.router.navigate(["/"]);
  }

  get email() {
    return this.contactForm.get("emailAddress");
  }
}

/*


RESOURCES
https://jsonworld.com/demo/angular-8-reative-form-validation-example-and-tutorial
https://angular.io/guide/form-validation#reactive-form-validation
https://angular.io/start/start-forms


watch this one day lol:
https://www.youtube.com/watch?v=ZQroyD2rLzY&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=22

*/
