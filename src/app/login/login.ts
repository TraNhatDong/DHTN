import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {username = '';
  password = '';
  rememberMe = false;
  showPassword = false;

  onLogin(): void {
    if (!this.username.trim() || !this.password) {
      return;
    }

    // Tích hợp API đăng nhập tại đây.
    console.log('Login submitted');
  }

  onLoginWithOtp(): void {
    // Tích hợp luồng đăng nhập OTP tại đây.
  }
}