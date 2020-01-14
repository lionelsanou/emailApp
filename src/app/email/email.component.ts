import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  emailForm: FormGroup;
  constructor(public dataService: DataService) { }
  get email() {
    return this.emailForm.get('email');
  }

  get f() { return this.emailForm.controls; }

  saveEmail() {
    if (this.emailForm.invalid) {
      console.log("The Form is invalid, Please provide the correct input data");
      return;
    } else {
      console.log("The form s valid");
      this.dataService.addEmail(this.emailForm.get('email').value);
      //Let's reset the form 
      this.emailForm.reset();
    }
  }
  deleteEmail(index) {
    console.log("Removing email at index " + index);
    this.dataService.deleteEmail(index);
  }

  ngOnInit() {
    //Let's initialize the form object
    this.emailForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
    });
  }

}
