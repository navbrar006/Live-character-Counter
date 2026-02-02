const maxLimit = 150;

function countCharacters() {
    const text = document.getElementById("textInput").value;
    const counter = document.getElementById("counter");

    counter.innerText = text.length + " / " + maxLimit + " characters";

    if (text.length > maxLimit) {
        counter.classList.add("limit-exceed");
    } else {
        counter.classList.remove("limit-exceed");
    }
}
