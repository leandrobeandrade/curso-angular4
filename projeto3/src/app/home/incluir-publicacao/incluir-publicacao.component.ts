import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Bd } from 'src/app/services/bd.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.scss']
})
export class IncluirPublicacaoComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })

  public email: string;

  constructor(private bd:Bd) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  publicar() {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo
    })
  }

}
