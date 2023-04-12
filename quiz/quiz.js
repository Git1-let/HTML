'use strict';
import { adatok } from './adatok.js';
console.log(adatok);

let slider = document.getElementById('slider');
const lapozo = document.getElementById('lapozo');
const megoldas = [];

lapozo.addEventListener('click', lapozas);
let szamlalo = 0;

function lapozas() {
  if (szamlalo < adatok.length + 1) {
    let kerdesek = document.getElementById('kerdesek');
    let ujKerdesek = document.createElement('div');
    ujKerdesek.setAttribute('id', 'kerdesek');
    if (szamlalo < adatok.length) {
      // Lapszám változtatása.
      lapozo.innerText = `${szamlalo + 1}. kérdés`;

      // Kérdés létrehozása
      let kerdes = document.createElement('h1');
      let kerdesSzoveg = adatok[szamlalo].kerdes;
      let kerdesTextNode = document.createTextNode(kerdesSzoveg);
      kerdes.appendChild(kerdesTextNode);
      ujKerdesek.appendChild(kerdes);

      // Válasz létrehozása
      let form = document.createElement('form');
      for (let i = 0; i < adatok[szamlalo].valaszok.length; i++) {
        let tarto = document.createElement('div');
        tarto.setAttribute('id', 'tarto');
        let input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('id', `radio_${szamlalo}_${i}`);
        input.setAttribute('name', `radio_${szamlalo}`);
        input.setAttribute('value', `${adatok[szamlalo].valaszok[i]}`);
        tarto.appendChild(input);
        let label = document.createElement('label');
        label.setAttribute('id', `radio_${i}`);
        let labelSzoveg = `${adatok[szamlalo].valaszok[i]}`;
        let labelText = document.createTextNode(labelSzoveg);
        label.appendChild(labelText);
        tarto.appendChild(label);
        form.appendChild(tarto);
      }
      ujKerdesek.appendChild(form);
      let kitolt = document.createElement('button');
      kitolt.setAttribute('type', 'button');
      let kitoltSzoveg = 'Kiértékel';
      let kitoltTextNode = document.createTextNode(kitoltSzoveg);
      kitolt.appendChild(kitoltTextNode);
      kitolt.addEventListener('click', () => {
        const tomb = document.getElementsByName(`radio_${szamlalo - 1}`);
        console.log(tomb);
        for (let i = 0; i < tomb.length; i++) {
          let elem = document.getElementById(`radio_${szamlalo - 1}_${i}`);

          if (elem.checked) {
            localStorage.setItem(
              `radio_${szamlalo - 1}_${i}`,
              `${adatok[szamlalo - 1].valaszok[i]}`
            );
            megoldas.push(`${adatok[szamlalo - 1].valaszok[i]}`);
          }
        }
      });
      ujKerdesek.appendChild(kitolt);

      // Kicserélem a régi tartalmat az új tartalomra.
      slider.replaceChild(ujKerdesek, kerdesek);
    } else {
      let osszegzes = document.createElement('ul');
      for (let i = 0; i < adatok.length; i++) {
        let li = document.createElement('li');
        let liSzoveg = megoldas[i];
        let liTextNode = document.createTextNode(liSzoveg);
        li.appendChild(liTextNode);
        osszegzes.appendChild(li);
      }
      ujKerdesek.appendChild(osszegzes);
      slider.replaceChild(ujKerdesek, kerdesek);
      lapozo.innerText = 'Összegzés';
    }
  }

  szamlalo++;
}
