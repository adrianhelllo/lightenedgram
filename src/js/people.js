import { profilok } from "./data.js";

const vaktizi = "napooeon"

for (let i = 0; i < profilok.length; i++) {
    const profil = profilok[i]
    document.getElementById("container").innerHTML += `
    <a href="profile.html?user=${profil.nev}">
    <div class="profile border">
      <div>
        <img src="../../assets/site/img/${profil.nev}_pfp.png" alt="">
      </div>
      <div class="szoveg">
        <p class="nev">${profil.becenev}</p>
        <p class="becenev">${profil.nev}</p>
        <p class="leiras">${profil.leiras}</p>
      </div>
    </div>
    </a>`
}
