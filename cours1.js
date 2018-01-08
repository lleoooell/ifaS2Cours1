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

var form = document.getElementById("form-id");


form.addEventListener("submit", function(event){
	console.log(form.elements);
	event.preventDefault();
	var newUser = {};

	for(i = 0; i < form.elements.length; i++ ){
		if(form.elements[i].value !== "submit"){
			console.log(form.elements[i].value);
			console.log(form.elements[i].name);
			newUser[form.elements[i].name] = form.elements[i].value;

			
		}
	}
	console.log(newUser);
	console.log(maListe);
	maListe.push(newUser);
	console.log(maListe);
	var li = document.createElement("li");
	li.innerHTML = newUser.Nom;
	monUl.appendChild(li);

})
// document.getElementById("button-id").addEventListener("click", function () {
//   // form.submit();

//   console.log("form submit");
//   console.log(form.elements);
//   form.elements.forEach(function(input){
//   	console.log(input.value);
//   })

// });


