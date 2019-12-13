import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public messageErrors: string;
  public errors: boolean = false;

  @Output() exibirPainel: EventEmitter<string> = new EventEmitter<string>();

  public formulario:FormGroup =  new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

  exibirCadastro() {
    this.exibirPainel.emit('cadastro')
  }

  autenticarUsuario() {
    console.log(this.formulario)
    if(this.formulario.invalid) {
      this.errors = true
      this.messageErrors = 'Preencha todos os campos!'
    }
    this.auth.autenticaUsuario(this.formulario.value.email, this.formulario.value.senha)
    .catch((error: Error) => console.log(error))
  }

}
