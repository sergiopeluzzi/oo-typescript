import { Conta } from "./Conta";
import { Titular } from "./Titular";

export class ContaPoupanca extends Conta {
    txRendimento: number;

    constructor(
        agencia: string,
        numero: string,
        titular: Titular,
        txRendimento: number
    ) {
        super(agencia, numero, titular);
        this.txRendimento = txRendimento;
    }

    mostrarSaldo(): void {
        console.log(`Saldo CP: R$ ${this.saldo.toFixed(2)}`);
    }

    calcularRendimento() {
        console.log(
            `Rendimento: R$ ${(this.saldo * (this.txRendimento / 100)).toFixed(
                2
            )}`
        );
    }
}
