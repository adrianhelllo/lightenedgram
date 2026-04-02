import { postok, kommentek } from "./data.js";

function showPost(elem) { // Az elem paraméter az elem amely lehivta a függvényt
    let adatok = elem.dataset;
    let uploader = adatok.uploader;
    let number = adatok.number;
    let path = adatok.path;
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
    ? document.getElementById("post-float-img").src = `${path}${post.feltolto}_post${post.sorszam}.png`
    : document.getElementById("post-float-img").src = `${path}${post.feltolto}_post${post.sorszam}.gif`; // képi tartalom betöltése
    
    document.getElementById("author-user-pfp").src = `../../assets/site/img/${post.feltolto}_pfp.png`; // feltöltő profilkép betöltése
    document.getElementById("author-user-username").innerHTML = post.feltolto; // feltöltő nevének betöltése
    document.getElementById("user-content-desc").innerHTML = post.leiras; // poszt leirásának betöltése

    let commentCont = document.getElementById("user-comments");
    let comments = Math.floor(Math.random() * (kommentek.length + 1));
    let commentsRand = [...kommentek].sort(function(){return 0.5 - Math.random()});

    commentCont.innerHTML = `<h5>Kommentek (${comments})</h5>`; // belső html törlése előző alkalmakról

    for (let i = 0; i < comments; i++) {
        let comment = commentsRand[i];
        commentCont.innerHTML +=
        `
        <div class="user-card border">
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

    if (comments === 0) {
        commentCont.innerHTML += 
        `
        <div id="user-comments-empty">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon lucide lucide-message-square-dashed-icon lucide-message-square-dashed"><path d="M14 3h2"/><path d="M16 19h-2"/><path d="M2 12v-2"/><path d="M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149"/><path d="M20 19a2 2 0 0 0 2-2v-1"/><path d="M22 10v2"/><path d="M22 6V5a2 2 0 0 0-2-2"/><path d="M4 3a2 2 0 0 0-2 2v1"/><path d="M8 19h2"/><path d="M8 3h2"/></svg>
            <h3 class="nowrap">Hahó, honfitársak?</h3>
            <p>Lehet, éppen egy forradalmat vívnak, vagy az utcán éheznek. Térj vissza később.</p>
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