# PlayWithoutPay
API do projeto PlayWithoutPay

## Tarefas
- [ ] CRUD de Usuários
- [ ] CRUD de Favoritar
- [ ] Dashboard

## Documentação da API

### Endpoint
- [Cadastrar Usuário](#cadastrar-usuário)
- [Informações do Usuário](#acessar-perfil)
- [Apagar Usuário](#apagar-usuário)
- [Atualizar Usuário](#atualizar-usuário)
<!-- Dúvida quanto ao login -->

### Cadastrar Usuário 
`POST` /profile

Cadastra um novo usuário com os dados enviados no corpo da requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|login|string|✅|Um login para o usuário|
|password|string|✅|Uma senha para o usuário|

```js
{
    "login": "johnmarston",
    "password": "johnmarston123"
}
```

#### Exemplo de Resposta

```js
[
    {
        "id": 1,
        "login": "johnmarston",
        "password": "johnmarston123"
    }
]
```

#### Códigos de Status

|código|descrição|
|------|---------|
|201|Usuário cadastrado com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
---

### Acessar Perfil
`GET` /profile/`{id}`

Retorna as informações do perfil com o `id` informado com o parâmetro da path

#### Exemplo de Resposta <!-- (dúvida quanto ao path) -->

```js
// requisição para /profile/1
{
    "id": 1,
    "login": "johnmarston",
    "password": "johnmarston123"
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Os dados do usuário foram retornados com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe usuário com o `id` informado| <!-- (dúvida quanto ao path) -->
---

### Apagar Usuário

`DELETE` /profile/`{id}`

Apaga o usuário como o `id` especificado no parâmetro de path

|código|descrição|
|------|---------|
|204|Usuário foi apagado com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe usuário com o `id` informado|
---

### Atualizar Usuário

`PUT` /profile/`{id}`

Edita os dados do usuário especificado no `id`, utilizando as informações enviadas no corpo da requisição.

### Corpo de Requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|login|string|✅|Um login para o usuário|
|password|string|✅|Uma senha para o usuário|

```js
{
    "login": "johnmarston",
    "password": "johnmarston1234"
}
```

#### Exemplo de Resposta

```js
[
    {
        "id": 1,
        "login": "johnmarston",
        "password": "johnmarston1234"
    }
]
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Usuário alterado com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe usuário com o `id` informado|
---
