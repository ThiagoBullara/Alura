print("************************************************")
print("******* Bem vindo ao jogo de adivinhação *******")
print("************************************************")

numero_secreto = 42
numero_tentativas = 3
numero_rodada = 1

while(numero_rodada <= numero_tentativas):
    print("Tentativa número: {} de {}".format(numero_rodada, numero_tentativas))
    chute = input("Digite o seu número: ")
    numero_input = int(chute)

    print("Você digitou:", chute)

    errou_maior = numero_input > numero_secreto
    errou_menor = numero_input < numero_secreto
    acertou     = numero_input == numero_secreto

    if(acertou):
        print("Você acertou!")
        numero_tentativas = 0
    else:
        if(errou_maior):
            print("Seu número foi maior que o número secreto")
        elif(errou_menor):
            print("Seu número foi menor que o número secreto")

    numero_rodada = numero_rodada + 1


print("Fim do jogo")