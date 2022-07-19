const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const moon_dark = document.querySelector('#moon_dark');
const moon_light = document.querySelector('#moon_light');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden');
    }
} )

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
