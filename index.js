const inputBtns = document.querySelectorAll(".radio-btns>button");
const submitBtn = document.querySelector("form>button");
const beforeFeedback = document.getElementById("before-feedback");
const afterFeedback = document.getElementById("after-feedback");
const output = document.getElementById("output");

function resetBtns(index) {
    for (btn of inputBtns) {
        if (btn.innerText != index) {
            btn.className = "";
        }
    }
}

function scaninputBtns() {
    let selectedval = null;
    inputBtns.forEach((element) => {
        if (element.classList.contains("checked")) {
            selectedval = element.innerText;
        }
    });
    return selectedval;
}

inputBtns.forEach((element) => {
    element.addEventListener("click", (e) => {
        resetBtns(e.target.innerText);
        element.className = "checked";
    });
});

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    output.innerText = scaninputBtns();
    beforeFeedback.className = "hide";
    afterFeedback.className = "show";
});
