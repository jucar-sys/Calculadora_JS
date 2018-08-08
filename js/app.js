//*************************** VARIABLES GLOBALES ************************//
var cero = document.getElementById('0');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');

var suma = document.getElementById('mas');
var resta = document.getElementById('menos');
var multiplicacion = document.getElementById('por');
var division = document.getElementById('dividido');

var punto = document.getElementById('punto');
var igual = document.getElementById('igual');
var on = document.getElementById('on');
var menos = document.getElementById('sign')

var pantalla = document.getElementById('display');

var validaLongitud = true;
var resultado = 0;
var operacion = "ninguna";
var num1 = 0;
var num2 = 0;
var signo = "";
var opEnCadena = 0;
//***********************************************************************//



//*************************** OBJETO PRINCIPAL **************************//
var Calculadora = {
  //******** MÉTODO PARA INICIAR ********//
  init: function(){
    this.pulsarTecla();
    this.presionarNumeros();
    this.presionarOnC();
    this.presionarPunto();
    this.presionarMenos();
    this.operaciones();
    this.resultado();
  },
  //************************************//


  //******* MÉTODOS Y PROPIEDADES *******//
  //Métodos para cambiar tamaño de botones//
  pulsarTecla: function(){
    var elemento = document.getElementsByClassName('tecla');
    for (var i = 0; i < elemento.length; i++) {
      elemento[i].onmousedown=this.eventoReducirTamanio;
      elemento[i].onmouseup=this.eventoRestaurarTamanio;
    }
  },
  eventoReducirTamanio: function(event){
    reducirTamanio(event.target);
  },
  eventoRestaurarTamanio: function(event){
    restaurarTamanio(event.target);
  },
  //----------------------------------------//

  //Métodos para mostrar los numeros presionados//
  presionarNumeros: function(){
    cero.onclick=this.eventoMostrarNumeros;
    uno.onclick=this.eventoMostrarNumeros;
    dos.onclick=this.eventoMostrarNumeros;
    tres.onclick=this.eventoMostrarNumeros;
    cuatro.onclick=this.eventoMostrarNumeros;
    cinco.onclick=this.eventoMostrarNumeros;
    seis.onclick=this.eventoMostrarNumeros;
    siete.onclick=this.eventoMostrarNumeros;
    ocho.onclick=this.eventoMostrarNumeros;
    nueve.onclick=this.eventoMostrarNumeros;
  },
  eventoMostrarNumeros: function(event){
    mostrarNumeros(event.target);
  },
  //--------------------------------------------//

  //Método para poner en "0" la pantalla//
  presionarOnC: function(){
    on.onclick=reiniciarValores;
  },
  //-------------------------------------//

  //Método para poner punto decimal//
  presionarPunto: function(){
    punto.onclick=ponerPunto;
  },
  //--------------------------------//

  //Método para poner signo de menos//
  presionarMenos: function(){
    menos.onclick=ponerMenos;
  },
  //--------------------------------//

  //Métodos para realizar las operaciones//
  operaciones: function(){
    suma.onclick=this.eventoRealizarOperacion;
    resta.onclick=this.eventoRealizarOperacion;
    multiplicacion.onclick=this.eventoRealizarOperacion;
    division.onclick=this.eventoRealizarOperacion;
  },
  eventoRealizarOperacion: function(event){
    realizarOperacion(event.target);
  },
  //------------------------------------//

  //Método para mostrar resultado//
  resultado: function(){
    igual.onclick=resultadoOperaciones;
  }
  //-----------------------------//
  //************************************//
}
//***********************************************************************//



//***************************** FUNCIONES *******************************//
//Funciones para cambiar los tamaños de los botones//
function reducirTamanio(elemento){
  elemento.style.padding="1.5px";
}
function restaurarTamanio(elemento){
  elemento.style.padding="0px";
}
//------------------------------------------------//

//Funciones para mostrar los números presionados en pantalla//
function mostrarNumeros(elemento){
  var num = "";

  switch (elemento.id) {
    case "0":
      num = "0";
      validarNum(num);
      break;
    case "1":
      num = "1";
      validarNum(num);
      break;
    case "2":
      num = "2";
      validarNum(num);
      break;
    case "3":
      num = "3";
      validarNum(num);
      break;
    case "4":
      num = "4";
      validarNum(num);
      break;
    case "5":
      num = "5";
      validarNum(num);
      break;
    case "6":
      num = "6";
      validarNum(num);
      break;
    case "7":
      num = "7";
      validarNum(num);
      break;
    case "8":
      num = "8";
      validarNum(num);
      break;
    case "9":
      num = "9";
      validarNum(num);
      break;
    default:
  }

  function validarNum(num){
    if (validaLongitud) {
      if (pantalla.innerHTML == "0") {
        pantalla.innerHTML = num;
      } else {
        pantalla.innerHTML = pantalla.innerHTML + num;
      }
      validarNumDigitos();
    } else {
      console.log("Pantalla llena");
    }
  }
}
//----------------------------------------------------------//

//Función para reiniciar la pantalla a "0"//
function reiniciarPantalla(){
  pantalla.innerHTML = "0";
  validaLongitud = true;
}
//------------------------------------------//

//Función para reiniciar los valores de variables//
function reiniciarValores(){
  pantalla.innerHTML = "0";
  validaLongitud = true;
  resultado = 0;
  operacion = "ninguna";
  num1 = 0;
  num2 = 0;
  signo = "";
  opEnCadena = 0;
}
//----------------------------------------------//

//Función para poner el punto decimal//
function ponerPunto(){
  if (pantalla.innerHTML.indexOf(".") < 0) {//Busqué en internet como hacer la validación
    pantalla.innerHTML = pantalla.innerHTML + ".";
  }
}
//-----------------------------------//

//Función para poner el signo de menos//
function ponerMenos(){
  if (pantalla.innerHTML == "0" || pantalla.innerHTML == "0.") {
    console.log("no se pone signo negativo a un cero");
  } else {
    if (pantalla.innerHTML.indexOf("-") < 0) {
      pantalla.innerHTML = "-" + pantalla.innerHTML;
    }else {
      pantalla.innerHTML = pantalla.innerHTML.replace("-", "");//Busqué en internet como hacer el remplazo
    }
  }
}
//-----------------------------------//

//Función para validar el numero de digitos ingresados//
function validarNumDigitos(){
  if (pantalla.innerHTML.length > 7) {
    validaLongitud = false;
  }
}
//----------------------------------------------------//

//Función para realizar la operacion de cantidades//
function realizarOperacion(tipo){
  switch (tipo.id) {
    case "mas":
      if (opEnCadena == 0) {
        num1 = parseFloat(pantalla.innerHTML);
        console.log("oec = 0 + num1: "+num1);
        operacion = "suma";
        reiniciarPantalla();
        opEnCadena = 1;
        break;
      }else {
        num1 = num1 + parseFloat(pantalla.innerHTML);
        console.log("oec = 1 + num1: "+num1);
        operacion = "suma";
        reiniciarPantalla();
        break;
      }
    case "menos":
      if (opEnCadena == 0) {
        num1 = parseFloat(pantalla.innerHTML);
        console.log("oec = 0 - num1: "+num1);
        operacion = "resta";
        reiniciarPantalla();
        opEnCadena = 1;
        break;
      } else {
        num1 = num1 - parseFloat(pantalla.innerHTML);
        console.log("oec = 1 - num1: "+num1);
        operacion = "resta";
        reiniciarPantalla();
        break;
      }
    case "por":
      if (opEnCadena == 0) {
        num1 = parseFloat(pantalla.innerHTML);
        console.log("oec = 0 * num1: "+num1);
        operacion = "mult";
        reiniciarPantalla();
        opEnCadena = 1;
        break;
      } else {
        num1 = num1 * parseFloat(pantalla.innerHTML);
        console.log("oec = 1 * num1: "+num1);
        operacion = "mult";
        reiniciarPantalla();
        break;
      }
    case "dividido":
      if (opEnCadena == 0) {
        num1 = parseFloat(pantalla.innerHTML);
        console.log("oec = 0 / num1: "+num1);
        operacion = "div";
        reiniciarPantalla();
        opEnCadena = 1;
        break;
      } else {
        num1 = num1 / parseFloat(pantalla.innerHTML);
        console.log("oec = 1 / num1: "+num1);
        operacion = "div";
        reiniciarPantalla();
        break;
      }
    default:
  }
}
//------------------------------------------//

//Función para mostrar el resultado de las operaciones//
function resultadoOperaciones(){
  switch (operacion) {
    case "suma":
      num2 = parseFloat(pantalla.innerHTML);
      console.log("= + num2: "+num2);
      resultado = num1 + num2;
      pantalla.innerHTML = resultado.toString().slice(0, 8);
      operacion = "igual";
      signo = "+";
      opEnCadena = 0;
      break;
    case "resta":
      num2 = parseFloat(pantalla.innerHTML);
      console.log("= - num2: "+num2);
      resultado = num1 - num2;
      pantalla.innerHTML = resultado.toString().slice(0, 8);
      operacion = "igual";
      signo = "-";
      opEnCadena = 0;
      break;
    case "mult":
      num2 = parseFloat(pantalla.innerHTML);
      console.log("= * num2: "+num2);
      if (resultado == 0) {
        resultado++
      }
      resultado = num1 * num2;
      pantalla.innerHTML = resultado.toString().slice(0, 8);
      operacion = "igual";
      signo = "*";
      opEnCadena = 0;
      break;
    case "div":
      num2 = parseFloat(pantalla.innerHTML);
      console.log("= / num2: "+num2);
      if (resultado == 0) {
        resultado++
      }
      resultado = num1 / num2;
      pantalla.innerHTML = resultado.toString().slice(0, 8);
      operacion = "igual";
      signo = "/";
      opEnCadena = 0;
      break;
    case "igual":
      if (signo == "+") {
        resultado = resultado + num2
      }
      if (signo == "-") {
        resultado = resultado - num2
      }
      if (signo == "*") {
        resultado = resultado * num2
      }
      if (signo == "/") {
        resultado = resultado / num2
      }
      pantalla.innerHTML = resultado.toString().slice(0, 8);
      opEnCadena = 0;
      break;
    default:
  }
}
//----------------------------------------------------//
//***********************************************************************//



//**************************** INICIAR EVENTOS **************************//
Calculadora.init();
//***********************************************************************//
