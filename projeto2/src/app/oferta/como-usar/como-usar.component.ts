import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {
  public id: number;
  public comoUsar: string = '';

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit() {
    console.log('Parametro => ', this.route.snapshot.parent.params['id']);
    this.id = this.route.snapshot.parent.params['id'];

    this.ofertaService.getComoUsarOfertaPorId(this.id).subscribe((retorno: string) => {
      console.log(retorno[0])
      this.comoUsar = retorno[0]
    }) 
  }

}
