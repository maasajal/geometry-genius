function calculateTriangleArea() {
  const base = getInputValue("triangleBase");
  const height = getInputValue("triangleHeight");
  const area = 0.5 * base * height;
  setArea("triangleArea", area);
  console.log(area);
}

function getInputValue(idName) {
  const value = parseFloat(document.getElementById(idName).value);
  return value;
}
function setArea(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
