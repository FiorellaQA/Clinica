var nombre = document.getElementById("nombre-paciente");
var apellido = document.getElementById("apellido-paciente");
var edad = document.getElementById("edad-paciente");
var genero = document.getElementById("genero-paciente");
var ciudad = document.getElementById("ciudad-paciente");
var pais = document.getElementById("pais-paciente");
var inputsEditar = document.getElementsByClassName("input-editar");	
var objetoPaciente = JSON.parse(localStorage.getItem("data"));	

nombre.innerHTML = objetoPaciente.nombre;
apellido.innerHTML = objetoPaciente.apellido;
edad.innerHTML = objetoPaciente.edad;
genero.innerHTML = objetoPaciente.genero;
ciudad.innerHTML = objetoPaciente.ciudad;
pais.innerHTML = objetoPaciente.pais;


document.getElementById("bt-edit").addEventListener("click", btEditar);
document.getElementById("bt-edit").addEventListener("click", btGuardar);



function btEditar(){
	//Obteniendo los valores del span
	var nom = nombre.innerHTML;
	var ape = apellido.innerHTML;
	var ed = edad.innerHTML;
	var gen = genero.innerHTML;
	var ciu = ciudad.innerHTML;
	var pai = pais.innerHTML;

	

	inputsEditar[0].value = nom;
	inputsEditar[1].value = ape;
	inputsEditar[2].value = ed;
	inputsEditar[3].value = gen;
	inputsEditar[4].value = ciu;
	inputsEditar[5].value = pai;

	var templatePaciente = document.getElementById("template-paciente");
	templatePaciente.style.display = "block" ;
	var templateBienvenida = document.getElementById("bienvenida-paciente");
	templateBienvenida.style.display = "none";
}
function btGuardar(){
	if(inputstEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && 
		inputsEditar[3].length!=0 && inputsEditar[4].length!=0 && inputsEditar[5].length!=0){
	//Obteniendo los valores del input
	var n = inputstEditar[0].value;
	var a = inputstEditar[1].value;
	var e = inputstEditar[2].value;
	var g = inputstEditar[3].value;
	var c = inputstEditar[4].value;
	var p = inputstEditar[5].value;

}

}












