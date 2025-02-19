import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
  
      if (username === 'admin' && password === 'admin123') {
        sessionStorage.setItem('userRole', 'Admin'); // Store user role
        this.router.navigate(['/dashboard']);
      } else if (username === 'sbiuser' && password === 'sbi123') {
        sessionStorage.setItem('userRole', 'SBI'); // Store SBI user role
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid username or password!';
      }
    }
  }  
  
}
