import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from '../app.api';

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {}

    public efetivaCompra(pedido: Pedido): Observable<any> {
        // Http Headers
        let httpOptions = {
            headers: new HttpHeaders({
            'Content-Type': 'application/json'
            })
        }

        // Curso
        /* let headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-type', 'application/json'); */

        return this.http.post(`${URL_API}/pedidos`, JSON.stringify(pedido), httpOptions)
    }
}