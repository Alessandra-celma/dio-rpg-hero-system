class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        console.log('"${this.tipo} atacou usando ${ataque}"');
    }
}
// Exemplos de uso
const heroi1 = new Heroi("Elandor da Chama Eterna", 150, "O mago")
const heroi2 = new Heroi("Elektra", 35, "A guerreira");
const heroi3 = new Heroi("ju cook", 80, "O monge");
const heroi4 = new Heroi("Zenkai", 29, "O ninja");


heroi1.atacar(); // Output: guerreiro, atacou usando a lãmina flamejante
heroi2.atacar(); // Output: mago, atacou usando explosão arcana
heroi3.atacar(); // Output: monge, atacou usando soco de ferro
heroi4.atacar(); // Output: ninja, atacou usando katana