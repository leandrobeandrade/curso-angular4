import { Component, OnInit } from '@angular/core';
import { Bd } from 'src/app/services/bd.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.scss']
})
export class PublicacoesComponent implements OnInit {
  public email: string;
  public publicacoes: any;

  constructor(private bd: Bd) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      this.email = user.email;
      console.log(this.email)
    })

    setTimeout(() => {
      this.atualizarTimeLine()
    }, 2000) 
  }

  atualizarTimeLine(): void {
    this.bd.consultaPublicacoes(this.email)
    .then((publicacoes: any) => {
      this.publicacoes = publicacoes;
    })
  }
}
