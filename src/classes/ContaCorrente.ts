import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    txCPMF: number = 0.004;

    sacar(valor: number): void {
        if (valor <= this.saldo && valor > 0) {
            this.saldo -= valor;
            this.aplicarCPMF(valor);
        }
    }

    private aplicarCPMF(valor: number): void {
        this.saldo -= valor * this.txCPMF;
    }

    mostrarSaldo(): void {
        console.log(`Saldo CC: ${this.saldo.toFixed(2)}`);
    }
}
