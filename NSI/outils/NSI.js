function prebi() {
   var entre = document.getElementById("prebi_S-entre").value;
   var Nentre = document.getElementById("prebi_N-entre").value;
   var sortie = document.getElementById("prebi_S-sortie").value;
   var r = Nentre * entre / sortie;
   document.getElementById("prebi_N-sortie").innerHTML = r;
}
//===================================================
function logique() {
   var A = Boolean(Number(document.getElementById("logique_A").innerHTML));
   var B = Boolean(Number(document.getElementById("logique_B").innerHTML));
   var porte = document.getElementById("logique_porte").value;
   var sortie;
   if (porte == "and") { sortie = Boolean(A && B) }
   else if (porte == "or") { sortie = A || B }
   else if (porte == "nand") { sortie = !(A && B) }
   else if (porte == "nor") { sortie = (!A) || (!B) }
   else if (porte == "xor") { sortie = (!A) == B }
   else if (porte == "xnor") { sortie = A == B }
   else if (porte == "not") { sortie = !A };
   sortie = Number(sortie)
   if (porte == "not") { sortie += " <i>(B n'est pas pris en compte)</i>" }
   { document.getElementById("logique_s").innerHTML = sortie; }
}
//===================================================
function logique_inverse(id) {
   var bouton = document.getElementById(id).innerHTML;
   if (bouton == 0) { bouton = 1 } else { bouton = 0 };
   document.getElementById(id).innerHTML = String(bouton);
   logique()
}
//===================================================
function convert() {
   var baseS = document.getElementById("convert_S-sortie").value,
      baseE = document.getElementById("convert_S-entre").value,
      Statut = 0, N = document.getElementById("convert_N-entre").value;
   if ((baseE == 2) && (/^[0-1]+$/g.test(N))) { Statut = 1 }
   else if ((baseE == 8) && (/^[0-7]+$/g.test(N))) { Statut = 1 }
   else if ((baseE == 10) && (/^[0-9]+$/g.test(N))) { Statut = 1 }
   else if ((baseE == 16) && (/^[0-9|a-f]+$/gi.test(N))) { Statut = 1 };
   if (Statut) { N = parseInt(N, baseE); N = N.toString(baseS) }
   else { N = "entré invalide!" };
   document.getElementById("convert_N-sortie").value = N;
}