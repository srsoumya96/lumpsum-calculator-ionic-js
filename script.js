const lumpsumInput = document.getElementById("input-amount-lumpsum");
const interestRateInput = document.getElementById("input-interest");
const durationInput = document.getElementById("input-duration");

const submitBtn = document.getElementById("button-submit");
const clearBtn = document.getElementById("button-clear");

const resultsOutput = document.getElementById("results-output");
const gainOutput = document.getElementById("gain-output");

const clear = () => {
  lumpsumInput.value = "";
  interestRateInput.value = "";
  durationInput.value = "";
};

submitBtn.addEventListener("click", () => {
  const lumpsum = lumpsumInput.value;
  const intRate = interestRateInput.value;
  const year = durationInput.value;

  var result = lumpsum * Math.pow(1 + intRate / 100, year);
  var gain = result - lumpsum;

  resultsOutput.innerHTML = Math.round(result);
  gainOutput.innerHTML = Math.round(gain);
});

clearBtn.addEventListener("click", clear);
