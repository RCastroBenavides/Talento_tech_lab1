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
		let x2 = document.getElementById("IBSN").value;
		for (let x=0 ; x < datos.length ; x++) {
				for (let c in datos[x]) {
					 if ( datos[x].id == x2) {
						 console.log ( c+ "--" +datos[x].email);
						 e.value = datos[x].email;
						 //e.value = datos[x].email;
						 
					 }
				}
		}
					 } catch (error) {
console.log('Error:', error);
    }
}

function getData() {
	e = document.getElementById("IBSN") ;
	//t = document.getElementById("titulo") ;
	//a = document.getElementById("autor") ;
	//p = document.getElementById("pags") ;
	//f = document.getElementById("fecha") ;
	//n = document.getElementById("nejempl") ;
	//nd = document.getElementById("Dejempl") ;
	//r = document.getElementById("res") ;
	//consultar (ib,t,a,p,f,n,nd,r);
	consultar (e);
	return(true);
	
}


		