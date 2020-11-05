export class SistemaAutenticacao {
    static login(verificacao, senha) {
        if(SistemaAutenticacao.autenticavel(verificacao)) {
            return verificacao.autenticar(senha);
        };
        return false;
    };

    static autenticavel(verificacao) {
        return "autenticar" in verificacao && verificacao.autenticar instanceof Function;
    };
};