import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LogoAmMarmolSection } from '../logo-am-marmol-section/logo-am-marmol-section';

interface intentoSesion {
  user: string,
  password: string
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, LogoAmMarmolSection],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  intento_sesion : intentoSesion[] = []
  hidden_pass: boolean = true;
  pass_recuperada: boolean = false;
  formularioIncorrecto = false;
  loggedUser: string = '';

  formErrorMessage = false;

  hiddenPass() {
    this.hidden_pass = !this.hidden_pass;
  }

  intentarSesion(form: NgForm) {
    if (form.valid) {
      if (this.formularioIncorrecto) {
        this.formularioIncorrecto = !this.formularioIncorrecto
      }
      this.intento_sesion.push(
        {
          user: this.form_state_login.user,
          password: this.form_state_login.password
        }
      )

      this.loggedUser = this.form_state_login.user;

      this.form_state_login.user = ''
      this.form_state_login.password = ''

      alert(this.loggedUser + " ha iniciado sesión")
      form.reset()
      console.log("SESIONES", this.intento_sesion)
    } else {
      this.formErrorMessage = true;
      if (!this.formularioIncorrecto) {
        this.formularioIncorrecto = !this.formularioIncorrecto
      }
      form.reset()
    }
  }

  recuperarPass() {
    this.pass_recuperada = !this.pass_recuperada;
  }

  ocultarMensajeError() {
    if (this.formErrorMessage) {
      this.formErrorMessage = false;
    }
  }

  form_state_login = {
    user: '',
    password: ''
  }
}
