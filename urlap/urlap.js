function feldolgoz(event) {
  event.preventDefault();
  let nev = document.getElementById('nev').value;
  let kor = document.getElementById('kor').value;
  let tantargy = document.getElementById('tantargy').options;
  let tan = [];
  for (let i = 0; i < 4; i++) {
    if (tantargy[i].selected == true) {
      console.log(tantargy[i].value);
      tan.push(tantargy[i].value);
    }
  }
  let matekEred = document.getElementsByName('matek');

  let matek = '';
  if (matekEred[0].checked) {
    matek = true;
  } else if (matekEred[1].checked) {
    matek = false;
  }

  let kedvenc = [];

  if (document.getElementById('kata').checked == true) {
    kedvenc.push(document.getElementById('kata').value);
  }

  if (document.getElementById('niki').checked == true) {
    kedvenc.push(document.getElementById('niki').value);
  }

  if (document.getElementById('zsolt').checked == true) {
    kedvenc.push(document.getElementById('zsolt').value);
  }

  console.log(matekEred[0].checked);
  localStorage.setItem('nev', nev);
  localStorage.setItem('kor', kor);
  localStorage.setItem('tan', tan);
  localStorage.setItem('matek', matek);
  localStorage.setItem('kedvenc', kedvenc);

  if (nev === 'Tibor') {
    window.location.replace('./bemutato.html');
  } else {
    window.alert('Nem a jó tanuló nevét adtad meg!');
  }
}

function kiir() {
  let felhNev = document.getElementById('felhNev');
  let felhKor = document.getElementById('felhKor');
  let tan = document.getElementById('tan');
  let matek = document.getElementById('matek');
  let kedvenc = document.getElementById('kedvenc');
  felhNev.innerText = localStorage.getItem('nev');
  felhKor.innerText = localStorage.getItem('kor');
  tan.innerText = localStorage.getItem('tan');
  matek.innerText = localStorage.getItem('matek');
  kedvenc.innerText = localStorage.getItem('kedvenc');
}
