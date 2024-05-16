import { Titular } from "./Titular";

export abstract class Conta {
    private agencia: string;
    private numero: string;
    private titular: Titular;
    protected saldo: number;

    constructor(agencia: string, numero: string, titular: Titular) {
        this.agencia = agencia;
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
    }

    public depositar(valor: number) {
        this.saldo += valor;
    }

    public sacar(valor: number) {
        if (valor <= this.saldo && valor > 0) {
            this.saldo -= valor;
        }
    }

    public mostrarSaldo() {
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    get getAgencia() {
        return this.agencia;
    }

    set setAgencia(agencia: string) {
        this.agencia = agencia;
    }

    get getNumero() {
        return this.numero;
    }

    set setNumero(numero: string) {
        this.numero = numero;
    }

    get getTitular() {
        return this.titular;
    }

    set setTitular(titular: Titular) {
        this.titular = titular;
    }
}
