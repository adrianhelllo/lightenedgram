import { kerdesek } from "./data.js";

let form = document.querySelector("#quiz-questions");
let sortRand = [...kerdesek].sort(function(){return 0.5 - Math.random()});

for (let i = 0; i < kerdesek.length; i++) {
    form.innerHTML += `
        <fieldset>
            <legend>${sortRand[i].kerdes}</legend>
            <label for="a">
                <input id="a" name="k-${i+1}" type="radio" value"1"> ${sortRand[i].opt1}
            </label>
            <label for="b">
                <input id="b" name="k-${i+1}" type="radio" value"2"> ${sortRand[i].opt2}
            </label>
            <label for="c">
                <input id="c" name="k-${i+1}" type="radio" value"3"> ${sortRand[i].opt3}
            </label>
            <label for="d">
                <input id="d" name="k-${i+1}" type="radio" value"4"> ${sortRand[i].opt4}
            </label>
        </fieldset>
    `;
}
