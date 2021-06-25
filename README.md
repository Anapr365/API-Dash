<h1 align="center">Welcome to server 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/server" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/server.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.
svg" />
  </a>
</p>

# API Dash.

Criando um sistema de verificação de disponibilidade de domínios com Dash DPNS 
utilizando Node.js

 ## Visão Geral

A arquitetura cliente servidor é uma arquitetura de aplicação distribuída, ou 
seja, na rede existem os fornecedores de recursos ou serviços a rede, que são 
chamados de servidores, e existem os requerentes dos recursos ou serviços, 
denominados clientes.Existe um processo que é responsável pela manutenção da 
informação (servidores) e outro responsável pela obtenção dos dados (os clientes).

### Criando as pasta de acesso 
Como e uma API simples não vou esta dividindo em subpasta pois vai ter so um end 
point Definição de ponto final.

Um endpoint de um web service é a URL onde seu serviço pode ser acessado por uma 
aplicação cliente.

Uma API é um conjunto de rotinas, protocolos e ferramentas para construir 
aplicações.
 
 No projeto, eu irei criar uma pasta chamada Cliente e outra chamada Server onde 
ira criar minha aplicação criando outra parta src.

### Acesse a pasta do projeto no terminal/cmd
 Vá para a pasta server
  cd  server

## Install

```sh
yarn install
```
 ```sh
yarn add express dash cors
```

 ```sh
yarn add esm
```

 O seu package.json está faltando um script. Deve ser algo como

  ```sh
  "scripts": {
    "start": "node -r esm ./src/index.js"
  }
  ```

## Usage

No diretório do projeto, você pode executar:

```sh
yarn  start
```

🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

[Node.js](https://nodejs.org/en/)

[Yarn](https://classic.yarnpkg.com/en/)


### O servidor iniciará na porta:3001 - acesse <http://localhost:3001/check?
domain=>

 ## Leia mais 

Video Aula DashDev - Academy

![DashDev - Academy](https://dashdev.academy/tutorials)

 [Dash Platform](https://dashplatform.readme.io/docs/explanation-dapi)


## Author

👤 **Ana Paula Rosa**

* Github: [@Anapr365](https://github.com/Anapr365)

## Show your support

Give a ⭐️ if this project helped you!
 
