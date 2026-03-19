import { profilok } from "./data.js";

const vaktizi = "napooeon"

for (let i = 0; i < profilok.length; i++) {
    const profil = profilok[i]
    document.getElementById("container").innerHTML += `
    <a href="profile.html?user=${profil.nev}">
    <div class="profile">
      <div>
        <img src="../../assets/site/img/${profil.nev}_pfp.png" alt="">
      </div>
      <div>
        <p class="nev">${profil.becenev}</p>
        <p class="becenev">${profil.nev}</p>
        <p class="leiras">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
    </a>`
}
