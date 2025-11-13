    function Calcular() {
        let valor1 = Number (document.getElementById("n1").value)
        let valor2 = Number (document.getElementById("n2").value)
        let operador = (document.getElementById("op").value)
        let resuldadocalc = 0
        switch(operador) {
            case '+': resultadocalc = valor1 + valor2; 
            break;
            case '-': resultadocalc = valor1 - valor2; 
            break;
            case '*': resultadocalc = valor1 * valor2; 
            break;
            case '/': resultadocalc = valor1 / valor2; 
            break;
            default: alert('operador não identificado!');
        }

        let result = document.getElementById("resultadocalc")

        result.style.color = randon_rgba();
        result.innerHTML = resuldadocalc
    }

    function fundo_light() {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.getElementById("container").className = ".main-section-dark"
    }
