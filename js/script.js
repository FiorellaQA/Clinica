//VARIABLES
	function Paciente (nombre, apellido, edad, pais, ciudad, genero){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.pais = pais;
		this.ciudad = ciudad;
		this.genero = genero;
		this.ficha = function (){
					return  (	"Nombre: " + this.nombre + "</br>" +
								"Apellido: " + this.apellido + "</br>" +
								"Edad: " + this.edad + "</br>" +
								"País: " + this.pais);
    	};
	}

	var arrayPacientes = [];
	var name1 = document.getElementById("name");
	var lastname = document.getElementById("lastname");
	var edad = document.getElementById("age");
	var pais = document.getElementById("country");
	var ciudad = document.getElementById("city");
	var genero = document.getElementById("gender");
//FUNCIONES
	function soloLetras(e){
		var codigoTecla = e.keyCode;
		if((codigoTecla>=97 && codigoTecla<=122)||(codigoTecla>=65 && codigoTecla<=90)||codigoTecla==39 || codigoTecla == 32){
			this.nextElementSibling.innerHTML = "";
			return true;
		}else{
			this.nextElementSibling.innerHTML = "<br>*Este campo solo permite letras";
			return false;
		}
	}
	function soloNumeros(e){
		var codigoTecla = e.keyCode;
		var longitud = this.value.length;
		if(codigoTecla>=48 && codigoTecla<=57 && this.value.length<2){
			this.nextElementSibling.innerHTML = "";
			return true; 
		}else{
			this.nextElementSibling.innerHTML = "<br>*Este campo solo permite números de 2 digitos";
			return false;
		}
		//Pasa al siguiente input
		// if(longitud==2){
		// 	this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
		// }
	}
	function validationInput(){
		if(this.value.trim().length === 0){
			this.nextElementSibling.innerHTML = "</br>*Este campo es obligatorio";
		}else{
			this.nextElementSibling.innerHTML = "";		
		}
		//CONVIERTE LA PRIMERA LETRA DE UNA PALABRA A MAYUSCULA 
		// var datoCorrecto = this.value.charAt(0).toUpperCase()+this.value.substring(1).toLowerCase();
		// this.value=datoCorrecto;
		//CONVIERTE LA PRIMERA LETRA DE 2 O MAS PALABRAS A MAYUSCULA
		if(this.getAttribute("type")=="text"){
			var arrDato = this.value.split(" ");
			var datoConMayusculas = "";
		for(var i = 0; i<arrDato.length;i++){
				datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
		}
			this.value=datoConMayusculas;
		}
		//Limpia el campo indicacion cuando el usuario ya esta escribiendo
		var indicacion = document.getElementById("indicacion");
			indicacion.innerHTML = "";
	}
//EVENTOS
	document.getElementById("bt").addEventListener("click",function(e){
		e.preventDefault();
		var name = document.getElementById("name").value;
		var lastname = document.getElementById("lastname").value;
		var age = document.getElementById("age").value;
		var country = document.getElementById("country").value;
		var city = document.getElementById("city").value;
		var gender = document.getElementById("gender").value;
		var records = document.getElementById("records");
		var indicacion = document.getElementById("indicacion");
		if(name.length !=0 && lastname.length != 0 && age.length != 0 && country.length != 0 && city.length != 0 && gender.length !=0){
			var nuevoPaciente = new Paciente(name, lastname, age, country, city, gender);
			//arrayPacientes.push(nuevoPaciente); 
			localStorage.setItem("data",JSON.stringify(nuevoPaciente));
			//records.innerHTML += "<div class='paciente'>" + nuevoPaciente.ficha() + "</div>";
			document.getElementById("form1").reset();
			indicacion.innerHTML = "";
			window.location = "bienvenido.html";
		}else{	
			
			indicacion.innerHTML = "*Todos los campos son obligatorios.</br>";
		}
	});
	name1.onkeypress=soloLetras;
	lastname.onkeypress=soloLetras;
	edad.onkeypress = soloNumeros;
	pais.onkeypress = soloLetras;
	ciudad.onkeypress = soloLetras;
	genero.onkeypress = soloLetras;
	var array = document.getElementsByClassName("input-registro");
	for(i = 0 ; i < array.length; i++){
		array[i].addEventListener("blur", validationInput);
	}



























	

	



