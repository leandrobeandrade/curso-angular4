import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from '../usuario.model';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  public errors: boolean = false;
  
  @Output() exibirPainel: EventEmitter<string> = new EventEmitter<string>();

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'nome_completo': new FormControl(null, [Validators.required]),
    'nome_usuario': new FormControl(null, [Validators.required]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  constructor(private autenticacao: Auth) { }

  ngOnInit() {
  }

  exibirLogin() {
    this.exibirPainel.emit('login');
  }

  cadastrarUsuario() {
    console.log(this.formulario);

    let usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo, 
      this.formulario.value.nome_usuario, 
      this.formulario.value.senha 
    )

    console.log(usuario)

    if(this.formulario.invalid) {
      this.errors = true;
    } else {
      this.autenticacao.cadastraUsuario(usuario)
      .then(() => this.exibirLogin())
      .catch((error: Error) => console.log(error))
    }

  }
}