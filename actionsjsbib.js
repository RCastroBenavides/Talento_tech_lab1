
function buscar2() 
{	let bib = [{ISBN:"RRYY",titulo:"CIEN AÑOS",autor:"GABO"},{ISBN:"RRYY2",titulo:"CIEN AÑOS2",autor:"GABO"},{ISBN:"RRYY3",titulo:"CIEN AÑOS3",autor:"GABO"}];
	alert("DATOS: " + bib[0].ISBN +" "+bib[0].titulo+" "+ bib[0].autor)	;
	//elemento = document.getElementById("cont1");
	//elemento.value = "Hola campeon";
	//elementos = document.getElementsByClassName(".cont1");
	//for (let x=0;x < elementos.length ; x++) {
	//elementos.innerHTML = "MILLOS CAMPEON"}
	document.getElementById("cont1").innerHTML.value = "Pruebassssssss";
if (document.getElementById("IBSN").value !=""){
	let x1 = document.getElementById("IBSN").value;
	alert("CAJA ISBN: " + x1);
	for(i=0; i<=2; i++) {
	if(bib[i].ISBN==x1){
		alert("Encontrado en posición " + i );
		//document.getElementById("titulo").value=bib[i].titulo;
		break;
		//document.getElementById("cont2").innerHTML=bib[i].ISBN;
		let heading = document.getElementById('cont2');
		heading.textContent = 'This is a heading';
	}}}
else if(document.getElementById("titulo").value != ""){
	let x1 = document.getElementById("titulo").value;
	alert("CAJA TITULO: " + x1);
	for(i=0; i<=2; i++) {
	if(bib[i].titulo==x1){
		alert("Encontrado en posición " + i );
		break;
		//document.getElementById("cont2").innerHTML=bib[i].ISBN;
		let heading = document.getElementById('cont2');
		heading.textContent = 'This is a heading';
	}}}
else{
	alert("No hay dato");
}
}

		