//Classe Abstrata

import { Cliente } from "../Cliente.js";

export class Conta {
    static totalContas = 0;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        };
    };

    get cliente() {
        return this._cliente;
    };

    constructor(agencia, conta, cliente) {
        this._agencia = agencia;
        this._conta = conta;
        this._saldo = 0;
        this._cliente = cliente;
        Conta.totalContas += 1; 
        
        if(this.constructor == Conta) {
            throw new Error("Você não pode instanciar um objeto do tipo Conta Diretamente pois é uma classe abstrata \n");
        }
    };

    saque(valor) {
        throw new Error("O método saque é abstrato");
    };

    _saque(valor, taxa) {
        const valorSacado = taxa * valor;

        if(valorSacado <= this._saldo && valorSacado > 0) {
            this._saldo = this._saldo - valorSacado; 
            console.log(`Saque no valor de ${valor} realizado com sucesso! \n`);
            return valorSacado;
        } else {
            console.log("Erro na transação");
        };
    };

    depositar(valor) {
        // Early return if(valor <= 0) return;
        if(valor > 0) {
            this._saldo = this._saldo + valor;
            console.log(`Depósito no valor de ${valor} realizado com sucesso! \n`);
        } else {
            console.log("Erro na transação");
        };
    };

    transferir(valor, conta) {
        const valorSacado = this.saque(valor);
        conta.depositar(valorSacado);
    };  
};