function numeroRandom() {
    return Math.floor(Math.random() * 1000) + 9000;
}

document.getElementById("btn").addEventListener("click", function () {
    var km = document.getElementById("kmTragitto").value
    var anni = document.getElementById("eta").value

    var priceatkm = 0.21;
    var price = priceatkm * km;
    if (Number.isNaN(anni) || Number.isNaN(priceatkm)) {
        price = "Non hai inserito correttamente un numero"
    }

    if (anni == "Minorenni") {
        price = (price / 100) * 80;
        var price = price.toFixed(2);
    }

    else if (anni == "over 65") {
        price = (price / 100) * 60;
        var price = price.toFixed(2);
    }
    var NomeCognome = document.getElementById("NomeCognome").value;
    document.getElementById("nomeCognome2").innerHTML = NomeCognome;
    document.getElementById("costo_biglietto").innerHTML = price;
    document.getElementById("offerta2").innerHTML = anni;

    var carrozza = 7;
document.getElementById("carrozza2").innerHTML = carrozza;
var codice = numeroRandom();
document.getElementById("codice2").innerHTML = codice;


});


document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("costo_biglietto").innerHTML = "";
    document.getElementById("offerta2").innerHTML = "";
    document.getElementById("kmTragitto").innerHTML = "";
    document.getElementById("codice2").innerHTML = ""; 
    document.getElementById("carrozza2").innerHTML = "";
})