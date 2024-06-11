
function buscar2() 
{	let bib = [{ISBN:"9781234567897",titulo:"CIEN AÑOS DE SOLEDAD",autor:"G. CARCIA M."},{ISBN:"9781234567898",titulo:"LA MARIA",autor:"JORGE ISAACS"},{ISBN:"9781234567899",titulo:"FABULAS",autor:"RAFAEL POMBO"},{ISBN:"9781234567900",titulo:"LA VORAGINE",autor:"JOSE EUTASIO RIVERA"},{ISBN:"9781234567901",titulo:"EL OLVIDO QUE SEREMOS",autor:"HECTOR ABAD"}];
	var x = 0
	//alert("DATOS: " + bib[0].ISBN +" "+bib[0].titulo+" "+ bib[0].autor);
	if (document.getElementById("IBSN").value !=""){
		let x1 = document.getElementById("IBSN").value;
		//	alert("CAJA ISBN: " + x1);
		for(i=0; i<=5; i++) {
		if(bib[i].ISBN==x1){
			alert("Hemos encontrado el libro en la posición " + i + ", con el titulo: " + bib[i].titulo + ", y autor: " + bib[i].autor + " por favor solicitelo al bibliotecario");
			x = 1;
			alert(x);
		}}}
	else if(document.getElementById("titulo").value != ""){
		let x2 = document.getElementById("titulo").value;
		//alert("CAJA TITULO: " + x1);
		for(i=0; i<=5; i++) {
		if(bib[i].titulo==x2){
			alert("Hemos encontrado el libro en la posición " + i + ", con el titulo: " + bib[i].titulo + ", y autor: " + bib[i].autor + " por favor solicitelo al bibliotecario");
			x = 1;
			alert(x);
		}}}
	else if (document.getElementById("titulo").value == "" || document.getElementById("IBSN").value == ""){
		alert("NO HA DIGITADO ISBN O TITULO");}
	else if (x!=1){
			alert("NO TENEMOS EL VOLUMEN DISPONIBLE");
	}
	alert(x);
	}

		