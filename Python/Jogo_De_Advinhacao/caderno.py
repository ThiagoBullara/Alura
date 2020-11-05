# - Sobre o python:
# 
#      1° O python usa a convenção Snake_case
# 
#  - Algumas funções do python:  
#   
#       A função print() é formada por pelo menos 5 parâmetros e serve para imprimir valores na tela:
#             
#             print(value, ..., sep='', end='\n', file='sys.stdout', flush='false')
#                 
#                 1° O value é o valor que você passa e quer imprimir, para colocar mais de um valor basta apenas separar eles por uma vírgula
#                 2° O parâmetro sep='' serve no caso da função ter mais que um valor, nela você pode escolher o que vai ter entre os valores, por padrão o sep vem com um espaço vazio
#                 3° O parâmetro end='' serve para dizer o que vai acontecer no depois do último valor, por padrão ela tem o vaalor \n que serve para dizer que após o último valor se deve pular uma linha
#                 4° O parâmetro file='' serve para informar aonde se deve imprimir o resultado da função, por padrão é sys.stdout que serve para imprimir no terminal
#                 5° O último parâmetro serve para determinar o fluxo deve ser liberado a força, por padrão é false
#                 6° O tipo da função print() vai de acordar com o tipo de dado que ela recebe 
#                 7° Não é possível concatenar valores com tipos diferentes 
#        
#         A função input() é formada por apenas um parãmetro e serve para armazenar um valor que vai ser passado, para melhor uso da função se deve atribuir ela a uma variável:
#       
#             input(value)
#                 
#                 1° O value serve para atribuir uma mensagem que vai aparecer antes do campo input
#                 2° O tipo da função input() é de str, não importa qual tipo de dado que ela recebe
#       
#         A função int() possui dois parâmetros, o primerio é obrigatório já o segundo é opcional, a função serve para mudar o tipo do objeto para int:
#       
#             int(value, base=10)
#       
#                 1° O value é o objeto que você passa para a função, se o objeto não for um número um erro vai ocorrer
#                 2° O parãmetro base serve para informar qual vai ser o formato do número, por padrão seu valor é 10
#                  
#         A função type(object) recebe um objeto como parâmetro e serve para pegar o seu tipo:
#       
#             type(value)
#       
#                 1° O value é um objeto
#                 2° O tipo pode ser null caso o objeto tenha valor = None
#                 3° Caso o objeto seja um número poderá ter valor int, long, float ou complex
#                 4° Caso o objeto seja uma string poderá ter valor str ou unicode
#                 5° Caso o objeto seja uma lista ou uma tupla poderá ter valor list ou tuple
#                 6° Caso o objeto seja um dicionário poderá ter valor dict
#                 7° Caso o objeto seja um arquivo poderá ter valor file
#                 8° Caso o objeto seja um bolleano poderá ter valor boll
#                 9° Caso o objeto seja um conjunto poderá ter valor set ou forzenset
#                 10° Existe um outro tipo de função type: type(name, base, dict)
#       
#  - If, else e elif:  
#       
#       if(condição):
#           Código
#       elif(condição):
#           Código
#       else:
#           Código
#   
#          1° Após a condição do if do elif e após o else se deve usar :   
#          2° O código que o if o elif e o else vão executar devem estar idendados
#          3° O elif tem o a mesma função do elseif
#          4° Os parênteses não são obrigatórios
# 
#  - While:
# 
#       while(condição):
#           Código até que a condição seja cumprida
# 
#          1° O while executará a linha de código seguinte até que a condição seja false
# 
#  - .format():
# 
#       "Lorem {} ipsum {}".format(variavel1, variavel2) -> "Lorem variavel1 ipsum variavel2"
# 
#          1° A função .format(até o momento) serve para colocar variáveis dentro das aspas
#          2° Se usa {} para indicar onde a variavel deve ser encaixada
# 
# 
# 
# 
# 
# 
# 
# 