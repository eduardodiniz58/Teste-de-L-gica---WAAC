const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Armazenar a lista inserida pelo usuário com um ID
const triangleList = [];

// Rota para receber o triângulo e calcular a soma máxima
app.post('/calculateMaxSum', (req, res) => {
    const triangle = req.body.triangle;
    const id = triangleList.length + 1;

    // Armazenar o triângulo com um ID
    triangleList.push({ id, triangle });

    // Calcular a soma máxima
    const maxSum = calculateMaxSum(triangle);

    // Responder com o resultado
    res.json({ id, maxSum });
});

// Função para calcular a soma máxima
function calculateMaxSum(triangle) {
    // Implementar lógica para calcular a soma máxima aqui

    // Retornar um valor de exemplo por enquanto
    return 26;
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
