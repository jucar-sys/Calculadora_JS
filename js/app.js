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
var cantidad = 0;
var operacion = "ninguna";
var valorIgual = 0;

var igualSuma = 0;
var igualResta = 0;
var igualMultiplicacion = 0;
var igualDivision = 0;
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
  cantidad = 0;
  operacion = "ninguna";
  igualSuma = 0;
  igualResta = 0;
  igualMultiplicacion = 0;
  igualDivision = 0;
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
      cantidad = parseInt(pantalla.innerHTML);
      console.log("\n1.+ Valor de CANTIDAD al presionar +: "+cantidad);
      console.log("2.+ Valor de VALORIGUAL al presionar +: "+valorIgual);
      console.log("3.+ Valor de RESULTADO al presionar +: "+valorIgual);
      resultado = (resultado + cantidad) - valorIgual;
      console.log("4.+ Valor de RESULTADO al sumar (RESULTADO + CANTIDAD) - VALORIGUAL desde +: "+resultado);
      operacion = "suma";
      reiniciarPantalla();
      break;
    case "menos":
      cantidad = parseInt(pantalla.innerHTML);
      if (resultado == 0) {
        console.log(cantidad);
        resultado = cantidad;
        console.log(resultado);
        operacion = "resta";
        reiniciarPantalla();
      }else {
        console.log(cantidad);
        console.log(resultado);
        resultado = resultado - cantidad;
        console.log(resultado);
        operacion = "resta";
        reiniciarPantalla();
      }
      break;
    case "por":
      cantidad = parseInt(pantalla.innerHTML);
      if (resultado == 0) {
        resultado++
      }
      console.log(resultado);
      resultado = resultado * cantidad;
      operacion = "mult";
      reiniciarPantalla();
      break;
    case "dividido":
      cantidad = parseInt(pantalla.innerHTML);
      console.log(cantidad);
      if (resultado == 0) {
        resultado++
      }
      console.log(resultado);
      resultado = resultado / cantidad;
      operacion = "div";
      reiniciarPantalla();
      break;
    default:
  }
}
//------------------------------------------//

//Función para mostrar el resultado de las operaciones//
function resultadoOperaciones(){
  if (operacion == "suma") {
    cantidad = parseInt(pantalla.innerHTML);
    valorIgual = cantidad;
    console.log("\n1.= Valor de CANTIDAD al presionar =: "+cantidad);
    console.log("2.= Valor de VALORIGUAL al presionar =: "+valorIgual);
    console.log("3.= Valor de RESULTADO al presionar =: "+resultado);
    resultado = resultado + cantidad;
    console.log("4.= Valor de RESULTADO al operar RESULTADO + CANTIDAD desde el =: "+resultado);
    pantalla.innerHTML = resultado.toString().slice(0, 8);
  }
  if (operacion == "resta") {
    cantidad = parseInt(pantalla.innerHTML);
    resultado = resultado - cantidad;
    pantalla.innerHTML = resultado.toString().slice(0, 8);
  }
  if (operacion == "mult") {
    cantidad = parseInt(pantalla.innerHTML);
    resultado = resultado * cantidad;
    pantalla.innerHTML = resultado.toString().slice(0, 8);
  }
  if (operacion == "div") {
    cantidad = parseInt(pantalla.innerHTML);
    resultado = resultado / cantidad;
    pantalla.innerHTML = resultado.toString().slice(0, 8);
  }
}
//----------------------------------------------------//
//***********************************************************************//



//**************************** INICIAR EVENTOS **************************//
Calculadora.init();
//***********************************************************************//
