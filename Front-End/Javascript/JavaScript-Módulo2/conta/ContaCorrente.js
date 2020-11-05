import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static totalContas = 0;
    constructor(agencia, conta, cliente) {
        super(agencia, conta, cliente);
        ContaCorrente.totalContas += 1;  
    };

    saque(valor) {

        let taxa = 1.10;
        
        return this._saque(valor, taxa);
    };
};