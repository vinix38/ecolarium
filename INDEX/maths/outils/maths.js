function deg2() {
   var a = document.getElementById("deg2_a").value;
   var b = document.getElementById("deg2_b").value;
   var c = document.getElementById("deg2_c").value;
   var s, delta = b * b - 4 * a * c;
   if (a == 0) {
      s = "ceci n'est pas une équation du second degré!"
   } else if (delta == 0) {
      s = (-b) / (2 * a);
   } else if (delta > 0) {
      s = [(-b - delta ** 0.5) / (2 * a), (-b + delta ** 0.5) / (2 * a)];
      s = s[0] + " et " + s[1]
   } else {
      s = "pas de solutions";
   }
   document.getElementById("deg2_s").innerHTML = s;
   document.getElementById("deg2_delta").innerHTML = delta;
}
//===================================================
function dist() {
   var x1 = document.getElementById("dist_x1").value;
   var y1 = document.getElementById("dist_y1").value;
   var x2 = document.getElementById("dist_x2").value;
   var y2 = document.getElementById("dist_y2").value;
   var s = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
   document.getElementById("dist_s").innerHTML = s;
}
//===================================================
function deg1() {
   var a = document.getElementById("deg1_a").value;
   var b = document.getElementById("deg1_b").value;
   var c = document.getElementById("deg1_c").value;
   var s;
   if (a == 0 && b != c) {
      s = "∅"
   } else if (a == 0 && b == c) {
      s = "&#8477;"
   } else {
      s = (c - b) / a
   };
   document.getElementById("deg1_s").innerHTML = s;
}
//===================================================
function aleat() {
   var min = Number(document.getElementById("aleat_min").value);
   var max = Number(document.getElementById("aleat_max").value);
   var pas = Number(document.getElementById("aleat_pas").value);
   var r;
   if (min == max) {
      r = min
   } else if (min > max) {
      r = "Le minimum doit être inférieur au maximum"
   } else while (r > max || r < min || r == undefined) {
      r = Math.floor(Math.random() * ((max - min + pas) / pas)) * pas + min;
   } if (Number.isInteger(parseFloat(pas)) == false) {
      r = r.toFixed(pas.toString().length - 2);
   }
   document.getElementById("aleat_r").innerHTML = r;
}
//===================================================
function premier() {
   var N = Number(document.getElementById("premier_N").value);
   var s = "Ce nombre n'est pas premier";
   if (((Number.isInteger(N))) && (N > 1)) {
      for (var x = 2; x < N; x++) {
         if (N % x == 0) {
            break
         };
      };
   };
   if (x == N) {
      s = "Ce nombre est premier"
   };
   document.getElementById("premier_s").innerHTML = s;
}
//===================================================
function diviseur() {
   var s = [], N = Number(document.getElementById("diviseur_N").value);
   if (((Number.isInteger(N))) && (N > 0)) {
      for (var x = N; x > 0; x--) {
         if (N % x == 0) s.push(x)
      };
      s = String(s).replace(/,/g, " ; ");
   } else {
      s = "nombre invalide!"
   };
   document.getElementById("diviseur_s").innerHTML = s;
}
//===================================================
function rond() {
   var r = document.getElementById("rond_r").value;
   document.getElementById("rond_P").innerHTML = (2 * r * Math.PI).toFixed(3);
   document.getElementById("rond_A").innerHTML = (r ** 2 * Math.PI).toFixed(3);
   document.getElementById("rond_SA").innerHTML = (4 * r ** 2 * Math.PI).toFixed(3);
   document.getElementById("rond_SV").innerHTML = (4 / 3 * r ** 3 * Math.PI).toFixed(3);
}
//===================================================
function carre() {
   var c = document.getElementById("carre_c").value;
   document.getElementById("carre_P").innerHTML = (4 * c);
   document.getElementById("carre_A").innerHTML = (c ** 2);
   document.getElementById("carre_CA").innerHTML = (6 * c ** 2);
   document.getElementById("carre_CV").innerHTML = (c ** 3);
}
//===================================================
function pyth() {
   var c1 = document.getElementById("pyth_c1").value;
   var c2 = document.getElementById("pyth_c2").value;
   var h = document.getElementById("pyth_h").value;
   if ((c1 || c2 || h) < 0) {
      document.getElementById("pyth_s").value = "une longueur ne peut être négative!"
   } else if (((c1 && c2) != "") && (h == "")) {
      h = (c1 ** 2 + c2 ** 2) ** 0.5;
      document.getElementById("pyth_h").value = h;
      document.getElementById("pyth_s").value = "réussite!"
   } else if (((c1 && h) != "") && (c2 == "")) {
      c2 = (h ** 2 - c1 ** 2) ** 0.5;
      document.getElementById("pyth_c2").value = c2;
      document.getElementById("pyth_s").value = "réussite!"
   } else if (((c2 && h) != "") && (c1 == "")) {
      c1 = (h ** 2 - c2 ** 2) ** 0.5;
      document.getElementById("pyth_c1").value = c1;
      document.getElementById("pyth_s").value = "réussite!"
   } else if ((c1 && c2 && h) != "") {
      if ((c1 ** 2 + c2 ** 2) == (h ** 2)) {
         document.getElementById("pyth_s").value = "ce triangle est bien rectangle!"
      }
      else {
         document.getElementById("pyth_s").value = "ce triangle n'est pas rectangle!"
      }
   } else { document.getElementById("pyth_s").value = "manque d'information" }
}
//===================================================
function cosin() {
   var a = document.getElementById("cosin_a").value,
      b = document.getElementById("cosin_b").value,
      cos, sin;
   if (b == 0) {
      cos = "Erreur! Impossible de diviser par zéro!";
      sin = "Erreur! Impossible de diviser par zéro!";
   } else {
      var n6pi = (6 * a) / b;
      while (Math.abs(n6pi) >= 12) {
         n6pi -= Math.sign(n6pi) * 12
      }
      if (n6pi < 0) {
         n6pi += 12
      }
      if (n6pi % 6 == 0) {
         sin = "0"
         cos = "1"
      } else if (n6pi % 3 == 0) {
         sin = "1"
         cos = "0"
      } else if (n6pi % 1.5 == 0) {
         sin = "√2/2"
         cos = "√2/2"
      } else if (n6pi % 2 == 0) {
         cos = "1/2"
         sin = "√3/2"
      } else if (n6pi % 1 == 0) {
         sin = "1/2"
         cos = "√3/2"
      }
      if ((n6pi > 3) && (n6pi < 9)) {
         cos = "- " + cos
      }
      if (n6pi > 6) {
         sin = "- " + sin
      }
      if ((cos && sin) == undefined) {
         sin = Math.sin(n6pi / 6 * Math.PI)
         cos = Math.cos(n6pi / 6 * Math.PI)
      }
   }
   document.getElementById("cosin_sin").value = sin;
   document.getElementById("cosin_cos").value = cos;
}
function decom() {
   var N = document.getElementById("decom_N").value, i, S = [];
   for (i = 2; i <= N; i++) {
      while ((N % i) == 0) {
         S.push(i);
         N /= i;
      }
   }
   document.getElementById("decom_s").innerHTML = S;
}
