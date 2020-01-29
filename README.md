<h1 align="center">
	<img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
		Desafio 01
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-01/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-01?style=social">
  </a>
</p>

## Sobre o desafio

Criar uma aplicação para armazenar projetos e suas tarefas utilizando [Express](https://expressjs.com/pt-br/).

## Como foram feitas as rotas

- A primeira rota foi a de `POST /projects` que recebe o `id` e `title`, cadastrar um novo projeto dentro de um array no formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`;
- A segunda rota foi a `GET /projects` que lista todos os projetos e suas tarefas;
- Terceira Rota: `PUT /projects/:id`, onde ela altera apenas o título(title) do projeto dando referencia ao `id` nos parâmetros da rota;
- Quarta Rota: `DELETE /projects/:id`, a rota deleta o projeto com o `id` como parâmero da rota;
- Quinta Rota: `POST /projects/:id/tasks`: Ela recebe um campo `title` e armazena em uma nova tarefa no array(tasks) de um projeto específico, onde ele é selecionado pelo `id` presente nos parâmetros da rota;

## Middlewares

- Foi criado um middleware que recebe o `id` do projeto nos parâmetos da URL e verifica se aquele projeto que você quer criar já existe;
- Foi criado tbm outromidlleware global que é chamado em todas as requisições e imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação.

## packages

- nodemon (yarn add nodemon -D) Serve para atualizar sem precisar reiniciar o (node index.js), o mesmo atualiza uma vez que você o executa;
- yarn init -y ( para iniciar um projeto NodeJs);

## Software

- Insomnia: para testar as rotas, sabemos que o browser só mostra requisições `GET`, então para testarmos as demais utilizei o insomnia. Para quem tem um sistema operacional de 32 bits, existe outro software para que você possa fazer as mesmas requisições: [Postman](https://www.getpostman.com/)

