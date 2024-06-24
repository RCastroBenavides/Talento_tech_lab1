//import (sumar,restar) from './JS_new.js'
//var bnt = document.getelement
/*window.onload = function () {
	p= document.getElementsByTagName("p");
	p[2].addEventListener('mouseover'.saludar());
	}
function saludar(){
	var x = Math.floor(Math.random());
	alert (x);
}

function multx2( lst,callback ) {
	setTimeout( () => {
		let rta = lst.map(num => num * 2);
		callback( rta ) ;
	}, 5000 ) ;
}

function verRta( rta ) {
    console.log( 'Resultado procesado:', rta ) ;
}


function saludar2() {
	console.log( "HOLA" ) ;
}*/
async function consultar(e) {
    try {
        const rta = await fetch('http://jsonplaceholder.typicode.com/posts/1/comments', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!rta.ok) {
            throw new Error('Red error: ' + rta.status);
        }
        const datos = await rta.json();
        console.log( rta.status + "---" + JSON.stringify(datos));
		for (let x=0 ; x < datos.length ; x++) {
				for (let c in datos[x]) {
					 if ( datos[x].id == 3) {
						 console.log ( c+ "--" +datos[x].email);
						 e.value = datos[x].email;
					 }
				}
		}
					 } catch (error) {
console.log('Error:', error);
    }
}
function getData() {
	e = document.getElementById("email") ;
	consultar (e);
	return(true);
	
}

function ejVar() {
  elemento = document.getElementsByTagName("p");
  elemento[0].addEventListener("mouseover", msg);
}
function msg() {
  console.log("pruebaaaaa");
}
