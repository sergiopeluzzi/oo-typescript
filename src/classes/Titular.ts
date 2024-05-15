export class Titular {
    nome: string;
    cpf: string;
    dataNascimento: Date;
    sexo: string;
    renda?: number;
    email?: string;
    telefone?: string;
    endereco?: string;

    constructor(nome: string, cpf: string, dataNascimento: Date, sexo: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
    }

    mostrarNome() {
        console.log(`Nome: ${this.nome}`);
    }

    mostrarIdade() {
        const hoje = new Date();
        const idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        console.log(`Idade: ${idade}`);
    }

    finalizarCadastro(
        renda?: number,
        email?: string,
        telefone?: string,
        endereco?: string
    ) {
        this.renda = renda;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}
