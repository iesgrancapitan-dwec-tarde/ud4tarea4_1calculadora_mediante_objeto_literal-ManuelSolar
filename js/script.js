/**
 * Creación dinámica de la interfaz gráfica de una calculadora
 * 
 * @author Manuel Solar
 */

{
    let calculadora = {
        botones: ['CE', 'DEL', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'X', '1', '2', '3', '/', '0', '+/-', ',', '='],
        inputMuestra: 0,
       
       crearCalculadora() {
           calculadora.crearDivPadre();
           calculadora.crearBotones(calculadora.botones);
           inputMuestra = document.querySelector("#inputMuestra");
           let inputs = document.querySelectorAll("input");
           for (let i = 0; i < inputs.length; i++) {
               inputs[i].addEventListener("click", calculadora.comportamiento);
           }
       },
       crearDivPadre() {
           let div = document.createElement('div');
           div.id = 'divPadre';
           div.style.backgroundColor = '#808080'
           div.style.width = '245px';
           document.body.appendChild(div);
       },
       crearBotones(botones) {
           let input;
           let divPadre = document.querySelector('#divPadre');
           let inputText = document.createElement('input');
           inputText.type = 'text';
           inputText.id = 'inputMuestra';
           inputText.style.width = '226px';
           inputText.style.height = '30px';
           inputText.style.margin = '5px';
           inputText.value = "0";
           inputText.style.textAlign = 'right';
           divPadre.appendChild(inputText);
           divPadre.appendChild(document.createElement('br'));
           for (let i = 1; i <= botones.length; i++) {
               input = document.createElement('input');
               input.type = 'button';
               input.value = botones[i - 1];
               input.id = botones[i - 1];
               input.style.height = '50px';
               input.style.width = '50px';
               input.style.margin = '5px';
               input.style.borderRadius = '5px';
               divPadre.appendChild(input);
               if (i % 4 == 0)
                   divPadre.appendChild(document.createElement('br'));
           }
       },
       comportamiento() {
        let valor = this.value;
        if (inputMuestra.value == "Error" && this.value != "CE")
            return;
        switch (valor) {
            case "0":
                if (calculadora.nuevoValor) {
                    inputMuestra.value = valor;
                    calculadora.nuevoValor = false;
                } else if (inputMuestra.value != 0 || inputMuestra.value.length == 0 || inputMuestra.value.includes("."))
                    inputMuestra.value += valor;
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (inputMuestra.value == 0 && inputMuestra.value.length <= 1 || calculadora.nuevoValor)
                    inputMuestra.value = valor;
                else
                    inputMuestra.value += valor;
                calculadora.nuevoValor = false;
                break;
            case "+/-":
                if (inputMuestra.value > 0)
                    inputMuestra.value = -Math.abs(inputMuestra.value);
                else
                    inputMuestra.value = Math.abs(inputMuestra.value);
                break;
            case "DEL":
                inputMuestra.value = inputMuestra.value.substring(0, inputMuestra.value.length - 1);
                if (inputMuestra.value == "")
                    inputMuestra.value = "0";


                break;
            case ",":
                if (!inputMuestra.value.includes("."))
                    inputMuestra.value += ".";
                break;
            case "CE":
                inputMuestra.value = 0;
                calculadora.valor1 = 0;
                calculadora.valor2 = 0;
                calculadora.resetearOperadores();
                calculadora.operacionActual = false;
                calculadora.operacionPosterior = false;
                calculadora.primerNumero = true;
                break;
        }
    }

       
    }

    function init() {
        calculadora.crearCalculadora();
    }

    window.addEventListener("DOMContentLoaded", init);

        

}





