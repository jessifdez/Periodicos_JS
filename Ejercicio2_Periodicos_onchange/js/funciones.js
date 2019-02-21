function mostrarEnlace()
{//1ºTengo que cargarme (removeChild)
//Ver si ya hay un a
var lista_enlaces=document.getElementsByTagName("a");
if(lista_enlaces.length!=0)
	{
	var padre_enlace=lista_enlaces[0].parentNode;
	padre_enlace.removeChild(lista_enlaces[0]);
	}
if(document.getElementById("elpais").)
	{	var seleccionado=document.getElementById("elpais").value;
		var obj_enlace=document.createElement("a");
		obj_enlace.href=seleccionado;
		obj_enlace.innerHTML="Ir a "+seleccionado;
		document.getElementsByTagName("body")[0].appendChild(obj_enlace);
	}else if(document.getElementById("abc").selected)
	{	var seleccionado=document.getElementById("abc").value;
		var obj_enlace=document.createElement("a");
		obj_enlace.href=seleccionado;
		obj_enlace.innerHTML="Ir a "+seleccionado;
		document.getElementsByTagName("body")[0].appendChild(obj_enlace);
	}else if(document.getElementById("elmundo").selected)
	{	var seleccionado=document.getElementById("elmundo").value;
		var obj_enlace=document.createElement("a");
		obj_enlace.href=seleccionado;
		obj_enlace.innerHTML="Ir a "+seleccionado;
		document.getElementsByTagName("body")[0].appendChild(obj_enlace);
	}
}