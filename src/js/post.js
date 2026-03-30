import { kerdesek } from "./data.js";

function showPost(uploader, number) {
    // A keresett poszt megtalálása
    let post;
    for (let k of kerdesek) {
        if (k.feltolto === uploader && k.sorszam === number) {
            post = k;
        }
    };

    let main = document.getElementsByClassName("page-inner")[0];
    document.getElementById("post-float-img").src = `../../assets/site/img/${post.feltolto}_post${post.sorszam}`;
}