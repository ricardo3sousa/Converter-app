const url = 'https://api.exchangeratesapi.io/latest?base=';


const date = document.querySelector('.date');
const euro = document.getElementById('euro');
const libra = document.getElementById('libra');
const usDollar = document.getElementById('usDollar');
const auDollar = document.getElementById('auDollar');


let data = new Date();
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
};
date.innerHTML = data.toLocaleDateString('pt-PT', options);


function clear() {
    euro.value = '';
    libra.value = '';
    usDollar.value = '';
    auDollar.value = '';
}

euro.addEventListener('keydown', function (event) {
    fetch(`${url}EUR`)
        .then(data => data.json())
        .then((res) => {
            let val = event.target.value;
            let rateGBP = res.rates.GBP;
            let rateUSD = res.rates.USD;
            let rateAUD = res.rates.AUD;
            libra.value = (val * rateGBP).toFixed(2);
            usDollar.value = (val * rateUSD).toFixed(2);
            auDollar.value = (val * rateAUD).toFixed(2);
        })
})

libra.addEventListener('keydown', function (event) {
    fetch(`${url}GBP`)
        .then(data => data.json())
        .then((res) => {
            let val = event.target.value;
            let rateEUR = res.rates.EUR;
            let rateUSD = res.rates.USD;
            let rateAUD = res.rates.AUD;
            euro.value = (val * rateEUR).toFixed(2);
            usDollar.value = (val * rateUSD).toFixed(2);
            auDollar.value = (val * rateAUD).toFixed(2);
        })
})

usDollar.addEventListener('keydown', function (event) {
    fetch(`${url}USD`)
        .then(data => data.json())
        .then((res) => {
            let val = event.target.value;
            let rateEUR = res.rates.EUR;
            let rateGBP = res.rates.GBP;
            let rateAUD = res.rates.AUD;
            euro.value = (val * rateEUR).toFixed(2);
            libra.value = (val * rateGBP).toFixed(2);
            auDollar.value = (val * rateAUD).toFixed(2);
        })
})

auDollar.addEventListener('keydown', function (event) {
    fetch(`${url}AUD`)
        .then(data => data.json())
        .then((res) => {
            let val = event.target.value;
            let rateEUR = res.rates.EUR;
            let rateGBP = res.rates.GBP;
            let rateUSD = res.rates.USD;
            euro.value = (val * rateEUR).toFixed(2);
            libra.value = (val * rateGBP).toFixed(2);
            usDollar.value = (val * rateUSD).toFixed(2);
        })
})


euro.addEventListener('click', function () {
    clear();
})
libra.addEventListener('click', function () {
    clear();
})
usDollar.addEventListener('click', function () {
    clear();
})
auDollar.addEventListener('click', function () {
    clear();
})
