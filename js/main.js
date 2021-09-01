let przycisk = document.querySelector('button');

let imie = document.getElementById('fname');

let nazwisko = document.getElementById("surnam");

let numer = document.getElementById("phon");

przycisk.onclick = function (){
    document.getElementById('name').textContent = imie.value;
    document.getElementById('surname').textContent = nazwisko.value;
    document.getElementById('phone').textContent = numer.value;
}
