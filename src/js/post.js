import { postok } from "./data.js";

function showPost(elem) { // Az elem paraméter az elem amely lehivta a függvényt
    let adatok = elem.dataset;
    let uploader = adatok.uploader;
    let number = adatok.number;
    // A keresett poszt megtalálása
    let post;
    for (let p of postok) {
        if (p.feltolto === uploader && p.sorszam === Number(number)) {
            post = p;
        }
    };

    let modal = document.getElementById("post-float");

    // Lebegő poszt kitöltése a poszt adataival
    post.tipus === "kep" 
    ? document.getElementById("post-float-img").src = `../../assets/site/img/${post.feltolto}_post${post.sorszam}.png` 
    : document.getElementById("post-float-img").src = `../../assets/site/img/${post.feltolto}_post${post.sorszam}.gif`;
    
    document.getElementById("")
    
    // Betöltés végeztével jelenitsük meg a lebegő modal posztot
    modal.classList.remove("hidden");
}

// Minden post infóval rendelkező elem ellátása kattintás esemény listener-rel
document.querySelectorAll("[data-uploader]").forEach(elem => {
    elem.addEventListener("click", () => showPost(elem));
});