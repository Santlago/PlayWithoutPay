# PlayWithoutPay
API do projeto PlayWithoutPay

## Tarefas
- [ ] CRUD de Usuários
- [ ] CRUD de Comentários
- [ ] Dashboard

## Documentação da API

### Endpoint

#### Usuário
- [Cadastrar Usuário](#cadastrar-usuário)
- [Informações do Usuário](#acessar-usuário)
- [Apagar Usuário](#apagar-usuário)
- [Atualizar Usuário](#atualizar-usuário)
#### Comentário
- [Listar Todas os Comentários](#listar-todos-os-comentários)
- [Cadastrar Comentário](#cadastrar-comentário)
- [Informações do Comentário](#acessar-comentário)
- [Apagar Comentário](#apagar-comentário)
- [Atualizar Comentário](#atualizar-comentário)
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

### Acessar Usuário
`GET` /profile/`{id}`

Retorna as informações do usuário com o `id` informado com o parâmetro da path

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

### Listar Todos os Comentários

`GET` /comment

Retorna um array com todos os comentários cadastrados.

#### Exemplo de Resposta

```js
[
    {
        "id": 1,
        "comment": "This game is awesome!",
        "date": "2024-03-18"
    }
]
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Os dados ddos comentários foram retornados com sucesso|
|401|Acesso negado. Você deve se autenticar|
---

### Cadastrar Comentário
`POST` /comment

Cadastra um novo comentário com os dados enviados no corpo da requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|comment|string|✅|Conteúdo do comentário|
|date|string|✅|Data de publicação do comentário|

```js
{
    "comment": "This game is awesome!",
	"date": "2024-03-18"
}
```

#### Exemplo de Resposta

```js
{
    "id": 1,
    "comment": "This game is awesome!",
    "date": "2024-03-18"
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|201|Comentário cadastrado com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
---

### Acessar Comentário
`GET` /comment/`{id}`

Retorna as informações do comentário com o `id` informado com o parâmetro da path

#### Exemplo de Resposta

```js
// requisição para /comment/1
{
    "id": 1,
    "comment": "This game is awesome!",
    "date": "2024-03-18"
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Os dados do comentário foram retornados com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe comentário com o `id` informado|
---

### Apagar Comentário

`DELETE` /comment/`{id}`

Apaga o comentário como o `id` especificado no parâmetro de path

|código|descrição|
|------|---------|
|204|Comentário foi apagado com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe comentário com o `id` informado|
---

### Atualizar Comentário

`PUT` /comment/`{id}`

Edita os dados do comentário especificado no `id`, utilizando as informações enviadas no corpo da requisição.

### Corpo de Requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|comment|string|✅|Conteúdo do comentário|
|date|string|✅|Data de publicação do comentário|

```js
{
    "comment": "This game is awesome! altered",
	"date": "2025-03-18"
}
```

#### Exemplo de Resposta

```js
{
    "id": 1,
    "comment": "This game is awesome! altered",
    "date": "2025-03-18"
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Comentário alterado com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe comentário com o `id` informado|
---