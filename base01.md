## App.module

* **BrowserModule:** Prepara a aplicação para rodar no browser.
* **FormsModule:** Utilizado para formulários e a diretiva `[(ngmodel)]="teste"`.
* **HttpModule:** Contém o objeto Http para fazer requisições Ajax.

* **declarations[]:** Componentes, Diretivas e Pipes utilizados neste módulo (raíz no caso).
* **imports[]:** Outros Módulos utilizados neste módulo ou em algum componente declarado neste módulo.
* **providers[]:** Serviços e guardas de rotas vão neste metadado.
* **bootstrap[]:** Qual componente deve ser instanciado quando inicia-se a aplicação.

## Html

* **Property binding:** [] + atributo Html. 

      [class], [href], [img]

* **Variáveis locais:** #nome-var.

      <select #selecionado>
       
* **$(event.target):** Pode ser trocado por uma variável.

      <input #campo (blur)="salvar(campo.value)">

## Event-binding

* Utilizado para ligar eventos javascript no Html. 

      <button (click)="mostrarAlerta()">Mostrar</button>

## Input Properties

**Componente (pai) que passa um valor:**

* **HTML:** 

      <app-comp-filho [var-filha]="var-pai"></app-comp-filho>
      
* **TS:** 

      var-pai: any = 'O que quer ser passado';

**Componente (filho) que recebe um valor:**

* **HTML:**
      
      <p>{{ var-filha }}<p>
      
* **TS:** 

      @Input() var-filha: any;       // importar do @angular/core

> **OBS: Quando o valor passado for hard-coded não precisa das chaves na variável filha.**

## Output Properties

**Componente que emite um valor:**

* **HTML:**

      <button (click)="incrementa()">+</button>
      <input [value]="valor" type="text" readonly #campoInput>

* **TS:** 

      @Output mudarValor = new EventEmitter();	// importar do @angular/core
      valor: number = 0;

      incrementa() {
        this.valor++;
        this.mudarValor.emit({
          novoValor: this.valor
        });
      }
      
**Componente que recebe o valor:**

* **Html:**

      <app-comp-passa-valor [valor]="valorInicial" (mudarValor)="mudandoValores($event)">
      </app-comp-passa-valor>
      
* **TS:**

      valorInicial: number = 0;
      
      mudandoValor(evento) {
        console.log(evento.novoValor);
      }

## ViewChild

**HTML:** 

    <input #varInput (blur)="valor()">

**TS:** 

    @ViewChild('varInput') campoValorInput: HTMLElement;

    valor() {
        console.log(this.campoValorInput);          		// mostra o valor no campo input
    }

## Importar Bootstrap

    @import "~bootstrap/dist/css/bootstrap.min.css";    // styles.css na raíz da aplicação
    
    "styles": [
      'styles.css', 
      '../node_modules/bootstrap/dist/css/bootstrap.min.css'  // importa no arquivo angular-cli.json
    ]
    
## Criar projeto com Scss:

    ng new My_New_Project --style=scss

## Mudar o tipo de Css depois do projeto criado:

    ng set defaults.styleExt scss

## Gerar arquivos sem o spec.ts:

    ng g c teste --spec=false
