import { postok, profilok } from "./data.js";

const feedCont = document.querySelector("#feed");
const profilCont = document.getElementById("recent-cont");

for (let i = 0; i < profilok.length; i++) {
  let profil = profilok[i];

  if (profil.postok != 0) {
    profilCont.innerHTML += `
      <div data-uploader="${profil.nev}" data-number="${profil.postok}" data-path="assets/site/img/" class="recent-profil">
        <img src="assets/site/img/${profil.nev}_pfp.png" alt="Profilkép" class="recent-profil-pfp">
      </div>
    `;
  }
}

for (let i = 0; i < postok.length; i++) {
  let post = postok[i];

  feedCont.innerHTML += `
    <article class="post border" id="${post.feltolto}-${post.sorszam}">
      <div class="post-author">
        <img class="author-pfp" src="assets/site/img/${post.feltolto}_pfp.png" alt="Profile picture" height="35" width="35">
        <a href="src/pages/profile.html?user=${post.feltolto}" class="author-name">${post.feltolto}</a>
      </div>
      <figure class="post-content">
        <div class="img-cont">
        ${
          post.tipus === "kep"
            ? `<img src="assets/site/img/${post.feltolto}_post${post.sorszam}.png" alt="">`
            : `<img src="assets/site/img/${post.feltolto}_post${post.sorszam}.gif" alt="">`
        }
        </div>
        <figcaption>${post.leiras}</figcaption>
      </figure>
    </article>
  `;
}