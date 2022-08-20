# Relógio Digital

## Date
```javascript
const date = new Date();
```

A variável `date` recebe o conteúdo da classe `new Date()`, sendo assim possível ter acesso a vários
métodos desta mesma classe.

O exemplo abaixo irá obter as **horas/minutos/segundos** do computador.

```javascript
const date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
```

[Documentação - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_ObjectsDate#examples)

## setInterval
`setInterval()` Faz repetições com um atraso de tempo entre as execuções.

```javascript
function setInterval(function() {
    // faça alguma coisa a cada segundo
}, 1000)
```

Notem o valor `1000`, que é interpretado em `milissegundo` e a função que tem o comentário `// faça alguma coisa a cada segundo` será executada de 1 em 1 segundo.

[Documentação - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

## User Story # 1
Faça com que as **horas/minutos/segundos** do computador seja visível formato `00:00:00`

Exemplo: `19:16:58`

## User Story # 2
A mudança das **horas/minutos/segundos** deverão ser feitas em tempo real.

## User Story # 3
A mudança das **horas/minutos/segundos** deverão ser feitas no elemento `span` com o id `time`