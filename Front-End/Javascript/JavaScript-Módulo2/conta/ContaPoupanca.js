import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static totalContas = 0;
    constructor(agencia, conta, cliente) {
        super(agencia, conta, cliente);
        ContaPoupanca.totalContas += 1;  
    };

    saque(valor) {

        let taxa = 1.02;
        
        return this._saque(valor, taxa);
    };
};