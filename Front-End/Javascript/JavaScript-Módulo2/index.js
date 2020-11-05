console.log("Banco \n");

class Cliente {
    nome;
    cpf;
    rg;
};

class ContaCorrente {
    agencia;
    conta;
    _saldo = 2000;

    saque(valor) {
        if(valor <= this._saldo && valor > 0) {
            this._saldo = this._saldo - valor; 
            console.log(`Saque no valor de ${valor} realizado com sucesso! \n`);
        } else {
            if(valor > this._saldo) {
                console.log("Você não possui o saldo para realizar esse saque \n");
            } else {
                console.log("Valor de saque inválido \n");
            }
        }
    }

    depositar(valor) {
        // Early return if(valor <= 0) return;
        if(valor > 0) {
            this._saldo = this._saldo + valor;
            console.log(`Depósito de R$:${valor} realizado com sucesso! \n`);
        } else {
            console.log("Valor do depósito inválido \n");
        }
    }

};

const cliente1 = new Cliente();
const conta1 = new ContaCorrente();

cliente1.nome = "Thiago";   
cliente1.cpf = 11122233345;   
cliente1.rg = 1122233345;
conta1.agencia = 1001;   
conta1.conta = 1;   

const cliente2 = new Cliente();
const conta2 = new ContaCorrente();

cliente2.nome = "Alice";   
cliente2.cpf = 11122233346;   
cliente2.rg = 1122233346;
conta2.agencia = 1001;   
conta2.conta = 2;  

const cliente3 = new Cliente();
const conta3 = new ContaCorrente();

cliente3.nome = "Ricardo";   
cliente3.cpf = 11122233347;   
cliente3.rg = 1122233347;
conta3.agencia = 1001;   
conta3.conta = 3;  

console.log(cliente1, conta1, "\n");
console.log(cliente2, conta2, "\n");
console.log(cliente3, conta3, "\n");

conta1.depositar(0);

console.log(cliente1, conta1, "\n");