// VARIABLES <span>
var nombre = document.getElementById("nombre-paciente");
var apellido = document.getElementById("apellido-paciente");
var edad = document.getElementById("edad-paciente");
var genero = document.getElementById("genero-paciente");
var ciudad = document.getElementById("ciudad-paciente");
var pais = document.getElementById("pais-paciente");

var objetoPaciente = JSON.parse(localStorage.getItem("data"));	

//Imprimimos en el <span>
nombre.innerHTML = objetoPaciente.nombre;
apellido.innerHTML = objetoPaciente.apellido;
edad.innerHTML = objetoPaciente.edad;
genero.innerHTML = objetoPaciente.genero;
ciudad.innerHTML = objetoPaciente.ciudad;
pais.innerHTML = objetoPaciente.pais;

document.getElementById("bt-edit").addEventListener("click", function(e){
	e.preventDefault();
	//Obteniendo los valores del span
	var nom = nombre.innerHTML;
	var ape = apellido.innerHTML;
	var ed = edad.innerHTML;
	var gen = genero.innerHTML;
	var ciu = ciudad.innerHTML;
	var pai = pais.innerHTML;
	var inputsEditar = document.getElementsByClassName("input-editar");	

	inputsEditar[0].value = nom;
	inputsEditar[1].value = ape;
	inputsEditar[2].value = ed;
	inputsEditar[3].value = gen;
	inputsEditar[4].value = ciu;
	inputsEditar[5].value = pai;

	var templatePaciente = document.getElementById("template-paciente");
	templatePaciente.style.display = "block";
	var templateBienvenida = document.getElementById("bienvenida-paciente");
	templateBienvenida.style.display = "none";

});

document.getElementById("bt-save").addEventListener("click", function(e){
	e.preventDefault();

	var inputsEditar = document.getElementsByClassName("input-editar");	
/*
	inputsEditar[0].value = objetoPaciente.nombre;
	inputsEditar[1].value = objetoPaciente.apellido;
	inputsEditar[2].value = objetoPaciente.edad;
	inputsEditar[3].value = objetoPaciente.genero;
	inputsEditar[4].value = objetoPaciente.ciudad;
	inputsEditar[5].value = objetoPaciente.pais;*/

	if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0 && inputsEditar[4].length!=0 && inputsEditar[5].length!=0){
	//Obteniendo los valores del input
		objetoPaciente.nombre=inputsEditar[0].value;
		objetoPaciente.apellido= inputsEditar[1].value
		objetoPaciente.edad = inputsEditar[2].value;
		objetoPaciente.genero = inputsEditar[3].value;
		objetoPaciente.ciudad = inputsEditar[4].value
		objetoPaciente.pais = inputsEditar[5].value;

		localStorage.setItem("data",JSON.stringify(objetoPaciente));

		var templatePaciente = document.getElementById("template-paciente");
		templatePaciente.style.display = "none";
		var templateBienvenida = document.getElementById("bienvenida-paciente");
		templateBienvenida.style.display = "block";
	}else{
		alert("Todos los campos son obligatorios.");
	}
});













