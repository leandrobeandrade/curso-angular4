import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]                 // maneira correta de utilizar services
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    /**
     *  maneira errada de utilizar services
     *
        let ofertas: OfertasService = new OfertasService();
        console.log(ofertas.getOfertas())
    */

    let ofertas: Oferta[] = this.ofertasService.getOfertas();
    console.log(ofertas);
   
  }

}
