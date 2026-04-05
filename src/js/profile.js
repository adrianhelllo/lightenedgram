import { profilok, postok } from "./data.js";

let params = new URLSearchParams(window.location.search);
let username = params.get('user')
//ha http://127.0.0.1:5500/src/pages/profile.html?user=jeanjacq_rousseau
//akkor a username értéke jeanjacq_rousseau
let obj = profilok.find(user => user.nev === username);
//a profilok array-ben megkeressük azt az objektumot aminek a .nev attributoma
//az egyenlo a username-el, és az objektumot az obj valtozoba rakjuk

console.log(username);
console.log(obj)

const postCont = document.getElementsByClassName("profile_posts")[0];

if (obj !== undefined) {
    console.log("Object was found");
    document.getElementsByClassName('name')[0].innerHTML = obj.becenev;
    document.getElementsByClassName('username')[0].innerHTML = obj.nev;
    document.getElementsByClassName('introduction')[0].innerHTML = obj.leiras;
    document.getElementsByClassName('introduction')[1].innerHTML = obj.leiras;
    document.getElementById('profile_picture').src = `../../assets/site/img/${username}_pfp.png`; // a weboldal nem fogja betölteni az esetleges placeholdert sajnos
    document.title = `@${username} - lightenedgram`;
    //document.getElementById('profile_picture').src = obj.profilkep
    for (let i = 0; i < postok.length; i++) {
    if (postok[i].feltolto == username) {
    const post = postok[i]

    console.log(`<img src="../../assets/site/img/${username}_post${post.sorszam}.png" alt=""></img>`)

        postCont.innerHTML += `
            ${post.tipus === "kep"
                ? `<img src="../../assets/site/img/${username}_post${post.sorszam}.png" alt="" data-uploader="${post.feltolto}" data-number="${post.sorszam}" data-path="../../assets/site/img/">`
                : `<img src="../../assets/site/img/${username}_post${post.sorszam}.gif" alt="" data-uploader="${post.feltolto}" data-number="${post.sorszam}" data-path="../../assets/site/img/">`
            }`;
        }
    }
}

if (!(postok.find(post => post.feltolto === username))) {
        postCont.style.display = "block"
        postCont.innerHTML += `
            <div class="posts-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                <h3>Egyelőre csend van...</h3>
                <p>Honfitársadnak lehet sűrű a napirendje, vagy csak nem szeretne megosztani magánéletét. Mindenesetre, hátha majd posztolnak.</p>
            </div>`
}
