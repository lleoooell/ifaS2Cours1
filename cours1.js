// step 1 : récupérer la liste:
var maListe = [];
maListe = Liste;

console.log(maListe);

// step 2 : trouver le bon container

var monUl = document.getElementById("listeContainer");
console.log(monUl);

console.log(maListe.length);
// step3 : parcourir les données et effectuer le traitement sur chaque getElementById
// option 1 (boucle), ForEach
maListe.forEach(function(item) {
	var monLi = document.createElement('li');
	console.log(monLi);
	monLi.innerHTML = "<span>"+ item.Nom + "\u0020" + item.Prenom + " </span>";
	monUl.appendChild(monLi);
});

// option 2 (boucle), For
// for (var i = 0; i < maListe.length; i++) {
  	
//   	console.log(maListe[i].Nom);

// }

