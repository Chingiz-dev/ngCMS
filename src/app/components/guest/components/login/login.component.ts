import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoginFailed: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  submitLogin() {
    this.userService.getUser(this.loginForm.value.email).subscribe({
      next: (user: User[]) => {
        if (this.loginForm.value.password === user[0].password) {
          this.authService.login(user[0]);
          this.router.navigate(['admin']);
        } else {
          this.isLoginFailed = true;
          this.loginForm.reset();
        }
      },
      error: () => {
        this.isLoginFailed = true;
        this.loginForm.reset();
      }
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ]),
    });
  }
}
