import { postok } from "./data.js";

const container = document.querySelector("#feed");

for (let i = 0; i < postok.length; i++) {
  const post = postok[i];

  container.innerHTML += `
    <article class="post" id="${post.feltolto}-${post.sorszam}">
      <div class="post-author">
        <img class="author-pfp" src="/assets/site/img/${post.feltolto}_pfp.png" alt="Profile picture" height="35" width="35">
        <a href="src/pages/profile.html?user=${post.feltolto}" class="author-name">${post.feltolto}</a>
      </div>
      <figure class="post-content">
        ${
          post.tipus === "kep"
            ? `<img src="/assets/site/img/${post.feltolto}_post${post.sorszam}.png" alt="">`
            : `<img src="/assets/site/img/${post.feltolto}_post${post.sorszam}.gif" alt=""></video>`
        }
        <figcaption>${post.leiras}</figcaption>
      </figure>
    </article>
  `;
}