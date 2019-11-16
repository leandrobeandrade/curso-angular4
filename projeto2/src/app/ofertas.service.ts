import { HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

    // foi para o arquivo banco-de-dados.json
    /*public ofertas: Array<Oferta> = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ] */

    // chamada direta
    /* public getOfertas(): Array<Oferta> {
        return this.ofertas;
    } */

    // chamada com Promisse
    /* public getOfertas(): Promise <Oferta[]> {
        return new Promise((resolve, reject) => {
            let retorno = false;  // retorno da api

            if(!retorno) resolve(this.ofertas);
            else reject({
                codigo_erro: '404',
                msg_erro: 'Produtos não encontrados!'
            })
        })
    } */

    constructor(private http: HttpClient) {}

    // chamada com Promisse mocado
    /* public getOfertas(): Promise<Oferta[]> {
        return this.http.get('./assets/banco-de-dados.json').toPromise()
        .then((resposta: Oferta[]) => resposta)
    } */

    public getOfertas() {
        return this.http.get('http://localhost:3000/ofertas')
    }

    public getOfertasCategoria(categoria: string) {
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
    }
}


/* 

json-server
===========

npm instal json-server -g

no terminal => 
                apontar para o local do arquivo
                executar json-server --watch arquivo.json

roda na porta localhost:3000


*/