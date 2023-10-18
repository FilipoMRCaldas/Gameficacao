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
    // Implemente a lógica de autenticação aqui, por exemplo, verificar as credenciais em um servidor.
    if (this.registration === 'usuario' && this.password === 'senha') {
      // Login bem-sucedido, você pode redirecionar o usuário para a próxima página.
      // Para navegação, você pode usar o serviço de roteamento do Angular.
      // Exemplo: import { Router } from '@angular/router'; e usar o Router.navigate().
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
}
