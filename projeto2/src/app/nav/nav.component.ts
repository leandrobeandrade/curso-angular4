import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [OfertasService]
})
export class NavComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }
 
  public pesquisa(pesquisa: string): void {
    this.ofertas = this.ofertasService.pesquisaOferta(pesquisa);

    this.ofertas.subscribe((valor: Oferta[]) => console.log(valor))
  }

}
