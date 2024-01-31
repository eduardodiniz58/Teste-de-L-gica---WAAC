# Teste-de-L-gica---WAAC
Teste de logica para processo seletivo

Tecnologias que vão ser utilizadas:
- JavaScript
- Node.JS
- HTML

Logica utilizada
Começamos da penúltima linha do triângulo (índice numRows - 2) e iteramos para cima.
Em cada iteração, percorremos os elementos da linha atual e atualizamos o valor para a soma acumulada máxima.
A atualização é feita somando o valor do elemento atual com o máximo entre os dois elementos diretamente abaixo na próxima linha.
Continuamos esse processo até chegarmos ao topo do triângulo.
No final, o elemento na posição superior do triângulo (maxSumTriangle[0][0]) conterá a soma máxima.
