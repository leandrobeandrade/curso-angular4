import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {
  parametro: number;
  oferta: Oferta[];
  _oferta: any;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    this.parametro = this.route.snapshot.params['id']; // pega os os parametros da url
    console.log(this.parametro);

    this.ofertasService.getOfertaPorId(this.parametro).subscribe((oferta: Oferta[])=> {
      console.log(oferta[0]);
      this._oferta = oferta[0];
      this.oferta = this._oferta;
    })
  }

}
