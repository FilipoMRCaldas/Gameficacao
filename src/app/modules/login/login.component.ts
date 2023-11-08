import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  registration: string = '';
  password: string = '';

  login() {
    if (this.registration === 'usuario' && this.password === 'senha') {
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
}
