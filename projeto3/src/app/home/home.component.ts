import { Component, OnInit, ViewChild} from '@angular/core';
import { Auth } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('publicacoes') publicacoes: any;

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

  sair() {
    this.auth.sair()
  }

  atualizarTimeLine(): void {
    this.publicacoes.atualizarTimeLine()
  }

}
