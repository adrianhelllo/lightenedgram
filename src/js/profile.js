import { profilok } from "./data.js";

let params = new URLSearchParams(window.location.search);
let username = params.get('user')
//ha http://127.0.0.1:5500/src/pages/profile.html?user=jeanjacq_rousseau
//akkor a username értéke jeanjacq_rousseau
let obj = profilok.find(user => user.nev === username);
//a profilok array-ben megkeressük azt az objektumot aminek a .nev attributoma
//az egyenlo a username-el, és az objektumot az obj valtozoba rakjuk

console.log(username);
console.log(obj)

document.getElementsByClassName('name')[0].innerHTML = obj.becenev
document.getElementsByClassName('username')[0].innerHTML = obj.nev
document.getElementsByClassName('introduction')[0].innerHTML = obj.leiras
//document.getElementById('profile_picture').src = obj.profilkep


document.title = `@${username} - lightenedgram`
document.getElementById('profile_picture').src = `../../assets/site/img/${username}_pfp.png` // a weboldal nem fogja betölteni az esetleges placeholdert sajnos