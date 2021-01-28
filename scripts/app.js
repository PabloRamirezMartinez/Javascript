
// generamos una función básica para calcular la suma cuando se presione el boton calcular-suma.
document.getElementById("calcular-suma").onclick = function resultSuma() {

    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = parseInt(n1) + parseInt(n2);
    document.getElementById("res-suma").innerHTML = n3;
}

// le asignamos la funcion borrar a nuestro boton con la id "borrar" en el evento on click
document.getElementById("borrar-suma").onclick = function borrarSuma() {
    document.getElementById("n1").value = 0;
    document.getElementById("n2").value = 0;
    document.getElementById("res-suma").innerHTML = 0;
}

// generamos una función básica para calcular la Resta cuando se presione el boton calcular-resta.
document.getElementById("calcular-resta").onclick = function resultResta() {

    let n1 = document.getElementById("n3").value;
    let n2 = document.getElementById("n4").value;
    let n3 = parseInt(n1) - parseInt(n2);
    document.getElementById("res-resta").innerHTML = n3;
}

// le asignamos la funcion borrar a nuestro boton con la id "borrar-resta" en el evento on click
document.getElementById("borrar-resta").onclick = function borrarResta() {
    document.getElementById("n3").value = 0;
    document.getElementById("n4").value = 0;
    document.getElementById("res-resta").innerHTML = 0;
}
document.getElementById("calcular-multi").onclick = function resultMulti() {

    let n1 = document.getElementById("n5").value;
    let n2 = document.getElementById("n6").value;
    let n3 = parseInt(n1) * parseInt(n2);
    document.getElementById("res-multi").innerHTML = n3;
}

// le asignamos la funcion borrar a nuestro boton con la id "borrar-resta" en el evento on click
document.getElementById("borrar-multi").onclick = function borrarMulti() {
    document.getElementById("n5").value = 0;
    document.getElementById("n6").value = 0;
    document.getElementById("res-multi").innerHTML = 0;
}
document.getElementById("calcular-divi").onclick = function resultDivi() {

    let n1 = document.getElementById("n7").value;
    let n2 = document.getElementById("n8").value;
    let n3 = parseInt(n1) / parseInt(n2);
    document.getElementById("res-divi").innerHTML = n3;
}

// le asignamos la funcion borrar a nuestro boton con la id "borrar-resta" en el evento on click
document.getElementById("borrar-divi").onclick = function borrarDivi() {
    document.getElementById("n7").value = 0;
    document.getElementById("n8").value = 0;
    document.getElementById("res-divi").innerHTML = 0;

}