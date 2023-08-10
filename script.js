const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function() {
  const patternGauge = parseFloat(document.getElementById("patternGauge").value);
  const myGauge = parseFloat(document.getElementById("myGauge").value);
  const desiredSize = parseFloat(document.getElementById("desiredSize").value);

  if (isNaN(patternGauge) || isNaN(myGauge) || isNaN(desiredSize)) {
    result.textContent = "입력값을 확인해주세요.";
    return;
  }

  const sizeFactor = patternGauge / myGauge;
  const recommendedPatternSize = desiredSize / sizeFactor;
  result.textContent = `도안에서 추천하는 사이즈: 약 ${recommendedPatternSize.toFixed(2)}`;
});