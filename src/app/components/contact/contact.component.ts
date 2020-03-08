import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      emailAddress: new FormControl("", [
        Validators.required,
        Validators.email
      ]),

      body: new FormControl("", [Validators.required])
    });
  }

  get fval() {
    return this.contactForm.controls;
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    this.contactForm.reset();
    this.submitted = false;
    console.warn("Your order has been submitted", customerData);
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

*/
