function encrypt(translation) {
    document.querySelector("#warning").removeAttribute("style");
    let textarea = document.querySelector("#text");
    const text = textarea.value;
    let defaultArea = document.querySelector("#default");
    let resultArea = document.querySelector("#result");
    let outputText = document.querySelector("#output_text");
    if (text != "") {
        let output = ""
        for (const element of text) {
            if (((element < 'a') || (element > 'z')) && (element != ' ')) {
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if ((text.length == 1 && text == " ") || text.replace(/ /g, "") == "") {
                defaultArea.classList.remove("invisible");
                resultArea.classList.add("invisible");
                return;
            }
            if (element == 'a') {
                output += translation["a"];
            }
            else if (element == 'e') {
                output += translation["e"];
            }
            else if (element == 'i') {
                output += translation["i"];
            }
            else if (element == 'o') {
                output += translation["o"];
            }
            else if (element == 'u') {
                output += translation["u"];
            }
            else {
                output += element;
            }
        }

        defaultArea.classList.add("invisible");
        resultArea.classList.remove("invisible");
        outputText.innerHTML = output;
    }

}

function decrypt(translation) {
    document.querySelector("#warning").removeAttribute("style");
    let textarea = document.querySelector("#text");
    let text = textarea.value;
    let defaultArea = document.querySelector("#default");
    let resultArea = document.querySelector("#result");
    let outputText = document.querySelector("#output_text");
    if (text != "") {
        for (const element of text) {
            if (((element < 'a') || (element > 'z')) && (element != ' ')) {
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if ((text.length == 1 && text == " ") || text.replace(/ /g, "") == "") {
                defaultArea.classList.remove("invisible");
                resultArea.classList.add("invisible");
                return;
            }
        }
        defaultArea.classList.add("invisible");
        resultArea.classList.remove("invisible");
        text = text.replace(new RegExp(translation["a"], "g"), "a");
        text = text.replace(new RegExp(translation["e"], "g"), "e");
        text = text.replace(new RegExp(translation["i"], "g"), "i");
        text = text.replace(new RegExp(translation["o"], "g"), "o");
        text = text.replace(new RegExp(translation["u"], "g"), "u");
        outputText.innerHTML = text;
    }
}

function clipboard() {
    const outputText = document.querySelector("#output_text");
    navigator.clipboard.writeText(outputText.value);
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copy');

let translation = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };

enc.addEventListener('click', function () { encrypt(translation); });
des.addEventListener('click', function () { decrypt(translation); });
copy.addEventListener('click', function () { clipboard(); });
