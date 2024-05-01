// Aula 9
// Classes

// Fáceis
// 1 //
class Veiculo {
    marca;
    modelo;
    ano;
    cor;

    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    marcaVeiculo() {
        console.log(`A marca do meu veículo é ${this.marca}`);
    }

    modeloVeiculo() {
        console.log(`O modelo do meu veículo é ${this.modelo}`);
    }

    veiculoAno() {
        console.log(`O ano do meu veículo é ${this.ano}`);
    }

    corVeiculo() {
        console.log(`A cor do meu veículo é ${this.cor}`);
    }

    buzinar() {
        console.log(`O ${this.modelo} buzinou!`)
    }

}
const carro = new Veiculo("Só sei que nada Sei", "Chevetinho", 1010, "Azul Cintilante");

carro.marcaVeiculo();
carro.modeloVeiculo();
carro.veiculoAno();
carro.corVeiculo();
carro.buzinar();

console.log(carro);//aqui vai aparecer somente oas informações da 'const carro', na sequência.


// 2 //
// forma 1 de fazer
class Retangulo {
    base;
    altura;

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;

        try {if (base == altura) throw "Suas medidas não são as de um Retângulo!"}
        catch(err) {
            console.log("Erro: " + err);
        }
    }

    calcularArea() {
        return this.base * this.altura;
    }
}
const resultadoAreaRetangulo = new Retangulo(6, 6);
console.log("O resultado da Área do Retângulo é " + resultadoAreaRetangulo.calcularArea());

// forma 2 de fazer - usando classes estáticas

class Retangulo2 {
    static nome = 'Retangulo'

    static calculoRetangulo (base, altura) {
        return base * altura;
    }
}
console.log(Retangulo2.calculoRetangulo(5, 2));


// MÉDIO
// 1 //

class ContaBancaria {
    numero;
    #saldo;

    constructor (numero, saldo) {
        this.numero = numero;
        this.#saldo = saldo;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} efetuado sucesso! :)`);
        } else {
            console.log(`Saldo insuficiente para efetuar o saque! ):`);
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Deposito de R$ ${valor} efetuado com SUCESSO! :)`);
        } else {
            console.log(`Depósito INVÁLIDO! ):`);
        }
    }

    verSaldo() {
        console.log(`O Saldo atual de sua conta é de R$ ${this.#saldo}!`);
    }

    numeroContaBancaria() {
        return "O número de sua conta bancaria é: " + this.numero;
    }// fiz o #saldo dando return para saber que eu posso tanto usar a forma com o 'console.log()', mas também posso usar dando um return na função!
}
const dadosContaBc = new ContaBancaria(9235, 10000);
//mostra o #saldo bancário
console.log(dadosContaBc.numeroContaBancaria());
//mostra a efetuação do SAQUE
dadosContaBc.sacar(600);
dadosContaBc.verSaldo();
//mostra a efetuação do DEPÓSITO
dadosContaBc.depositar(700);
dadosContaBc.verSaldo();
//mostra o Saldo atual (após as efetuações)


// 2 //
class Pessoa {
    #nome;
    #idade;
    #sexo;

    constructor (nome, idade, sexo) {
        this.#nome = nome;
        this.#idade = idade;
        this.#sexo = sexo;
    }

    //preciso criar essas funções com algum tipo de retorno, pois como estou colocando os meus atributos como PRIVADOS, logo eu tenho que achar alguma forma fazer com que eu possa usar fora da minha classe, por isso das funções

    alteraNome(nome) {
        this.#nome = nome;
    }
    mostraNome() {
        return `O nome desta pessoa é ${this.#nome}!`;
    }

    alteraIdade(idade) {
        this.#idade = idade;
    }
    mostraIdade() {
        return `A idade de ${this.#nome} é ${this.#idade} anos de idade!`;
    }

    alteraSexo(sexo) {
        this.#sexo = sexo;
    }
    mostraSexo() {
        return `${this.#nome} é do sexo ${this.#sexo}`;
    }
}
const identificacaoPessoa = new Pessoa();
identificacaoPessoa.alteraNome("Jallyn Rabbey");
console.log(identificacaoPessoa.mostraNome());
identificacaoPessoa.alteraIdade(25);
console.log(identificacaoPessoa.mostraIdade());
identificacaoPessoa.alteraSexo("Masculino");
console.log(identificacaoPessoa.mostraSexo());


// Difícil
// 1 //
class Animal {
    nome;
    som;

    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    falaAnimal(som) {
        this.som = som;
    }//crio essa função para dar valor ao meu atributo 'som' com o parâmetro 'som' também
}

class Doguinho extends Animal {
    constructor(nome, som) {
        super(som);
        this.som = som;
        this.nome = nome
    }//crio essa classe Doguinho extendida à classe Animal para instanciar os atributos 'som' e o 'nome'

    falaAnimal() {
        console.log(`O meu ${this.nome} faz ${this.som}`)
    }//aqui só dou um log com o que eu quero que apareça
}
const barulhoAnimal = new Doguinho("Dog", "au au au");// aqui já coloco os valores dos meus parâmetros
barulhoAnimal.falaAnimal();