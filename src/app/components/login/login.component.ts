import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;

  username: string = '';
  password: string = '';

  alertMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['products']);
    }
  }

  onSubmit() {
    if (this.username === '' || this.password === '') {
      this.alertMessage = 'Please fill necessary fields!';
      return;
    }

    this.authService.login(this.username, this.password).subscribe(
      (res) => this.router.navigate(['products']),
      (error) => (this.alertMessage = error.message)
    );
  }

  setAlertMessage() {
    this.alertMessage = '';
  }
}
