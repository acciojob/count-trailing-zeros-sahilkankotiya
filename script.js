function trailingZeros(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

function handleClick() {
  const input = document.getElementById("inputNumber").value;
  const num = parseInt(input);
  const resultElement = document.getElementById("result");

  if (!isNaN(num) && num >= 0) {
    const result = trailingZeros(num);
    resultElement.textContent = `Trailing zeros in ${num}! is: ${result}`;
  } else {
    resultElement.textContent = "Please enter a valid non-negative integer.";
  }
}
