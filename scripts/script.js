function getElement(classname) {
  return document.querySelector(classname);
}
const heartBtn1 = getElement(".heart-btn-1");
const heartBtn2 = getElement(".heart-btn-2");
const heartBtn3 = getElement(".heart-btn-3");
const heartBtn4 = getElement(".heart-btn-4");
const heartBtn5 = getElement(".heart-btn-5");
const heartBtn6 = getElement(".heart-btn-6");

let heartValue;
function heartUpdate() {
  heartValue = parseInt(getElement(".heart-value").innerText);
  heartValue++;
  getElement(".heart-value").innerText = heartValue;
}
heartBtn1.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});
