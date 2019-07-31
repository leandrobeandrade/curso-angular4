## Criar um pipe pesrsonalizado: 

   * **Gera o pipe:**
      
          ng g p inverseText
         
   * **Arquivo gerado:**
   
          import { Pipe, PipeTransform } from '@angular/core';

          @Pipe({name: 'inverseText'})

          export class inverseText implements PipeTransform {
  
            transform(value: string): string {
              let newStr: string = "";
              for (var i = value.length - 1; i >= 0; i--) {
                newStr += value.charAt(i);
              }
            return newStr;
            }
          }
          
   * **Importar e declarar no módulo:**
   
          import { inverseText } from './inverseText.pipe';
   
          declarations: [ inverseText ]
          
   * **Utilizar no Html:**
   
          <p> {{ texto | inverseText }} </p>


## Hostlistener

   * **Importar do core:**
   
         import { Component, OnInit, HostListener } from '@angular/core';
         
   * **Modo de uso:**
   
         @HostListener('document:mousemove', ['$event'])
         onMouseMove() {
            this.Alerta();
         }
         
         Alerta() {
            alert('Utilizando HostListener');
         }
