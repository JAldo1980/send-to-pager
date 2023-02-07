const phoneNumerals = document.querySelector(".phone-numerals");
const phoneScreenOutput = document.getElementById("phoneScreenOutput");
const pagerScreenOutput = document.getElementById("pagerScreenOutput");

// user input number value stored in Array

const userInputValue = [];

// audio notification

const audio = new Audio("pager.wav");

// phone number inputs

phoneNumerals.addEventListener("click", function (e) {
  if (userInputValue.length < 11) {
    phoneScreenOutput.textContent += e.target.id;
    userInputValue.push(e.target.id);
    phoneNumerals.disabled;
  }
});

// send btn

sendBtn.addEventListener("click", function () {
  if (phoneScreenOutput.textContent.length > 0) {
    function delaySend() {
      setTimeout(setDelay, 2500);
    }
    delaySend();

    function setDelay() {
      pagerScreenOutput.textContent = userInputValue.join(" ");
      audio.play();
      document.querySelector(".pager-box").style.backgroundColor = "red";
    }
  }
});

// reset button

resetBtn.addEventListener("click", function () {
  phoneScreenOutput.textContent = "";
  pagerScreenOutput.textContent = "";
  userInputValue.length = 0;
  document.querySelector(".pager-box").style.backgroundColor = "#283033";
});
