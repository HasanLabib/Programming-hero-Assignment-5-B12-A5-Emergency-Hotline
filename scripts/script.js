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

// heartBtn2.addEventListener("click", function (e) {
//   heartUpdate();
//   e.stopPropagation();
// });
// heartBtn3.addEventListener("click", function (e) {
//   heartUpdate();
//   e.stopPropagation();
// });
// heartBtn4.addEventListener("click", function (e) {
//   heartUpdate();
//   e.stopPropagation();
// });
// heartBtn5.addEventListener("click", function (e) {
//   heartUpdate();
//   e.stopPropagation();
// });
// heartBtn6.addEventListener("click", function (e) {
//   heartUpdate();
//   e.stopPropagation();
// });

function createNewElement(serviceName, number) {
  const date = new Date();
  const div = document.createElement("div");

  div.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "bg-[#FAFAFA]",
    "p-4",
    "rounded-lg",
    "mb-4"
  );
  div.innerHTML = `<div>
  <p class="text-lg">${serviceName}</p>
  <p class="text-lg text-[#5C5C5C]">${number}</p>
  </div> <p class="text-lg">${date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  })}</p>`;
  getElement(".call-history").appendChild(div);
}

const callBtn1 = getElement(".call-btn-1");
const callBtn2 = getElement(".call-btn-2");
const callBtn3 = getElement(".call-btn-3");
const callBtn4 = getElement(".call-btn-4");
const callBtn5 = getElement(".call-btn-5");
const callBtn6 = getElement(".call-btn-6");

let coin;
function callFunction(serviceName, number) {
  coin = parseInt(getElement(".coin-value").innerText);
  if (coin >= 20) {
    alert(`Calling ${serviceName} at ${number} .....`);
    coin -= 20;
    getElement(".coin-value").innerText = coin;
    createNewElement(serviceName, number);
  } else {
    alert(`Not enough money to call ${serviceName}`);
  }
}
let serviceName, number;
callBtn1.addEventListener("click", function (e) {
  serviceName = getElement(".emergency-sub-title").innerText;
  number = parseInt(getElement(".emergency-call-num").innerText);
  callFunction(serviceName, number);
  e.stopPropagation();
});

let clearBtn = getElement(".clear-btn");
clearBtn.addEventListener("click", function () {
  getElement(".call-history").innerHTML = "";
});

// Copy function
function copyFunction(className) {
  return navigator.clipboard.writeText(
    parseInt(getElement(className).innerText)
  );
}

const copyBtn1 = getElement(".copy-btn-1");
let copyValue;
copyBtn1.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  copyFunction(".emergency-call-num");
  copyValue++;
  getElement(".copy-value").innerText = copyValue;
  alert("Copied  to clipboard successfully ");
  e.stopPropagation();
});
