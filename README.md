# dio-rpg-hero-system
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

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
         const ataques = {
            "o mago": "explosão arcana",
            "a guerreira": "lâmina",
            "o monge": "soco de ferro",
            "o ninja": "katana"
        };
        const ataque = ataques[this.tipo.toLowerCase()];
        if (ataque) {
            console.log(`${this.tipo}, atacou usando ${ataque}`);
         }
    }
}
// Exemplos de uso
const heroi1 = new Heroi("Elandor da Chama Eterna", 150, "O mago")
const heroi2 = new Heroi("Elektra", 35, "A guerreira");
const heroi3 = new Heroi("ju cook", 80, "O monge");
const heroi4 = new Heroi("Zenkai", 29, "O ninja");


heroi1.atacar(); // Output: mago, atacou usando explosão arcana
heroi2.atacar(); // Output: guerreiro, atacou usando lâmina
heroi3.atacar(); // Output: monge, atacou usando soco de ferro
heroi4.atacar(); // Output: ninja, atacou usando katana
