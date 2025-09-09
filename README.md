# Desafio de Código: Abrigo de Animais

---

## 💻 Descrição do Projeto

Este repositório contém a solução para o desafio de código "Abrigo de Animais" proposto pelo programa Start DB. O objetivo é implementar uma lógica em **JavaScript** para gerenciar a adoção de animais, combinando-os com pessoas candidatas com base em um conjunto de regras específicas e brinquedos favoritos.

---

## Desafio

Olá! Você foi contratado para ajudar na organização de um abrigo de animais.
Sua missão será encontrar pessoas aptas a levar os animais para casa.

### REGRAS PARA REUNIR PESSOA COM ANIMAIS

1. O animal vai para a pessoa que mostrar todos seus brinquedos favoritos na ordem desejada
2. Uma pessoa pode intercalar brinquedos que o animal queira ou não, desde que estejam na ordem desejada
3. Gatos não dividem seus brinquedos
4. Se ambas as pessoas tiverem condições de adoção, ninguém fica com o animal (tadinho)
5. Uma pessoa não pode levar mais de três animais para casa
6. Loco não se importa com a ordem dos seus brinquedos desde que tenha outro animal como companhia

### ANIMAIS

|      |        |                   |
| ---- | ------ | ----------------- |
| Rex  | cão    | RATO, BOLA        |
| Mimi | gato   | BOLA, LASER       |
| Fofo | gato   | BOLA, RATO, LASER |
| Zero | gato   | RATO, BOLA        |
| Bola | cão    | CAIXA, NOVELO     |
| Bebe | cão    | LASER, RATO, BOLA |
| Loco | jabuti | SKATE, RATO       |

### ENTRADAS E SAÍDAS

1. O programa deve receber três parâmetros de texto: os brinquedos da primeira pessoa, os da segunda pessoa e a ordem em que os animais deve ser considerados
2. Cada um desses parâmetros deve conter os itens separados por vírgula
3. O programa deve retornar uma estrutura contendo a lista em ordem alfabética dos animais e com quem ficaram ou a mensagem de erro, se houver
4. O formato de saída deve ser "nome animal - pessoa número" ou "nome animal - abrigo"
5. Caso animal seja inválido ou duplicado, apresentar erro "Animal inválido"
6. Caso brinquedo seja inválido ou duplicado, apresentar erro "Brinquedo inválido"

### EXEMPLOS

Entrada para um caso válido

```js
"RATO,BOLA", "RATO,NOVELO", "Rex,Fofo";
```

Saída

```js
{
  lista: ["Fofo - abrigo", "Rex - pessoa 1"];
}
```

Entrada para um caso inválido

```js
"CAIXA,RATO", "RATO,BOLA", "Lulu";
```

Saída

```js
{
  erro: "Animal inválido";
}
```

---

## ✨ Tecnologias e Ferramentas

- **Linguagem:** JavaScript (ES6+)
- **Ambiente:** Node.js
- **Testes:** Jest

---

## 🚀 Como Executar

Siga os passos abaixo para clonar o repositório, instalar as dependências e executar os testes:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/iamWilliamSilva/desafio-iamWilliamSilva-2025.git
    ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd desafio-iamWilliamSilva-2025
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Execute os testes para validar a sua solução:**
    ```bash
    npm test
    ```

---

## ✒️ Autor

Feito com ❤️ por **William da Silva**
