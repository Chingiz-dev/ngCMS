import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: UntypedFormGroup;

  constructor(private router: Router, private userService: UserService) {}

  private validateAreEqual(fieldControl: UntypedFormControl) {
    return fieldControl.value === this.signupForm.get('password')?.value
      ? null
      : {
          NotEqual: true,
        };
  }

  submitSignup() {
    this.userService.addUser(this.signupForm.value).subscribe({
      next: () => this.router.navigate(['guest/login']),
      error: (err) => console.log(err.message),
    });
  }

  ngOnInit(): void {
    this.signupForm = new UntypedFormGroup({
      firstName: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ]),
    });

    this.signupForm.addControl(
      'confirm',
      new UntypedFormControl('', [
        Validators.required,
        this.validateAreEqual.bind(this),
      ])
    );
  }
}
