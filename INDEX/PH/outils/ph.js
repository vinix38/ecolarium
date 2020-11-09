function pre() {
   var entre = document.getElementById("pre_S-entre").value;
   var Nentre = document.getElementById("pre_N-entre").value;
   var sortie = document.getElementById("pre_S-sortie").value;
   var r = Nentre * entre / sortie;
   document.getElementById("pre_N-sortie").innerHTML = r;
}
//===================================================
function color_l(l) {
   var resultat;
   if (l < 380) resultat = "ultraviolets"
   else if ((380 <= l) && (l < 450)) resultat = "violet"
   else if ((450 <= l) && (l < 495)) resultat = "bleu"
   else if ((495 <= l) && (l < 570)) resultat = "vert"
   else if ((570 <= l) && (l < 590)) resultat = "jaune"
   else if ((590 <= l) && (l < 620)) resultat = "orange"
   else if ((620 <= l) && (l < 750)) resultat = "rouge"
   else resultat = "infrarouge"
   return resultat
}
function color() {
   var opo, couleure = document.getElementById("color_entre").value;
   document.getElementById("color_sortie").innerHTML = color_l(couleure);
   //document.getElementById("color_O-sortie").innerHTML = color_l((couleure - 565) * (-1) + 565) ;
}
//===================================================
function son() {
   var s = [], f = document.getElementById("son_entre").value;
   if (f < 0) { s = "cette fréquence est invalide!" }
   else if (f == 0) { s = "aucun son n'est émis!" }
   else {
      if (f <= 20) s.push("infrason", "inaudible pour l'être humain")
      else if ((f > 20) && (f < 20000)) s.push("son audible pour l'être humain")
      else s.push("ultrason", "inaudible pour l'être humain");
      if (f < 80000) s.push("audible pour certains animaux");
      if ((f > 100) && (f < 175)) s.push("voix d'homme")
      else if ((f >= 175) && (f < 300)) s.push("voix de femme")
      else if ((f >= 300) && (f < 450)) s.push("voix d'enfant");
   }
   document.getElementById("son_sortie").innerHTML = s;
}
//===================================================
function scien() {
   var N = document.getElementById("scien_N").value;
   document.getElementById("scien_s").value = Number(N).toExponential();
}

