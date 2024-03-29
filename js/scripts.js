function calculateTriangleArea() {
  const base = getInputValue("triangleBase");
  const height = getInputValue("triangleHeight");
  const area = 0.5 * base * height;
  setArea("triangleArea", area);
  console.log(area);
}
function calculateRectArea() {
  const width = getInputValue("rectangleWidth");
  const length = getInputValue("rectangleLength");
  const area = width * length;
  setArea("rectangleArea", area);
  console.log(area);
}
function calculateParallelogramArea() {
  const base = getInputValue("para-base");
  const height = getInputValue("para-height");
  const area = base * height;
  setArea("parallelogramArea", area);
  console.log(area);
}
function calculateRhombusArea() {
  const d1 = getInputValue("rhombus-d1");
  const d2 = getInputValue("rhombus-d2");
  const area = 0.5 * d1 * d2;
  setArea("rhombusArea", area);
  console.log(area);
}
function calculatePentagonArea() {
  const p = getInputValue("pentagon-p");
  const b = getInputValue("pentagon-base");
  const area = 0.5 * p * b;
  setArea("pentagonArea", area);
  console.log(area);
}
function calculateEllipseArea() {
  const a = getInputValue("ellipse-a");
  const b = getInputValue("ellipse-b");
  const pi = 3.14;
  const area = pi * a * b;
  setArea("ellipseArea", area.toFixed(2));
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
