import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Bd } from 'src/app/services/bd.service';
import * as firebase from 'firebase';
import { Progresso } from 'src/app/services/progresso.service';

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
  public imagem: any;

  public progressoPublicacao: string = 'pendente';
  public porcentagemUpload: number = 0;

  public intervalo: any;
  public progressoBarra: number = 0;

  @Output() public atualizarTimeLine: EventEmitter<any> = new EventEmitter<any>()

  constructor(private bd: Bd, private progresso: Progresso ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  publicar() {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0]
    })

    this.intervalo = setInterval(() => {
      // console.log(this.progresso.status)

      if(this.progresso.status == 'andamento') {
        this.progressoPublicacao = 'andamento'
        this.porcentagemUpload = Math.round(this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes) * 100
        this.progressoBarra = this.porcentagemUpload
      }
      if(this.progresso.status == 'concluido') {
        this.progressoPublicacao = 'concluido'
        this.progressoBarra = 0 
        this.statusConcluido()

        //emite um evento do componente parent (home)
        this.atualizarTimeLine.emit()
      }
    }, 1500)
  }

  statusConcluido() {
    clearTimeout(this.intervalo)
  }

  imagemUpload(evento: Event) {
    this.imagem = (<HTMLInputElement>evento.target).files
    console.log(this.imagem)
  }

}
