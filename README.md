# WebFullStackChallenge

### Esse projeto foi feito com as seguintes Tecnologias:
* [Angular CLI](https://github.com/angular/angular-cli): version 14.2.2.
* [NodeJs](https://nodejs.org/pt-br/): version v16.16.0
* [Mysql](https://dev.mysql.com/downloads/installer/): version 8.0.30

#### Framworks de apoio utilizados:
* Express;
* Cors;
* nodemon;
* Dotenv;
* BodyParser;

## Ativando os servidores (Development server)

### Back Server
Digite no terminal (No diretório "Web-FullStack-Challenge") `npm start` para rodar um servidor dev. O servidor irá rodar em `http://localhost:3000/`. 

A aplicação irá reiniciar automaticamente se você modificar o código fonte.


### Front Server
Digite no terminal (No diretório "Front-End/Web-FullStack-Challenge-Front") `ng serve` para rodar um servidor dev. Navegue até `http://localhost:4200/` para conseguir utilizar a aplicação.

A aplicação irá reiniciar automaticamente se você modificar o código fonte.

## Rodando a aplicação
Devido ao tempo do desafio, não foi possível fazer uma tabela no Front com todos os dados. Porém é possível ver todos os resultados através do `inspecionar` no Google Chrome.



### Obter todos os dados
Retorna todos os dados cadastrados dentro de umA Array de JSON, mostrado no console do Navegador.



### Obter Somente um Dado
Retorna um dado específico cadastrado dentro de um JSON, mostrado no console do Navegador.

Necessário informar o `id` diretamente no código dentro de `app.component.ts` dentro da função `obterSomenteUm()`

~~~javascript
 obterSomenteUm(){
    this.dadosService.obterPorId("COLOCAR O ID AQUI")
      .then(dados => console.log(dados))
      .catch(error => console.log(error))
  }
~~~



### Adicionar dado
Adiciona um dado através de um JSON, mostrado uma mensagem de `sucesso` ou `erro`, mostrado no console do Navegador.

Necessário atribuir as informações no Objeto `const dado: IDado` no seguintes atributos: ` category, color, partNumber` diretamente no código dentro de `app.component.ts` dentro da função `adicionarDado()`

~~~javascript
adicionarDado(){
    const dado: IDados = {
      category: "CATEGORIA TESTE",
      color: "COR TESTE",
      partNumber: 00001
    }
  }
~~~


### Deletar dado
Deleta um dado específico, mostrado uma mensagem de `sucesso` ou `erro`, mostrado no console do Navegador.

Necessário informar o `id` diretamente no código dentro de `app.component.ts` dentro da função `remover()`

~~~javascript
remover(){
    this.dadosService.delete("COLOCAR O ID AQUI")
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }
~~~
