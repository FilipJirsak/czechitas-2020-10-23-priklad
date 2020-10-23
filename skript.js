"use strict";

console.log('Funguju!')

let zvolenyDen;

const onDayClick = (event) => {
    if (zvolenyDen != null) {
        zvolenyDen.classList.remove('active');
    }

    zvolenyDen = event.currentTarget;    
    zvolenyDen.classList.add('active');

    const svatekMa = zvolenyDen.querySelector('.svatek').innerHTML;
    document.querySelector('#dnes').innerHTML = svatekMa;
}

const policka = document.querySelectorAll('.kalendar td:not(.jiny-mesic)');
for (let i = 0; i < policka.length; i++) {
    const policko = policka[i];
    policko.addEventListener('click', onDayClick);
}
