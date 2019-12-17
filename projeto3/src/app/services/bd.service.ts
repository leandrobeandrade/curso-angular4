import { Injectable } from '@angular/core'
import * as firebase from 'firebase'
import { Progresso } from './progresso.service'

@Injectable()
export class Bd {

    constructor(private progresso: Progresso) {}

    publicar(publicacao: any): void {
        console.log(publicacao)
        
        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
        .push({ titulo: publicacao.titulo })
        .then((resposta) => {
            let nomeImagem = resposta.key                   // evita a duplicação das imagens

            firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)                 // cria a pasta no banco
            .put(publicacao.imagem)                         // insere a imagem no banco
            .on(firebase.storage.TaskEvent.STATE_CHANGED,   // escuta eventos no storage
                (snapshot: any) => {                        // captura os eventos
                    this.progresso.status = 'andamento'
                    this.progresso.estado = snapshot
                    //console.log('SNAPSHOT', snapshot)
                },   
                error => {
                    this.progresso.status = 'erro'
                    //console.log(error)
                },
                () => {
                    this.progresso.status = 'concluido'
                    //console.log('Upload Completo!')
                }
            )
        })
    }

    consultaPublicacoes(emailUser: string): Promise<any> {

        return new Promise((resolve, reject) => {

            // consulta publicações (database)
            firebase.database().ref(`publicacoes/${btoa(emailUser)}`)
            .orderByKey()
            .once('value')
            .then((snapshot: any) => {
                console.log(snapshot.val())

                let publicacoes: any[] = []

                snapshot.forEach((childSnapshot: any) => {
                    let publicacao = childSnapshot.val()
                    publicacao.key = childSnapshot.key

                    publicacoes.push(publicacao)
                })
                console.log(publicacoes)
                return publicacoes.reverse()
            })
            .then((publicacoes: any) => {
                publicacoes.forEach(_publicacao => {
                    // consulta a url da imagem (storage)
                    firebase.storage().ref()
                    .child(`imagens/${_publicacao.key}`)
                    .getDownloadURL()
                    .then((url: string) => {
                        //console.log(url)
                        _publicacao.url_imagem = url

                        // consulta o nome do usuario
                        firebase.database().ref(`usuario_detalhes/${btoa(emailUser)}`)
                        .once('value')
                        .then((snapshot: any) => {
                            _publicacao.nome_usuario =  snapshot.val().nome_usuario
                        })
                    })
                })
                resolve(publicacoes)
            })
        })
    }

    // Deixa as publicaçãoes em uma forma não sequencial como do banco 
    /*consultaPublicacoes(emailUser: string): Promise<any> {

        return new Promise((resolve, reject) => {

            // consulta publicações (database)
            firebase.database().ref(`publicacoes/${btoa(emailUser)}`)
            .orderByKey()
            .once('value')
            .then((snapshot: any) => {
                let teste = snapshot.val()
                //console.log(teste)

                let publicacoes: any[] = []

                snapshot.forEach((childSnapshot: any) => {
                    let publicacao = childSnapshot.val()

                    // consulta a url da imagem (storage)
                    firebase.storage().ref()
                    .child(`imagens/${childSnapshot.key}`)
                    .getDownloadURL()
                    .then((url: string) => {
                        //console.log(url)
                        publicacao.url_imagem = url

                        // consulta o nome do usuario
                        firebase.database().ref(`usuario_detalhes/${btoa(emailUser)}`)
                        .once('value')
                        .then((snapshot: any) => {
                            publicacao.nome_usuario =  snapshot.val().nome_usuario
                            
                            publicacoes.push(publicacao)
                        })
                    })
                })
                resolve(publicacoes)
            })
        })
    } */
}