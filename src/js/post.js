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
    document.getElementById("post-float-img").src = `../../assets/site/img/${post.feltolto}_post${post.sorszam}.png`;

    // Betöltés végeztével jelenitsük meg a lebegő modal posztot
    modal.classList.remove("hidden");
}

document.querySelectorAll("[data-uploader]").forEach(elem => {
    elem.addEventListener("click", () => showPost(elem));
});