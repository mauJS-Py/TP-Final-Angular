import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LogoAmMarmolSection } from '../logo-am-marmol-section/logo-am-marmol-section';

interface contact {
  name: string,
  surname: string,
  phone: string,
  email: string,
  text: string,
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, LogoAmMarmolSection],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  mensajes_de_contacto : contact[] = []
  formularioIncorrecto = false;
  formErrorMessage = false;
  
  contactarse(form: NgForm) {
    if (form.valid) {
        if (this.formularioIncorrecto) {
        this.formularioIncorrecto = !this.formularioIncorrecto
        }
        alert('Mensaje enviado de ' + this.form_state_contact.email)
        this.mensajes_de_contacto.push(
          {
            name: this.form_state_contact.name,
            surname: this.form_state_contact.surname,
            phone: this.form_state_contact.phone,
            email: this.form_state_contact.email,
            text: this.form_state_contact.text,
          }
        )
        this.form_state_contact.name = ''
        this.form_state_contact.surname = ''
        this.form_state_contact.phone = ''
        this.form_state_contact.email = ''
        this.form_state_contact.text = ''

        form.reset()
        console.log('MENSAJES DE CONTACTO', this.mensajes_de_contacto)
    } else {
      this.formErrorMessage = true;
      if (!this.formularioIncorrecto) {
        this.formularioIncorrecto = !this.formularioIncorrecto
      }
      form.reset()
    }
  }

  ocultarMensajeError() {
    if (this.formErrorMessage) {
      this.formErrorMessage = false;
    }
  }

  form_state_contact = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    text: '',
  }
}
