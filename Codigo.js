const  formulario = document.getElementById("formulario-registro"); 
const tarjetadeResultado = document.getElementById("Resultados-Datos");

formulario.addEventListener('submit' , function(e){
	e.preventDefault();
	
	const ValorNombre = document.getElementById('Nombre').value;
	const Apellido = document.getElementById('Apellido').value;
	const Matricula = document.getElementById('Matricula').value;
	const Direccion = document.getElementById('Direccion').value;
	const Telefono = document.getElementById('Telefono').value;
	
	tarjetadeResultado.innerHTML = `
	
	 <h3>Datos Guardados</h3>
	 <p><strong>Nombre:</strong>${ValorNombre}</p>
	 <p><strong>Apellido:</strong>${Apellido}</p>
	 <p><strong>Matricula:</strong>${Matricula}</p>
	 <p><strong>Direccion:</strong>${Direccion}</p>
	 <p><strong>Telefono:</strong>${Telefono}</p>
	 
	`;
	formulario.reset();
	
});	
	