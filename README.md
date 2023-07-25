<h1>Users API github</h1>

## Sobre o projeto

Esta aplicação consome a API do github. 

Criei este projeto apenas para estudo.
Procurei manter o código organizado e escalável.

Nela eu adicionei tratamentos para listagem de todos os usuários, utilizando um serviço para atender tal requisito.
Criei uma navegação que permite que a paginação no resultado dos dados.

Além disso a aplicação permite verificar detalhes e os repositórios de determinado usuário.

## Endpoints

- /users 
- /users/:username/details 
- /users/:username/repos 

## Instruções para executar a aplicação

1. Instale as dependências do projeto

```
npm run install or yarn install
```
2. Inicie o server

```
npm run start or yarn start
```
