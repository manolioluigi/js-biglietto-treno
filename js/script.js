let km, età, prezzoKm, etàSconto, prezzoFinale;

// 1) Chiedere all'utente il numero di chilometri che vuole percorrere (e salvarlo in una variabile)

km = prompt("Inserisci il numero di km che vuoi percorrere");
console.log(km);

// 2) Chiedere all'utente l'età del passeggero (e salvarlo in una variabile)

età = parseInt(prompt("Inserisci la tua età"));
console.log(età);

// 3) Calcolare il prezzo chilometrico moltiplicando i km in input per la tariffa (0.21€)

prezzoKm = km * 0.21;
console.log(prezzoKm);

// 4) Eseguire un controllo sull'età per decidere lo sconto da applicare

if (età < 18){
    etàSconto = (prezzoKm / 100) * 20;
    console.log(etàSconto);
    prezzoFinale = prezzoKm - etàSconto;
    console.log(prezzoFinale);
} else if (età < 65){
    prezzoFinale = prezzoKm;
    console.log(prezzoFinale);
} else {
    etàSconto = (prezzoKm / 100) * 40;
    console.log(etàSconto);
    prezzoFinale = prezzoKm - etàSconto;
    console.log(prezzoFinale);
}

// 5) Calcolare il prezzo finale con massimo due decimali

    prezzoFinale = prezzoFinale.toFixed(2);
    console.log(prezzoFinale);

// 6) Stampare il prezzo finale in html

    document.getElementById(`prezzo-biglietto`).innerHTML = prezzoFinale;