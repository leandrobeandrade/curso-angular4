import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../acesso/usuario.model';
import * as firebase from 'firebase';

@Injectable()
export class Auth {
    public tokenId: string;

    constructor(private router: Router) {}

    public cadastraUsuario(usuario: Usuario): Promise<any> {

        // Cria a autenticação
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((response: any) => {
            console.log(response)

            // deleta a senha do atributo senha do objeto usuario
            delete usuario.senha;

            // registra dados complementares do usuario no path email na base64
            firebase.database().ref(`usuario_detalhes/${btoa(usuario.email)}`)
            .set(usuario)
        })
        .catch((erro: Error) => console.log(erro))
    } 
    
    autenticaUsuario(email: string, senha: string): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((resposta: any) => {
            firebase.auth().currentUser.getIdToken()    // pega o token
            .then((idTokenUser) => {
                this.tokenId = idTokenUser;
                localStorage.setItem('tokenId', this.tokenId)
                this.router.navigate(['/home']) 
            })
        })
        .catch((erro: Error) => console.log(erro))
    }

    autenticado(): boolean {

        if(this.tokenId == undefined && localStorage.getItem('tokenId') != null) {
            this.tokenId = localStorage.getItem('tokenId')
        }

        if(this.tokenId == undefined) {
            this.router.navigate(['/'])
        }

        return this.tokenId != undefined;       // espera true
    }

    sair() {
        firebase.auth().signOut()
        .then(() => {
            localStorage.removeItem('tokenId');
            this.tokenId = undefined;
           //this.router.navigate(['/'])    // no caso não precisou como no curso
        })
        
    }
}

/* 
    btoa() => criptografa a string para base 64
    atob() => descriptografa a de base 64 para tipo alfa-númerico
*/

/* 
    getIdToken() => retorna o token em formato jwt - json web token
*/