//helpers 
function toUpCase(string){
	return string.toUpperCase();
}
function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function clickDriver(item){
	// console.log(item);


	window.location.href = "http://localhost:8080/profil.html?id=" + item.ID
	// document.getElementById("body").innerHTML="salut"
}
// step 1 : récupérer la liste:
var maListe = [];
maListe = Liste;

console.log(maListe);

// step 2 : trouver le bon container

var monUl = document.getElementById("listeContainer");
// console.log(monUl);

console.log(maListe.length);
// step3 : parcourir les données et effectuer le traitement sur chaque getElementById
// option 1 (boucle), ForEach
maListe.forEach(function(item) {
	var monLi = document.createElement('li');
	// console.log(monLi);
	monLi.setAttribute('userId', item.ID);
	monLi.innerHTML = "<span>"+ toUpCase(item.Nom) + "\u0020" + item.Prenom.capitalize() + " </span>";

	// ajout de la gestion de l'event click

	monLi.addEventListener("click", function(event){
	    console.log('je clique');
	    // console.log(event.target);
	    // console.log(item);
	    clickDriver(item);
	});

	monUl.appendChild(monLi);
});




