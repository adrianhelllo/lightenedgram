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

//document.getElementById('name').innerHTML = obj.becenev
//document.getElementById('username').innerHTML = obj.nev
//document.getElementById('introduction').innerHTML = obj.leiras
//document.getElementById('profile_picture').src = obj.profilkep

//the placeholder content will show up if data is missing from data.js

if (obj.becenev == "") {
    document.getElementById('name').innerHTML = "Name not found"
}else{
    document.getElementById('name').innerHTML = obj.becenev
}

document.getElementById('username').innerHTML = obj.nev

if (obj.leiras == "") {
    document.getElementById('introduction').innerHTML = "Introduction not found"
}else{
    document.getElementById('introduction').innerHTML = obj.leiras
}

if (obj.profilkep == "") {
    document.getElementById('profile_picture').src= "../../assets/site/placeholders/1x1_notfound_pfp.png"
}else{
    document.getElementById('profile_picture').src = obj.profilkep
}