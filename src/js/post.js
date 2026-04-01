import { postok, kommentek } from "./data.js";

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
    : document.getElementById("post-float-img").src = `../../assets/site/img/${post.feltolto}_post${post.sorszam}.gif`; // képi tartalom betöltése
    
    document.getElementById("author-user-pfp").src = `../../assets/site/img/${post.feltolto}_pfp.png`; // feltöltő profilkép betöltése
    document.getElementById("author-user-username").innerHTML = post.feltolto; // feltöltő nevének betöltése
    document.getElementById("user-content-desc").innerHTML = post.leiras; // poszt leirásának betöltése

    let commentCont = document.getElementById("user-comments");
    let comments = Math.floor(Math.random() * (kommentek.length + 1));
    let commentsRand = [...kommentek].sort(function(){return 0.5 - Math.random()});

    commentCont.innerHTML = ""; // belső html törlése előző alkalmakról

    for (let i = 0; i < comments; i++) {
        let comment = commentsRand[i];
        commentCont.innerHTML +=
        `
        <div class="user-card">
            <div class="user-info">
                <img class="comment-user-pfp" src="../../assets/site/img/${comment.felhasznalo}_pfp.png" alt="Profilkép">
                <h5 class="comment-user-username">${comment.felhasznalo}</h5>
            </div>
            <div class="user-content">
                <p class="user-content-comment">${comment.szoveg}</p>
            </div>
        </div>
        `
    }

    // Betöltés végeztével jelenitsük meg a lebegő modal posztot
    modal.classList.remove("hidden");
}

// Minden post infóval rendelkező elem ellátása kattintás esemény listener-rel
document.querySelectorAll("[data-uploader]").forEach(elem => {
    elem.addEventListener("click", () => showPost(elem));
});