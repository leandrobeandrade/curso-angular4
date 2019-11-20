import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
  public id: number;
  public ondeFica: string = '';

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit() {
    console.log('Parametro => ', this.route.snapshot.parent.params['id']);
    this.id = this.route.snapshot.parent.params['id'];

    this.ofertaService.getOndeFicaOfertaPorId(this.id).subscribe((retorno: string) => {
      console.log(retorno[0])
      this.ondeFica = retorno[0]
    }) 
  }

}
