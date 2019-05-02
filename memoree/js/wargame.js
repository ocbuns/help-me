var contatore=0;
if (contatore<2){
	contatore++;
}


//Bottone non cliccabile dopo il primo uso
function ConfirmSubmit(sender)
    {
        sender.disabled = true;
        return;
    }
//Cose non cliccabili dopo l'uso del bottone
function Enabled() {
        //document.getElementById("exodiaobliterate").disabled = false;
}	
	var arraymio=[
	{nome:"scout"//= document.getElementById("1");
	img:="../img/scout.png";}
	{nome:"pyro"// document.getElementById("2");
	img="../img/pyro.jpg";}
	{nome:"demoman"// document.getElementById("3");
	img:"../img/demoman.jpg";}
	{nome:"heavy"// = document.getElementById("4");
	img:"../img/heavy.jpg";}
	{nome:"engineer"// = document.getElementById("5");
	img:"../img/engineer.jpg";}
	{nome:"medic"// = document.getElementById("6");
	img:"../img/medic.jpg";}
	{nome:"sniper"// = document.getElementById("7");
	img:"../img/sniper.jpg";}
	{nome:"spy"// = document.getElementById("8");
	img:"../img/spy.jpg";}
	
function Shuffle(){
var arraymio = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var miolunghezza = arraymio.length - 1;
var swap; // per swappare
var temp; // temporaneo
for (i = miolunghezza; i > 0; i--) { 
    swap = Math.floor(Math.random() * i);
    temp = someArray[i];
    arraymio[i] = arraymio[swap];
    arraymio[swap] = temp;
}
}
function Gira(sender){
	