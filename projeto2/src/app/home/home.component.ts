import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // chamada direta
    /* this.ofertas = this.ofertasService.getOfertas();
    console.log(this.ofertas); */

    // chamada com Promisse
    this.ofertasService.getOfertas()
    .then((ofertas: Oferta[]) => this.ofertas = ofertas) // resolve
        //,(param: any) => console.log(param)           // reject ou no catch()
    .catch((param: any) => console.log(param)
    )
  }

}
