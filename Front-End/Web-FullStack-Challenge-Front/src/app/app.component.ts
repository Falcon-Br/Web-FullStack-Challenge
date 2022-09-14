import { Component } from '@angular/core';
import { DadosService } from './dados.service';
import { IDados } from './IDados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web-FullStack-Challenge-Front';

  constructor(private dadosService: DadosService){}

  obterTodosDados(){
    this.dadosService.obterTodos()
      .then(dados => console.log(dados))
      .catch(error => console.log(error))
  }

  obterSomenteUm(){
    this.dadosService.obterPorId(3)
      .then(dados => console.log(dados))
      .catch(error => console.log(error))
  }

  adicionarDado(){
    const dado: IDados = {
      category: "Teste do Front",
      color: "Vermelho Angular",
      partNumber: 78979
    }

    this.dadosService.adicionar(dado)
      .then(dado => console.log("Dado adicionado"))
      .catch(error => console.log(error))
  }

  atualizar(){
    const dado: IDados = {
      id: 1,
      category: "Teste do Front",
      color: "Vermelho Angular",
      partNumber: 78979, 
    }

    this.dadosService.atualizar(dado)
      .then(dado => console.log('Add', dado))
      .catch(error => console.log(error))
  }

  remover(){
    this.dadosService.delete(19)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

}
