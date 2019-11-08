# ngModelChange

- TS

      valor: string;
      states = [
        {name: 'Arizona', abbrev: 'AZ'},
        {name: 'California', abbrev: 'CA'},
        {name: 'Colorado', abbrev: 'CO'},
        {name: 'New York', abbrev: 'NY'},
        {name: 'Pennsylvania', abbrev: 'PA'},
      ];

      onModelChange(value: string) {
        this.valor = value;
        console.log(value);
      }

- HTML

      <select [ngModel]="valor" (ngModelChange)="onModelChange($event)">
        <option *ngFor="let state of states">
          {{ state.abbrev }}
        </option>
      </select>

      <p>Form value: {{ valor }}</p>
      
# type

- TS
      users: any;
      showUsers: boolean = false;
  
      constructor() {
        type _objeto = {nome: string, idade: number, telefones: [string, string]};      // object model

        let user: _objeto = {nome: 'Fulano', idade: 30, telefones: ['(19) 99230-0312', '(19) 3016-5809']};
        this.users = user; // para utilizar fora do construtor
      }

      types() {
        this.showUsers = !this.showUsers;
      }
      
- HTML

      <button (click)="types()">Type</button>

      <br>

      <ul *ngIf="showUsers == true">
        <li>Nome: {{ this.users.nome }}</li>
        <li>Idade: {{ this.users.idade }}</li>
        <li>Telefones:</li>
          <ul *ngFor="let tel of users.telefones">
             <li>{{tel}}</li>
          </ul>
      </ul>
