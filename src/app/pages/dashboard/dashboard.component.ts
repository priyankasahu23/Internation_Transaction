import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  userRole: string = ''; // To store user role

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    // Get user role from session storage (or another method)
    this.userRole = sessionStorage.getItem('userRole') || '';

    // Apply background based on user type
    if (this.userRole === 'SBI') {
      this.renderer.setStyle(
        document.body,
        'background-image',
        "url('\BOE-DLT-Project\LoginPage\src\assets\Rbi.jpg')"
      );
      this.renderer.setStyle(document.body, 'background-size', 'cover');
      this.renderer.setStyle(document.body, 'background-position', 'center');
    } else {
      this.renderer.setStyle(
        document.body,
        'background-image',
        "url('\BOE-DLT-Project\LoginPage\src\assets\bill_of_exchange.jpg')"
      );
      this.renderer.setStyle(document.body, 'background-size', 'cover');
      this.renderer.setStyle(document.body, 'background-position', 'center');
    }
  }
}
