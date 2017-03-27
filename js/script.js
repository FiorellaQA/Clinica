//Variables
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

//Eventos
	document.getElementById("bt").addEventListener("click",function(e){
		e.preventDefault();
		var name = document.getElementById("name").value;
		var lastname = document.getElementById("lastname").value;
		var age = document.getElementById("age").value;
		var country = document.getElementById("country").value;
		var city = document.getElementById("city").value;
		var gender = document.getElementById("gender").value;
		var records = document.getElementById("records");
		if(name.length !=0 && lastname.length != 0 && age.length != 0 && country.length != 0 && city.length != 0 && gender.length !=0){
			var nuevoPaciente = new Paciente(name, lastname, age, country, city, gender);
			arrayPacientes.push(nuevoPaciente); 
			records.innerHTML += "<div class='paciente'>" + nuevoPaciente.ficha() + "</div>";
			document.getElementById("form1").reset();
			indicacion.innerHTML = "";
		}else{	
			var indicacion = document.getElementById("indicacion");
			indicacion.innerHTML = "*Todos los campos son obligatorios.</br>";
		}


	});

	var array = document.getElementsByClassName("input-registro");

	for(i = 0 ; i < array.length; i++){
		array[i].addEventListener("blur", validationInput);
	}

	function validationInput(){
		if(this.value.trim().length === 0){
			this.nextElementSibling.innerHTML = "</br>*Este campo es obligatorio";
		}else{
			this.nextElementSibling.innerHTML = "";		
		}
		var datoCorrecto = this.value.charAt(0).toUpperCase()+this.value.substring(1).toLowerCase();
		this.value=datoCorrecto;
		var indicacion = document.getElementById("indicacion");
			indicacion.innerHTML = "";

	}
	function soloLetras(e){
		var codigoTecla = e.keyCode;
		console.log(codigoTecla);
		if((codigoTecla>=97 && codigoTecla<=122)||(codigoTecla>=65 && codigoTecla<=90)||codigoTecla==39 || codigoTecla == 32){
			this.nextElementSibling.innerHTML = "";
			return true;
		}else{
			this.nextElementSibling.innerHTML = "*Este campo solo permite letras";
			return false;
		}
	}

	function soloNumeros(e){
		var codigoTecla = e.keyCode;
		var longitud = this.value.length;
		if(longitud==1){

		}
	}






















	

	



