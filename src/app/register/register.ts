import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LogoAmMarmolSection } from '../logo-am-marmol-section/logo-am-marmol-section';
import { from } from 'rxjs';

interface register {
  id: number,
  username: string,
  name: string,
  surname: string,
  phone: string,
  email: string,
  password: string,
  passwordrepeat: string
}

@Component({
  selector: 'app-register',
  imports: [FormsModule, LogoAmMarmolSection],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registros : register[] = []
  hidden_pass: boolean = true;
  hidden_pass_repeat: boolean = true;
  formularioIncorrecto = false;

  repeated_pass: boolean = false;

  formErrorMessage = false;

  hiddenPass() {
    this.hidden_pass = !this.hidden_pass;
  }

  hiddenPassRepeat() {
    this.hidden_pass_repeat = !this.hidden_pass_repeat;
  }


  registrarse(form: NgForm) {
    if (form.valid) {
      if (this.formularioIncorrecto) {
        this.formularioIncorrecto = !this.formularioIncorrecto
      }
      alert('Registro exitoso de ' + this.form_state_register.username)
      this.registros.push(
        {
          id: this.registros.length + 1,
          username: this.form_state_register.username,
          name: this.form_state_register.name,
          surname: this.form_state_register.surname,
          phone: this.form_state_register.phone,
          email: this.form_state_register.email,
          password: this.form_state_register.password,
          passwordrepeat: this.form_state_register.passwordrepeat
        }
      )
      this.form_state_register.username = ''
      this.form_state_register.name = ''
      this.form_state_register.surname = ''
      this.form_state_register.phone = ''
      this.form_state_register.email = ''
      this.form_state_register.password = ''
      this.form_state_register.passwordrepeat = ''

      form.reset()
      console.log('USUARIOS REGISTRADOS', this.registros)
    } else {
      this.formErrorMessage = true;
      if (!this.formularioIncorrecto) {
        this.formularioIncorrecto = !this.formularioIncorrecto
      }
      form.reset()
    }
  }

  repetirPassword() {
    if (this.form_state_register.password === this.form_state_register.passwordrepeat) {
      this.repeated_pass = true;
    } else {
      this.repeated_pass = false;
    }
  }

  ocultarMensajeError() {
    if (this.formErrorMessage) {
      this.formErrorMessage = false;
    }
  }

  form_state_register = {
    username: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    passwordrepeat: ''
  }
}
