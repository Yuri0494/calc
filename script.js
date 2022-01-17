const buttons = document.querySelectorAll(".but");
const input = document.querySelector("input");
const equals = document.querySelector(".equals");
const results = document.querySelector(".results");
const reset = document.querySelector(".reset");
const resetInput = document.querySelector(".reset-input");


function setResult (expression, innerElement) {
    let el = document.createElement("p");
    el.innerText = `${expression} = ${eval(expression)}`;
    innerElement.append(el)
}

function deleteAll (el) {
    el.innerHTML = "";
    el.value = "";
}

buttons.forEach((item, i) => {
    item.addEventListener("click", () => {
        let value = input.value;
        input.value = value + item.innerHTML;
    })
});

equals.addEventListener("click", (event) => {
    setResult (input.value, results)
    deleteAll (input)
})

reset.addEventListener("click", (event) => {
    deleteAll (results);
})

resetInput.addEventListener("click", (event) => {
    deleteAll (input);
})