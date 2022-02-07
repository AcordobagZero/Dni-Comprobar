const express = require('express');
const { send } = require('express/lib/response');
const app = express()

app.use(express.static('public'));

app.get('/tabla', function (req, res) {
    let num = req.query.num;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var numero = req.query.num;

    if(numero < 0 || numero > 9999999) {
    alert("El número proporcionado no es válido");
    }
    else {
    var letraCalculada = letras[numero % 23];
    res.send("La letra es: "+ letraCalculada);

    }

})

puerto = 3000
app.listen(puerto, () => console.log('Escuchando el puerto:', puerto))