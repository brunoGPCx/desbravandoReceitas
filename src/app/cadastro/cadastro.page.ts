import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public dadosIns = ["null","null","null","null"];

  public dados = ["null","null","null","null"];


  public chamadados() {

    console.log(this.dados);

  }

}
