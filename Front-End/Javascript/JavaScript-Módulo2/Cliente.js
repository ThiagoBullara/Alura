export class Cliente {
    constructor(nome, cpf, rg, senha) {
        this._nome =  nome;
        this._cpf = cpf; 
        this._rg = rg;
        this._senha = senha;
    };

    autenticar() {
        return true;
    }
};