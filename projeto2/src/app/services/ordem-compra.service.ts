import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido-model';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from '../app.api';

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClientModule) {}

    public efetivaCompra(pedido: Pedido): Observable<any> {
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');
        return

        /* httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

        return this.http.post(`${URL_API}/pedidos`, JSON.stringify(pedido), 
            new HttpRequest({ headers: headers, '':''})
        ).map((resposta: Response) => console.log); */
    }
}