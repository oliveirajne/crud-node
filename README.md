# crud-node

## Table of Contents

- [crud-node](#crud-node)
  - [Table of Contents](#table-of-contents)
  - [Descrição](#descrição)
  - [Instalação](#instalação)
  - [Desenvlvimento](#desenvolvimento)
  - [Bibliotecas](#bibliotecas)
  - [Endpoints](#endpoints)
  - [Debug](#debug)

## Descrição
- CRUD básico em Node JS com MySql
- Cria novo usuário com nome, email e senha
- Lista todos os usuários
- Atualiza usuário pelo id
- Deleta usuário pelo id
- Tratamento de erros básicos (500 e 404)

## Instalação

1. Baixar o repositório para a máquina local
2. Digitar `npm install` para instalar as dependências do projeto
3. Criar um banco de dados MySql e atualizar as credenciais no arquivo knexfile.js
4. Digitar `npm start` para iniciar o servidor

## Desenvolvimento
- Sistema operacional: Ubuntu
- Editor: Visual Studio Code
- Testes: Postman

## Bibliotecas
- cors
- express
- knex
- mysql
- nodemon

## Endpoints

- **GET** /users/index
GET simples para listar os usuários, sem parâmetros.
Retorno:
```json=
  statusCode: 200
```
- **POST** /users/create

Entrada:
```json=
{
  "name": "nometeste",
  "email": "nome@nome.com",
  "password": "teste@teste"
}
```

Retorno:
```json=
  statusCode: 201
```

- **PUT** /users/update/:id 
(:id = id do user a ser atualizado)
Entrada:
```json=
{
  "name": "Fulano",
  "email": "fulano@nome.com",
  "password": "passwordfulano"
}
```

Retorno:
```json=
  statusCode: 200
```
- **DELETE** /users/delete/:id
(:id = id do user a ser deletado)
Retorno:
```json=
  statusCode: 200
```
## Debug

Após iniciar o servidor com `npm start`, vá na aba lateral DEBUG do VSCode, clicar no botao "start debugging" (o símbolo play) e escolher o arquivo Attach Program. O arquivo tem as configurações necessárias para o debug do código no VSCode. Aí é só colocar os breakpoints pelo código. :)