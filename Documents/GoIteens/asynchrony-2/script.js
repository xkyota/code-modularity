const cardsDatabase = [
    {
        poster: "/images/performance-exhaust.png",
        title: "GTR Performance",
        price: "$1200",
        buttonText: "Upgrade Now"
    },
    {
        poster: "/images/turbocharger-kit.png",
        title: "GTR Turbocharger Kit",
        price: "$3500",
        buttonText: "Boost Now"
    },
    {
        poster: "/images/suspension-kit.png",
        title: "GTR Suspension Kit",
        price: "$800",
        buttonText: "Install Now"
    },
    {
        poster: "/images/ecu-tuning.png",
        title: "GTR ECU Tuning",
        price: "$600",
        buttonText: "Tune Now"
    }
];

//! Nav-bar
const timer = document.querySelector(".nav-timer"); 
const tap = document.querySelector(".nav-tap"); 
const balance = document.querySelector(".nav-balance"); 

//! Cards container
const container = document.querySelector(".container");


//! Template Generator 
function cardTemplate(card){ 
    return `<div class="card">
                <img src="${card.poster}" alt="${card.title}" class="card-poster">
                <h2 class="card-title">${card.title}</h2>
                <p class="card-price">${card.price}</p>
                <button class="card-btn">${card.buttonText}</button>
            </div>`;
}

function cardsTemplate(cards){ 
    return cards.map(cardTemplate).join('\n'); 
}

const cardsMarkup = cardsTemplate(cardsDatabase); 
container.insertAdjacentHTML('beforeend', cardsMarkup); 

//! Functionality (Click, Timer and Balance) 
let userBalance = 0; 
let canClick = false;
let timerCnt = 100; 
let waitCnt = 1000; 
let timerStarted = false;

tap.addEventListener('click', function(){ 
    if (!timerStarted) {
        timerStarted = true;
        startTimer();
    }

    if (canClick) {
        tap.style.transform = "scale(1.2)";
        tap.style.transition = "transform 0.2s ease-in-out";

        setTimeout(() => {
            tap.style.transform = "scale(1)";
        }, 200);

        userBalance += 5; 
        balance.textContent = `${userBalance}$`; 
    }
});

function startTimer() {
    canClick = true;
    const interval = setInterval(() => {
        if (timerCnt > 0) {
            timer.textContent = `You have ${timerCnt} sec`; 
            timerCnt--; 
        } else {
            clearInterval(interval);
            canClick = false;
            timer.textContent = "Time's up! Wait for cooldown.";
            startCooldown();
        }
    }, 1000);
}

function startCoolown() {
    let coolDown = waitCnt / 1000;
    const coolDownInterval = setInterval(() => {
        if (coolDown > 0) {
            timer.textContent = `CoolDown: ${coolDown} sec`; 
            coolDown--;
        } else {
            clearInterval(coolDownInterval);
            timerCnt = 100;
            startTimer();
        }
    }, 1000);
}

//! Functionality (Shopping) 
container.addEventListener('click', function (event) {
    if (event.target.classList.contains('card-btn')) {
        const cardElement = event.target.closest('.card');
        const cardTitle = cardElement.querySelector('.card-title').textContent;
        const cardPrice = parseInt(cardElement.querySelector('.card-price').textContent.replace('$', ''), 10);

        if (userBalance >= cardPrice) {
            userBalance -= cardPrice;
            balance.textContent = `${userBalance}$`;
            alert(`You successfully purchased: ${cardTitle}`);
            cardElement.remove(); 
        } else {
            alert(`Insufficient balance to purchase: ${cardTitle}`);
        }
    }
});