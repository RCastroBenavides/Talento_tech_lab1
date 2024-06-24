const bib = [ {
	ISBN: "978-3-16-148410-0",
    Titulo: "El misterio del libro perdido",
    Autor: "Juan Pérez",
    Fecha: "2022-05-15",
    Pags: 320,
    Ejempl: 5,
    Ejempld: 2,
    Resumen: "Un apasionante thriller sobre la búsqueda de un antiguo manuscrito que podría cambiar la historia.",
    "Tipo de medio del ejemplar": "físico"
  },
  {
    ISBN: "978-0-12-345678-9",
    Titulo: "Tecnologías del Futuro",
    Autor: "María García",
	Fecha: "2021-09-10",
    Pags: 250,
    Ejempl: 8,
    Ejempld: 4,
    Resumen: "Una exploración de las innovaciones tecnológicas que definirán las próximas décadas.",
    "Tipo de medio del ejemplar": "electrónico"
  },
  {
    ISBN: "978-1-234-56789-7",
    Titulo: "Cocina Vegana para Todos",
    Autor: "Ana López",
    Fecha: "2019-03-25",
    Pags: 180,
    Ejempl: 10,
    Ejempld: 7,
    Resumen: "Deliciosas recetas veganas para disfrutar en cualquier ocasión.",
    "Tipo de medio del ejemplar": "físico"
  },
  {
    ISBN: "978-4-567-89012-3",
    Titulo: "Historia del Arte Moderno",
    Autor: "Carlos Fernández",
    Fecha: "2020-11-30",
    Pags: 400,
    Ejempl: 3,
    Ejempld: 1,
    Resumen: "Un recorrido detallado por los principales movimientos del arte moderno.",
    "Tipo de medio del ejemplar": "electrónico"
  },
  {
    ISBN: "978-5-678-90123-4",
    Titulo: "Aprende Python en 30 Días",
    Autor: "Laura Martínez",
    Fecha: "2023-01-20",
    Pags: 150,
    Ejempl: 6,
    Ejempld: 3,
    Resumen: "Una guía paso a paso para dominar el lenguaje de programación Python.",
    "Tipo de medio del ejemplar": "físico"
  }
				];
var tam = bib.length
function consultar(ib,t,a,p,f,n,nd,r) 
{	
	var x = 0;
if (document.getElementById("IBSN").value !=""){
		let x1 = document.getElementById("IBSN").value;
		for(i=0; i < tam; i++) {
				if(bib[i].ISBN==x1){
				ib.value = bib[i].ISBN;
				t.value = bib[i].Titulo;
				a.value = bib[i].Autor;
				p.value = bib[i].Pags;
				f.value = bib[i].Fecha;
				n.value = bib[i].Ejempl;
				nd.value = bib[i].Ejempld;
				r.value = bib[i].Resumen;
				x = 1;
				
		}
		}
		if (x==0){
			alert("NO TENEMOS EL VOLUMEN DISPONIBLE");
		}
				}
else if(document.getElementById("Titulo").value != ""){
		let x2 = document.getElementById("Titulo").value;
		for(i=0; i < tam; i++) {
		if(bib[i].Titulo == x2){
			ib.value = bib[i].ISBN;
			t.value = bib[i].Titulo;
			a.value = bib[i].Autor;
			p.value = bib[i].Pags;
			f.value = bib[i].Fecha;
			n.value = bib[i].Ejempl;
			nd.value = bib[i].Ejempld;
			r.value = bib[i].Resumen;
			x = 1;
		}}
	if (x==0){
			alert("NO TENEMOS EL VOLUMEN DISPONIBLE");
	}
}
else if (document.getElementById("Titulo").value == "" || document.getElementById("IBSN").value == ""){
		alert("NO HA DIGITADO ISBN O TITULO");
		}
}

function getData() {
	let ib = document.getElementById("IBSN") ;
	let t = document.getElementById("Titulo") ;
	let a = document.getElementById("autor") ;
	let p = document.getElementById("pags") ;
	let f = document.getElementById("fecha") ;
	let n = document.getElementById("nejempl") ;
	let nd = document.getElementById("Dejempl") ;
	let r = document.getElementById("res") ;
	consultar (ib,t,a,p,f,n,nd,r);
return(true);
}
function getData2() {
	let ib = document.getElementById("IBSN") ;
	let t = document.getElementById("Titulo") ;
	let a = document.getElementById("autor") ;
	let p = document.getElementById("pags") ;
	let f = document.getElementById("fecha") ;
	let n = document.getElementById("nejempl") ;
	let nd = document.getElementById("Dejempl") ;
	let r = document.getElementById("res") ;
	Guardar (ib,t,a,p,f,n,nd,r);
return(true);
}
function Guardar(ib,t,a,p,f,n,nd,r) {
if (document.getElementById("IBSN").value !=""&& document.getElementById("Titulo").value!=""&& document.getElementById("autor").value!=""){
	bib.push({ISBN: ib.value,Titulo: t.value, Autor: a.value, Fecha: f.value, Pags: p.value, Ejempl: n.value, Ejempld: nd.value, Resumen: r.value});
	tam = tam + 1
	alert("Registro guardado");
	alert("Ahora tenemos Registros: "+ tam);
	}
else{
	alert ("Los datos de ISBN, Titulo y Autor son Obligatorios para guardar");
}
}
function actualizarTabla() {
    // Limpiar la tabla
    tablaLibros.innerHTML = '';
    
    // Agregar cada libro como una fila de la tabla
    bib.forEach((libro, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${libro.ISBN}</td>
            <td>${libro.Titulo}</td>
            <td>${libro.Autor}</td>
            <td>${libro.Fecha}</td>
            <td>${libro.Pags}</td>
            <td>${libro.Ejempl}</td>
            <td>${libro.Ejempld}</td>
        `;
        tablaLibros.appendChild(fila);
    });
}