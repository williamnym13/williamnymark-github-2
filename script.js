document.addEventListener('keydown', function (event) {
    const links = document.querySelectorAll('.nav-item a');
    const focusableLinks = Array.from(links);
    const currentIndex = focusableLinks.findIndex(link => document.activeElement === link);

    if (event.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % focusableLinks.length;
        focusableLinks[nextIndex].focus();
        event.preventDefault();
    }
    else if (event.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + focusableLinks.length) % focusableLinks.length;
        focusableLinks[prevIndex].focus();
        event.preventDefault();
    }
});

let cookieCounter = document.querySelector('#cookie-amount');
let currentCookieAmount = 0;
let cookieMultiplier = 1;
let upgradeValue = 1;
const cookieImage = document.querySelector("#cookieImage");
cookieCounter.innerHTML = currentCookieAmount;

function cookie_click () {
    if (upgradeValue == 1) {
        currentCookieAmount = currentCookieAmount + 1 * cookieMultiplier;
        cookieCounter.innerHTML = currentCookieAmount;
        console.log(currentCookieAmount);
    }
}
function Upgrader () {
    if (upgradeValue == 1) {
        if (currentCookieAmount >= 50) {
            currentCookieAmount = 0;
            cookieCounter.innerHTML = currentCookieAmount;
            upgradeValue = 2;
            console.log(upgradeValue);
        }
    }
}

document.querySelector('#cookieImage').addEventListener('click', cookie_click);
document.querySelector('#upgradeOne').addEventListener('click', Upgrader);