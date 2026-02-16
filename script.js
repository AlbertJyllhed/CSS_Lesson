let score = 0;

window.onload = function setupScore() {
    if (localStorage.score) {
        score = Number(localStorage.score);
    } else {
        score = 0;
        localStorage.score = score;
    }
    const beanScore = document.getElementById("beanScore");
    beanScore.innerHTML = "BeanScore&trade;: " + score;
};

function clickCan() {
    const beans = document.getElementById("beans");
    beans.classList.add("shake");
    beans.addEventListener("animationend", (e) => {
        beans.classList.remove("shake");
    });
    function incrementScore() {
        const beanScore = document.getElementById("beanScore");
        if (localStorage.score) {
            // Increment score in localstorage if it exists
            // and set score to match
            localStorage.score = Number(localStorage.score) + 1;
            score = Number(localStorage.score);
        } else {
            // If there is no score in localstorage use the variable itself
            score++;
        }
        beanScore.innerHTML = "BeanScore&trade;: " + score;
    }
    incrementScore();
}

function toggleShop() {
    const shop = document.getElementById("shop");
    const openShopButton = document.getElementById("arrow");
    if (shop.offsetWidth === 0) {
        shop.style.width = "15rem";
        openShopButton.style.paddingLeft = "15rem";
        // openShopButton.innerHTML = "&larr;";
    } else {
        shop.style.width = "0";
        openShopButton.style.paddingLeft = "0";
        // openShopButton.innerHTML = "&rarr;";
    }
}
