let sum = 0;
const sumEl = document.getElementById("sum");
const orderListEl = document.getElementById("orderList");

function addPrice(price, name) {
  sum += price;
  sumEl.innerHTML = sum + " €";
  displayHistory(price, name);
}

function displayHistory(price, name) {
  orderListEl.innerHTML += "<p>" + name + " " + price + " €" + "</p>";
}

function reloadSite() {
  orderListEl.innerHTML = "";
  sumEl.innerHTML = 0 + " €";
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
