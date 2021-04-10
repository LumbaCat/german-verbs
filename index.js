class Mot {
  constructor(fr, ru) {
  	this.fr = fr;
	this.ru = ru;
	
  }
}

var sections = new Array(9);
for (var i = 0; i < 9; i++)
{
	sections[i] = new Array();
}


function construireListes(){
	sections[0].push(new Mot("abandonner","aufgeben"));
	sections[0].push(new Mot("accepter","annehmen"));
	sections[0].push(new Mot("accompagner","begleiten/mitkommen"));
	sections[0].push(new Mot("acheter","kaufen"));
	sections[0].push(new Mot("allumer","anschalten"));
	sections[0].push(new Mot("améliorer","verbessern"));
	sections[0].push(new Mot("annuler","absagen"));
	sections[0].push(new Mot("apparaître","erscheinen"));
	sections[0].push(new Mot("appartenir","gehören"));
	sections[0].push(new Mot("appeler","rufen"));
	sections[0].push(new Mot("appeler par téléphone","anrufen"));
	sections[0].push(new Mot("apporter","bringen"));
	sections[0].push(new Mot("arrêtez","aufhören"));
	sections[0].push(new Mot("arriver","ankommen"));
	sections[0].push(new Mot("assassiner","umbringen"));
	sections[0].push(new Mot("atteindre","erreichen"));
	sections[0].push(new Mot("attendre","warten"));
	sections[0].push(new Mot("attraper","fangen"));
	sections[0].push(new Mot("autoriser","erlauben"));
	sections[0].push(new Mot("avaler","schlucken"));
	sections[0].push(new Mot("avoir confiance","vertrauen"));
	sections[0].push(new Mot("avoir le droit","dürfen"));
	sections[0].push(new Mot("avouer","gestehen"));
	sections[0].push(new Mot("bouger","bewegen"));

	sections[1].push(new Mot("briller","scheinen"));
	sections[1].push(new Mot("brûler","brennen"));
	sections[1].push(new Mot("cacher","verstecken"));
	sections[1].push(new Mot("casser","brechen"));
	sections[1].push(new Mot("célébrer","feiern"));
	sections[1].push(new Mot("ceuillir","pflücken"));
	sections[1].push(new Mot("changer","ändern"));
	sections[1].push(new Mot("changer (de train)","umsteigen"));
	sections[1].push(new Mot("chaser","jagen"));
	sections[1].push(new Mot("choisir","aussuchen"));
	sections[1].push(new Mot("coller","kleben"));
	sections[1].push(new Mot("commander","bestellen"));
	sections[1].push(new Mot("comparer","vergleichen"));
	sections[1].push(new Mot("comprendre","verstehen"));
	sections[1].push(new Mot("conduire","führen"));
	sections[1].push(new Mot("connaître","kennen"));
	sections[1].push(new Mot("connecter","anmelden"));
	sections[1].push(new Mot("construire","bauen"));
	sections[1].push(new Mot("continuer","fortsetzen"));
	sections[1].push(new Mot("couper","abschneiden"));
	sections[1].push(new Mot("courir","rennen"));
	sections[1].push(new Mot("créer","schaffen"));
	sections[1].push(new Mot("crier","schreien"));
	sections[1].push(new Mot("cuisinier","kochen"));

	sections[2].push(new Mot("décider","entscheiden"));
	sections[2].push(new Mot("déconnecter","abmelden"));
	sections[2].push(new Mot("découvrir","entdecken"));
	sections[2].push(new Mot("demander","bitten"));
	sections[2].push(new Mot("démarrer","losgehen"));
	sections[2].push(new Mot("déménager","umziehen"));
	sections[2].push(new Mot("dépenser","verbringen"));
	sections[2].push(new Mot("déranger","stören"));
	sections[2].push(new Mot("dessiner","zeichnen"));
	sections[2].push(new Mot("développer","entwickeln"));
	sections[2].push(new Mot("différencier","unterschieden"));
	sections[2].push(new Mot("discuter","reden"));
	sections[2].push(new Mot("économiser","sparen"));
	sections[2].push(new Mot("éduquer","bilden"));
	sections[2].push(new Mot("embêter","ärgern"));
	sections[2].push(new Mot("embrouiller","verwechseln"));
	sections[2].push(new Mot("emprunter","leihen"));
	sections[2].push(new Mot("endurer","aushalten"));
	sections[2].push(new Mot("profiter","geniessen"));
	sections[2].push(new Mot("entendre","hören"));
	sections[2].push(new Mot("enterrer","begraben"));
	sections[2].push(new Mot("entraîner","üben"));
	sections[2].push(new Mot("entrer","reingehen"));
	sections[2].push(new Mot("envoyer","schicken"));

	sections[3].push(new Mot("escalader","klettern"));
	sections[3].push(new Mot("essayer","versuchen"));
	sections[3].push(new Mot("éteindre","ausschalten"));
	sections[3].push(new Mot("étendre","erweitern"));
	sections[3].push(new Mot("être d'accord","zustimmen"));
	sections[3].push(new Mot("être debout","stehen"));
	sections[3].push(new Mot("étudier","studieren"));
	sections[3].push(new Mot("évaluer","bewerten"));
	sections[3].push(new Mot("expliquer","erklären"));
	sections[3].push(new Mot("faire","machen"));
	sections[3].push(new Mot("fermer","schliessen/zumachen"));
	sections[3].push(new Mot("finir son verre","austrinken"));
	sections[3].push(new Mot("fournir","liefern"));
	sections[3].push(new Mot("frapper","schlagen"));
	sections[3].push(new Mot("gagner","gewinnen"));
	sections[3].push(new Mot("garder","behalten"));
	sections[3].push(new Mot("goûter","schmecken"));
	sections[3].push(new Mot("habiter","wohnen"));
	sections[3].push(new Mot("haïr","hassen"));
	sections[3].push(new Mot("impressioner","beeindrucken"));
	sections[3].push(new Mot("insulter","beleidigen"));
	sections[3].push(new Mot("intéresser","interessieren"));
	sections[3].push(new Mot("interompre","unterbrechen"));
	sections[3].push(new Mot("inviter","einladen"));

	sections[4].push(new Mot("jurer","schwören"));
	sections[4].push(new Mot("laisser","lassen"));
	sections[4].push(new Mot("manquer","fehlen"));
	sections[4].push(new Mot("manquer (qlque chose)","verpassen"));
	sections[4].push(new Mot("marcher","laufen"));
	sections[4].push(new Mot("mentir","lügen"));
	sections[4].push(new Mot("mettre","setzen"));
	sections[4].push(new Mot("monter","steigen"));
	sections[4].push(new Mot("montrer","zeigen"));
	sections[4].push(new Mot("mourir","sterben"));
	sections[4].push(new Mot("nettoyer","reinigen"));
	sections[4].push(new Mot("nommer","nennen"));
	sections[4].push(new Mot("observer","erblicken"));
	sections[4].push(new Mot("obtenir","bekommen"));
	sections[4].push(new Mot("oublier","vergessen"));
	sections[4].push(new Mot("ouvrir","aufmachen"));
	sections[4].push(new Mot("parler","sprechen"));
	sections[4].push(new Mot("partager","teilen"));
	sections[4].push(new Mot("partir (en train)","abfahren"));
	sections[4].push(new Mot("passer (un examen)","bestehen"));
	sections[4].push(new Mot("perdre","verlieren"));
	sections[4].push(new Mot("placer","stellen"));
	sections[4].push(new Mot("pleurer","weinen"));
	sections[4].push(new Mot("porter","tragen"));

	sections[5].push(new Mot("pousser","drücken"));
	sections[5].push(new Mot("préférer","vorziehen"));
	sections[5].push(new Mot("prendre","nehmen"));
	sections[5].push(new Mot("préparer","vorbereiten"));
	sections[5].push(new Mot("présenter/imaginer","vorstellen"));
	sections[5].push(new Mot("prêter","verleihen"));
	sections[5].push(new Mot("prévoir","vorhersagen"));
	sections[5].push(new Mot("promettre","versprechen"));
	sections[5].push(new Mot("proposer","anbieten"));
	sections[5].push(new Mot("prospérer","gedeihen"));
	sections[5].push(new Mot("protéger","schützen"));
	sections[5].push(new Mot("prouver","beweisen"));
	sections[5].push(new Mot("raconter","erzählen"));
	sections[5].push(new Mot("ramasser","aufschnappen"));
	sections[5].push(new Mot("rapporter","holen"));
	sections[5].push(new Mot("rassembler","versammeln"));
	sections[5].push(new Mot("rater","durchfallen"));
	sections[5].push(new Mot("recevoir","erhalten"));
	sections[5].push(new Mot("recommander","empfehlen"));
	sections[5].push(new Mot("reconnaître","erkennen"));
	sections[5].push(new Mot("réfléchir","nachdenken"));
	sections[5].push(new Mot("refuser","ablehnen"));
	sections[5].push(new Mot("regarder","schauen"));
	sections[5].push(new Mot("régler","erledigen"));

	sections[6].push(new Mot("relier","verbinden"));
	sections[6].push(new Mot("remarquer","bemerken"));
	sections[6].push(new Mot("remplir","ergänzen"));
	sections[6].push(new Mot("rencontrer","treffen"));
	sections[6].push(new Mot("répéter","wiederholen"));
	sections[6].push(new Mot("répondre","antworten"));
	sections[6].push(new Mot("reporter","verschieben"));
	sections[6].push(new Mot("représenter","darstellen"));
	sections[6].push(new Mot("réserver","buchen"));
	sections[6].push(new Mot("ressembler","aussehen"));
	sections[6].push(new Mot("ressentir","fühlen"));
	sections[6].push(new Mot("rester","bleiben"));
	sections[6].push(new Mot("réussir","gelingen"));
	sections[6].push(new Mot("réveiller","aufwachen"));
	sections[6].push(new Mot("revenir","zurückkommen"));
	sections[6].push(new Mot("rire","lachen"));
	sections[6].push(new Mot("s'adresser à","sich wenden an"));
	sections[6].push(new Mot("s'asseoir","sich sitzen"));
	sections[6].push(new Mot("s'attendre à","erwarten"));
	sections[6].push(new Mot("sauter","springen"));
	sections[6].push(new Mot("sauver","retten"));
	sections[6].push(new Mot("se coucher","sich liegen"));
	sections[6].push(new Mot("se dépêcher","sich beeilen"));
	sections[6].push(new Mot("se déshabiller","sich ausziehen"));

	sections[7].push(new Mot("se lever","aufstehen"));
	sections[7].push(new Mot("se plaindre","sich beschweren"));
	sections[7].push(new Mot("se promener","spazieren gehen"));
	sections[7].push(new Mot("se rappeler (de)","erinnern (an)"));
	sections[7].push(new Mot("se reposer","sich ausruhen"));
	sections[7].push(new Mot("s'en aller","weggehen/wegfahren"));
	sections[7].push(new Mot("s'ennuyer","sich langweilen"));
	sections[7].push(new Mot("s'enthousiasmer","sich begeistern"));
	sections[7].push(new Mot("sentir","riechen"));
	sections[7].push(new Mot("s'habiller","sich anziehen"));
	sections[7].push(new Mot("signifier","bedeuten"));
	sections[7].push(new Mot("s'inquiéter","sich Sorgen machen"));
	sections[7].push(new Mot("s'occuper (de)","sich kümmern (um)"));
	sections[7].push(new Mot("sonner","klingen"));
	sections[7].push(new Mot("sortir","ausgehen"));
	sections[7].push(new Mot("sourire","lächeln"));
	sections[7].push(new Mot("suggérer","vorschlagen"));
	sections[7].push(new Mot("supporter","vertragen"));
	sections[7].push(new Mot("tenir","halten"));
	sections[7].push(new Mot("terminer","fertig machen"));
	sections[7].push(new Mot("tirer","ziehen "));
	sections[7].push(new Mot("tomber","runterfallen"));
	sections[7].push(new Mot("toucher","berühren"));
	sections[7].push(new Mot("tourner","drehen"));

	sections[8].push(new Mot("transmettre","übertragen"));
	sections[8].push(new Mot("traverser","überqueren"));
	sections[8].push(new Mot("trouver","finden"));
	sections[8].push(new Mot("tuer","töten"));
	sections[8].push(new Mot("utiliser","benutzen"));
	sections[8].push(new Mot("valoir la peine","sich lohnen"));
	sections[8].push(new Mot("vendre","verkaufen"));
	sections[8].push(new Mot("vérifier","überprüfen"));
	sections[8].push(new Mot("visiter","besuchen"));
	sections[8].push(new Mot("vivre","leben"));
	sections[8].push(new Mot("voler","fliegen"));
	sections[8].push(new Mot("voler (qlque chose)","klauen"));
	sections[8].push(new Mot("voter","wählen"));
	sections[8].push(new Mot("voyager","reisen"));

}

construireListes()



//afficher(mots);
var ops = new Array(sections.length);
var opInner = ["section 1", "section 2", "section 3",
				"section 4", "section 5", "section 6",
				"section 7", "section 8", "section 9"];            

for (var i=0; i<ops.length; i++){
	ops[i] = document.createElement("option");
    ops[i].value = i;
    ops[i].innerHTML  = opInner[i];
    document.getElementById("sections").appendChild(ops[i]);
}

var ops2 = new Array(2);
var op2Inner = ["Français", "Allemand"];           

for (var i=0; i<ops2.length; i++){
    ops2[i] = document.createElement("option");
    ops2[i].value = i+1;
    ops2[i].innerHTML  = op2Inner[i];
    document.getElementById("mode").appendChild(ops2[i]);
}



function nbAlea(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
  }

function condition(tableau){
	var result = 1;
	for(var i=0; i<tableau.length; i++){
		for(var j=0; j<tableau.length; j++){
			if(i != j){
				if(tableau[i] == tableau[j]){
					result = 0;
				}
			}	
		}
	}
	return result;
}


var marche = 0
function commencer(){
	if (marche == 0){
		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		var k = nbAlea(0, sections[section].length-1);
		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

		// empêcher de rajouter des radiobox
		marche = 1;
	}else{
		var start = document.getElementById("start");
		var suppr = document.getElementById("coeur");
		start.removeChild(suppr); 

		// ajout <coeur>
		var coeur = document.createElement("ul");
		coeur.setAttribute("id", "coeur");
		document.getElementById("start").appendChild(coeur);

		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		var k = nbAlea(0, sections[section].length-1);
		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

	}
}


function rootCommencer(){
	// ajout <p>
	var p = document.getElementById('consignes')
	p.innerHTML  = "<i> Selectionnez la bonne traduction et changez de section après 30 bonnes réponses.</i>";

	document.getElementById('sol').innerHTML = "";
	document.getElementById('score').innerHTML = "";
	document.getElementById('reponse').innerHTML = "";
	document.getElementById('points').innerHTML = 0;
	document.getElementById('tour').innerHTML = 0;

	commencer();
}


function radioboxes(section, mode, k){

	// récupération mot
	var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;

	// 5 nb aleatoires entre 1 et 5
	var radioValue = new Array(5);

	//defini la place de la trad correcte
	var bonneRep = nbAlea(0, 4);
	radioValue[bonneRep] = k;
	
	do{
		for(var i=0; i<radioValue.length; i++){
			if(i != bonneRep){
				radioValue[i] = nbAlea(0, sections[section].length-1);
			}
		}
		
	}while (condition(radioValue) == 0);
		// ajout <radio>
		var radios = new Array(5);
		var radioId = ["a", "b", "c", "d", "e"];  
		var radioLabel = new Array(5); 

		for(var i=0; i<radioLabel.length; i++){
			radioLabel[i] = (mode == 1)?  sections[section][radioValue[i]].ru : sections[section][radioValue[i]].fr;
		}


		
		var divs = new Array(5);

		for (var i=0; i<radios.length; i++){
			radios[i] = document.createElement("button");
			radios[i].setAttribute("class", "styled");
			radios[i].setAttribute("onclick", "verifier(this.id)");

			radios[i].setAttribute("id", radioId[i]);
			radios[i].setAttribute("value", radioValue[i]);
			radios[i].setAttribute("name", "selection");

			
			radios[i].innerHTML  = radioLabel[i];

			divs[i] = document.createElement("div");
			divs[i].setAttribute("class", "formu");
			divs[i].appendChild(radios[i]);
			

			document.getElementById("coeur").appendChild(divs[i]);
		}

		// ajout <button>
		arreter= document.createElement("button");
		arreter.setAttribute("onclick", "document.location.reload(false)");
		arreter.setAttribute("class", "styledArret");
		arreter.innerHTML  = "Arrêter";
		document.getElementById("coeur").appendChild(arreter);

}


function verifier(id) {
		var bouton = document.getElementById(id);
		var tour = document.getElementById('tour').innerHTML;
		var points = document.getElementById('points').innerHTML;
		var k = document.getElementById('reponse').innerHTML;
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;
		var valeur = bouton.value;
		
		var motFr = sections[section][k].fr;
		var motRu = sections[section][k].ru;

		tour++;
		document.getElementById('tour').innerHTML = tour;
		document.getElementById('sol').innerHTML = (mode == 1)? `${motFr} = ${motRu}.` : `${motRu} = ${motFr}.`;
		if(k == valeur){
			document.getElementById('sol').setAttribute("class", "vert");
			points++;
			document.getElementById('points').innerHTML = points;
		}else{
			document.getElementById('sol').setAttribute("class", "rouge");
		}
		document.getElementById('score').innerHTML = `${points} / ${tour} essais`;

		if(points > 29){
			if(points == tour){
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Félicitation! Vous avez le<br>score parfait!`;
			}else{
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Bravo! Votre score est <br>supérieur à 30.`;
			}
		}
		
		commencer();
}

var voir = 0;
function voirMots(){
	if(voir%2 == 0){
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;
		var tableauFr = new Array(sections[section].length+1);
		var tableauRu = new Array(sections[section].length+1);

		tableauFr[0]="Français";
		tableauRu[0]="Allemand";
		for(var i=1; i<sections[section].length+1; i++){
			tableauFr[i]=sections[section][i-1].fr;
			tableauRu[i]=sections[section][i-1].ru;
		}
		
		var table = document.createElement("table");
		table.setAttribute("id", "tb");

		for (var i = 0; i<sections[section].length+1; i++){
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");

			construireTab();
			
			tr.appendChild(td1);
			
			tr.appendChild(td2);

			table.appendChild(tr);
		}
		document.getElementById("table").appendChild(table);

		var v = document.getElementById("voir");
		v.innerHTML = "Cacher";

	}else{
		var tb = document.getElementById("tb");
		document.getElementById("table").removeChild(tb);

		var v = document.getElementById("voir");
		v.innerHTML = "Voir mots";
	}
	voir++;

	function construireTab() {
		if (i == 0) {
			if (mode == 1) {
				td1.innerHTML = tableauFr[i];
				td1.setAttribute("class", "francaisTitre");
				td2.innerHTML = tableauRu[i];
				td2.setAttribute("class", "russeTitre");
			}
			else {
				td1.innerHTML = tableauRu[i];
				td1.setAttribute("class", "russeTitre");
				td2.innerHTML = tableauFr[i];
				td2.setAttribute("class", "francaisTitre");
			}
		}
		else if (mode == 1) {
			td1.innerHTML = tableauFr[i];
			td1.setAttribute("class", "francais");
			td2.innerHTML = tableauRu[i];
			td2.setAttribute("class", "russe");
		}
		else {
			td1.innerHTML = tableauRu[i];
			td1.setAttribute("class", "russe");
			td2.innerHTML = tableauFr[i];
			td2.setAttribute("class", "francais");
		}
	}
}
