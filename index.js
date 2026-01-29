var sum = 0;
var element = document.getElementById("sum");

var orderList = document.getElementById("orderList");

function adder(price, name) {
  sum += price;
  element.innerHTML = sum + " €";
  orderHistory(price, name);
}

function orderHistory(price, name) {
  orderList.innerHTML += "<p>" + name + " " + price + " €" + "</p>";
}

function reloadSite() {
  orderList.innerHTML = "";
  element.innerHTML = 0 + " €";
  sum = 0;
}

function onSite() {
  if (sum <= 0) {
    alert("Bitte fügen Sie zuerst Artikel hinzu");
  } else {
    alert("Bestellung für vor Ort abgeschlossen! Gesamtbetrag: " + sum + " €");
  }
}
function deliveryButton() {
  if (sum <= 0) {
    alert("Bitte fügen Sie zuerst Artikel hinzu");
  } else if (sum > 0 && sum < 20) {
    alert(
      "Mindestbestellwert für Lieferung: 20€ ! Akueller Betrag: " + sum + " €",
    );
  } else {
    alert(
      "Bestellung für Lieferung abgeschlossen! Gesamtbetrag: " + sum + " €",
    );
  }
}
