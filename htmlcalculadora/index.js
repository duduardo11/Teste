const calculadora = (operator, n1, n2) => {
    switch(operator){
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default:
            alert("Nenhuma operação valída escolhida")
    }
}       
function calcular(){

    let operator = document.getElementById("operator").value;
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    
    let resultadoCalculo = calculadora (operator, n1, n2);

    if (resultadoCalculo !== null){
        document.getElementById("resultado").innerHTML = `Resultado:${resultadoCalculo}`;
    }
}
