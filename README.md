# dio-rpg-hero-system
RPG Hero System
# Jogo de Heróis - Classes e Ataques

## Descrição
Este projeto é uma implementação simples de uma **classe genérica `Heroi`** em JavaScript, que representa heróis de uma aventura. Cada herói possui **nome**, **idade** e **tipo** (mago, guerreiro, monge ou ninja) e pode **atacar** com um golpe específico dependendo do tipo.

O objetivo é praticar os seguintes conceitos de programação:
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão
- Funções
- Classes e Objetos

---

## Estrutura da Classe

```javascript
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const ataques = {
      "o mago": "magia",
      "a guerreira": "espada",
      "o monge": "artes marciais",
      "o ninja": "shuriken"
    };

    const chave = this.tipo.toLowerCase();
    const ataque = ataques[chave] || "ataque desconhecido";

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}