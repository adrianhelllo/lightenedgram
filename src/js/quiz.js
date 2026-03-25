import { kerdesek } from "./data.js";

let questionsContainer = document.querySelector("#quiz-questions");
let sortRand = [...kerdesek].sort(function(){return 0.5 - Math.random()});
const KERDESEK = kerdesek.length;

for (let i = 0; i < KERDESEK; i++) {
    questionsContainer.innerHTML += `
        <fieldset class="q-answers border">
            <legend>${sortRand[i].kerdes}</legend>
            <label for="a-${i+1}">
                <input id="a-${i+1}" name="k-${i+1}" type="radio" value="1"> ${sortRand[i].opt1}
                <span class="radio"></span>
            </label>
            <label for="b-${i+1}">
                <input id="b-${i+1}" name="k-${i+1}" type="radio" value="2"> ${sortRand[i].opt2}
                <span class="radio"></span>
            </label>
            <label for="c-${i+1}">
                <input id="c-${i+1}" name="k-${i+1}" type="radio" value="3"> ${sortRand[i].opt3}
                <span class="radio"></span>
            </label>
            <label for="d-${i+1}">
                <input id="d-${i+1}" name="k-${i+1}" type="radio" value="4"> ${sortRand[i].opt4}
                <span class="radio"></span>
            </label>
        </fieldset>
    `;
}

questionsContainer.parentElement.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;

    for (let i = 0; i < KERDESEK; i++) {
        let qCurrent = questionsContainer.children[i]; // Adott fieldset
        let selectedAns = qCurrent.querySelector(`input[name=k-${i+1}]:checked`);
        console.log("Found selected answer");
        if (selectedAns) {
            console.log(selectedAns.value, sortRand[i].helyes)
            if (Number(selectedAns.value) === sortRand[i].helyes) {
                score++;
                qCurrent.style.borderColor = "green";
            }
            else {
                qCurrent.style.borderColor = "red";
                qCurrent.querySelector(`input[value=${sortRand[i].helyes}] ~ .radio`).backgroundColor = "green";
            }
        }
    }
});


