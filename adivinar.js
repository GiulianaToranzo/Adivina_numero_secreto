const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
    };
    let intentos = 0;
    const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
        
    if (numeroAdivinado === numeroSecreto) {
        intentos++;
         console.log('¡Adivinaste el número SECRETO! Felicidades!!! En solo ' + intentos + ' intentos!');
    } else if (numeroAdivinado < numeroSecreto) {
    console.log('El número secreto es MAYOR. Vuelve a intentarlo!');
    intentos++;
    } else {
    console.log('El número secreto es MENOR. Vuelve a intentarlo!');
    intentos++;
    }
    };
    module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
    };