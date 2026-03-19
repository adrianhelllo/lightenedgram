import { kerdesek } from "./data.js";

let questionsContainer = document.querySelector("#quiz-questions");
let sortRand = [...kerdesek].sort(function(){return 0.5 - Math.random()});

for (let i = 0; i < kerdesek.length; i++) {
    questionsContainer.innerHTML += `
        <fieldset>
            <legend>${sortRand[i].kerdes}</legend>
            <label for="a">
                <input id="a" name="k-${i+1}" type="radio" value="1"> ${sortRand[i].opt1}
            </label>
            <label for="b">
                <input id="b" name="k-${i+1}" type="radio" value="2"> ${sortRand[i].opt2}
            </label>
            <label for="c">
                <input id="c" name="k-${i+1}" type="radio" value="3"> ${sortRand[i].opt3}
            </label>
            <label for="d">
                <input id="d" name="k-${i+1}" type="radio" value="4"> ${sortRand[i].opt4}
            </label>
        </fieldset>
    `;
}

questionsContainer.parentElement.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;

    for (let i = 0; i < kerdesek.length; i++) {
        let selectedAns = questionsContainer.querySelector(`input[name=k-${i+1}]:checked`);
        console.log("Found selected answer")
        if (selectedAns) {
            console.log(selectedAns.value, sortRand[i].helyes)
            if (Number(selectedAns.value) === sortRand[i].helyes) {
                score++;
            }
        }
    }

    console.log(score)
});


