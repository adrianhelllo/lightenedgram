import { kerdesek } from "./data.js";

function showPost(elem) { // Az elem paraméter az elem amely lehivta a függvényt
    let adatok = elem.dataset;
    let uploader = adatok.uploader;
    let number = adatok.number;
    // A keresett poszt megtalálása
    let post;
    for (let k of kerdesek) {
        if (k.feltolto === uploader && k.sorszam === number) {
            post = k;
        }
    };

    let modal = document.getElementById("post-float");
    document.getElementById("post-float-img").src = `../../assets/site/img/${post.feltolto}_post${post.sorszam}`;

    // Betöltés végeztével jelenitsük meg a lebegő modal posztot
    modal.classList.remove("hidden");
}