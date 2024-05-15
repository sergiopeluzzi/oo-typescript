import { Titular } from "./Titular";

export abstract class Conta {
    agencia: string;
    numero: string;
    titular: Titular;
    saldo: number;

    constructor(agencia: string, numero: string, titular: Titular) {
        this.agencia = agencia;
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor <= this.saldo && valor > 0) {
            this.saldo -= valor;
        }
    }

    mostrarSaldo() {
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
    }
}
