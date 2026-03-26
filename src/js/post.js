import { kerdesek } from "./data.js";

function showPost(uploader, number) {
    let post;
    for (let k of kerdesek) {
        if (k.feltolto === uploader && k.sorszam === number) {
            post = k;
        }
    };

    let main = document.getElementsByClassName("page-inner")[0];
    main.innerHTML += `
        
    `