import { Conta } from "./classes/Conta";
import { ContaCorrente } from "./classes/ContaCorrente";
import { ContaPoupanca } from "./classes/ContaPoupanca";
import { Titular } from "./classes/Titular";

export class App {
    constructor() {
        // const titular1 = new Titular(
        //     "Fulano",
        //     "123.456.789-00",
        //     new Date("1990-01-02"),
        //     "M"
        // );
        // const conta1 = new Conta("001", "123456", titular1);
        // conta1.mostrarSaldo();
        // conta1.depositar(100);
        // conta1.mostrarSaldo();
        // conta1.sacar(50);
        // conta1.mostrarSaldo();
        // titular1.finalizarCadastro(3000, "fulano@email.com", "1234-5678");
        // console.log("---------------------------------");
        // const titular2 = new Titular(
        //     "Ciclado",
        //     "987.654.321-00",
        //     new Date("1995-01-02"),
        //     "F"
        // );
        // const conta2 = new Conta("001", "123457", titular2);
        // conta2.depositar(10000);
        // conta2.mostrarSaldo();
        // conta2.sacar(20000);
        // conta2.mostrarSaldo();
        // console.log("---------------------------------");
        // console.log(conta1);
        // console.log(conta2);
        // console.log("---------------------------------");
        // titular2.mostrarIdade();
        // console.log("---------------------------------");
        // const cp = new ContaPoupanca();
        // const titular = new Titular(
        //     "Sergio",
        //     "802.954.602-53",
        //     new Date("1985-11-25"),
        //     "M"
        // );
        // const cp = new ContaPoupanca("1111", "2222", titular, 2);
        // cp.depositar(1550);
        // cp.mostrarSaldo();
        // cp.calcularRendimento();
        // console.log("===========================");
        // const cc = new ContaCorrente("1111", "3333", titular);
        // cc.depositar(1800);
        // cc.mostrarSaldo();
        // cc.sacar(500);
        // cc.mostrarSaldo();

        const titular = new Titular(
            "Sergio",
            "802.954.602-53",
            new Date("1985-11-25"),
            "M"
        );

        const cc = new ContaCorrente("1111", "2222", titular);
        cc.depositar(1000);
        cc.sacar(500);
        console.log(cc);
    }
}

new App();
