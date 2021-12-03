import { convert } from "./scripts/convertCaller.js";

var cifraOption = document.querySelector("#cifra");
var base64Option = document.querySelector("#base64");
var addOption = document.querySelector(".add-box");
var addInput = document.querySelector("#blocks-added");
var convertBtn = document.querySelector("#convert-button");
var codeSelection = document.querySelector("#code");
var decodeSelection = document.querySelector("#decode");
var messageAppearBox = document.querySelector("textarea");
var currentBase = true;
var codeOrDecode = true;

/* Onclick Cifra selection | toggle AddInput appearance | currentBase = true if cifra, false if base64 */
cifraOption.addEventListener("click", () => {
  currentBase = true;
  if (addOption.classList.contains("display-selection")) {
    addOption.classList.remove("display-selection");
  } else {
    addOption.classList.add("display-selection");
  }
});

/* Onclick Base64 selection | toggle AddInput disappearance | currentBase = true if cifra, false if base64 */
base64Option.addEventListener("click", () => {
  currentBase = false;
  if (!addOption.classList.contains("display-selection")) {
    addOption.classList.add("display-selection");
  } else {
    return;
  }
});

/* Onclick Code or Decode selection: true if code || false if decode */
codeSelection.addEventListener("click", () => {
  codeOrDecode = true;
});
decodeSelection.addEventListener("click", () => {
  codeOrDecode = false;
});

/* Convert action */
convertBtn.addEventListener("click", (evento) => {
  evento.preventDefault();
  var messageInput = document.querySelector("#message");
  var message = messageInput.value;
  var addValue = parseInt(addInput.value);
  convert(message, addValue, currentBase, codeOrDecode, messageAppearBox);
});
