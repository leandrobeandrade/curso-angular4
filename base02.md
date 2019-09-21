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
         
## Rotas

  Arquivo onde serão setadas as rotas
  * **app.routes.ts**
  
        import { HomeComponent } from './home/homee.component';          // importar componentes
        import { AboutComponent } from './about/about.component';
        
        export const ROUTES: Routes = [
          { path: 'home', component: HomeComponent },
          { path: 'about' } component: AboutComponent }
        ]
        
  
  Arquivo de configuração das rotas
  * **app-routing.module.ts**
  
        import { NgModule } from '@angular/core';
        import { Routes, RouterModule } from '@angular/router';

        const routes: Routes = [];

        @NgModule({
          imports: [RouterModule.forRoot(routes)],      <= Passa as rotas configuradas no arquivo app.routes.ts
           exports: [RouterModule]
        })
        export class AppRoutingModule { }
        
  * **app.module.ts**
  
        import { ROUTES } from './app.routes'
        
        imports: [
          BrowserModule,
          AppRoutingModule,
          RouterModule.forRoot(ROUTES)                  <= Passa as rotas
        ]
        
