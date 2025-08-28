function getElement(classname) {
  return document.querySelector(classname);
}
const heartBtn1 = getElement(".heart-btn-1");
const heartBtn2 = getElement(".heart-btn-2");
const heartBtn3 = getElement(".heart-btn-3");
const heartBtn4 = getElement(".heart-btn-4");
const heartBtn5 = getElement(".heart-btn-5");
const heartBtn6 = getElement(".heart-btn-6");
const heartBtn7 = getElement(".heart-btn-7");
const heartBtn8 = getElement(".heart-btn-8");
const heartBtn9 = getElement(".heart-btn-9");
//heart button function
let heartValue;
function heartUpdate() {
  heartValue = parseInt(getElement(".heart-value").innerText);
  heartValue++;
  getElement(".heart-value").innerText = heartValue;
}
// card-1
heartBtn1.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});
// card-2
heartBtn2.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});
// card-3
heartBtn3.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});
// card-4
heartBtn4.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});
// card-5
heartBtn5.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});
// card-6
heartBtn6.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});
// card-7
heartBtn7.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});
// card-8
heartBtn8.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});
// card-9
heartBtn9.addEventListener("click", function (e) {
  heartUpdate();
  e.stopPropagation();
});

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
  // div.innerHTML = `<div>
  // <p class="text-lg">${serviceName}</p>
  // <p class="text-lg text-[#5C5C5C]">${number}</p>
  // </div> <p class="text-lg">${date.toLocaleTimeString("en-US", {
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric",
  //   hour12: true,
  // })}</p>`;

  const servicePTag = document.createElement("p");
  servicePTag.classList.add("text-lg");
  servicePTag.innerText = serviceName;

  const serviceNumPTag = document.createElement("p");
  serviceNumPTag.classList.add("text-lg", "text-[#5C5C5C]");
  serviceNumPTag.innerText = number;
  const div2 = document.createElement("div");
  div2.appendChild(servicePTag);
  div2.appendChild(serviceNumPTag);

  const timePTag = document.createElement("p");
  timePTag.classList.add("text-lg");
  timePTag.innerText = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  div.appendChild(div2);
  div.appendChild(timePTag);

  getElement(".call-history").appendChild(div);
}

const callBtn1 = getElement(".call-btn-1");
const callBtn2 = getElement(".call-btn-2");
const callBtn3 = getElement(".call-btn-3");
const callBtn4 = getElement(".call-btn-4");
const callBtn5 = getElement(".call-btn-5");
const callBtn6 = getElement(".call-btn-6");
const callBtn7 = getElement(".call-btn-7");
const callBtn8 = getElement(".call-btn-8");
const callBtn9 = getElement(".call-btn-9");
// call button function
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

//card-1
callBtn1.addEventListener("click", function (e) {
  serviceName = getElement(".emergency-title").innerText;
  number = parseInt(getElement(".emergency-call-num").innerText);
  callFunction(serviceName, number);
  e.stopPropagation();
});
//card-2
callBtn2.addEventListener("click", function (e) {
  serviceName = getElement(".police-title").innerText;
  number = parseInt(getElement(".police-call-num").innerText);
  callFunction(serviceName, number);
  e.stopPropagation();
});
//card-3
callBtn3.addEventListener("click", function (e) {
  serviceName = getElement(".fire-title").innerText;
  number = parseInt(getElement(".fire-call-num").innerText);
  callFunction(serviceName, number);
  e.stopPropagation();
});
//card-4
callBtn4.addEventListener("click", function (e) {
  serviceName = getElement(".ambulance-title").innerText;
  number = parseInt(
    getElement(".ambulance-call-num").innerText.replace("-", "")
  );
  const numberStr = getElement(".ambulance-call-num").innerText;
  callFunction(serviceName, numberStr);
  e.stopPropagation();
});
//card-5
callBtn5.addEventListener("click", function (e) {
  serviceName = getElement(".women-title").innerText;
  number = parseInt(getElement(".women-call-num").innerText);
  callFunction(serviceName, number);
  e.stopPropagation();
});
//card-6
callBtn6.addEventListener("click", function (e) {
  serviceName = getElement(".anti-corruption-title").innerText;
  number = parseInt(getElement(".anti-corruption-call-num").innerText);
  callFunction(serviceName, number);
  e.stopPropagation();
});
//card-7
callBtn7.addEventListener("click", function (e) {
  serviceName = getElement(".electricity-title").innerText;
  number = parseInt(getElement(".electricity-call-num").innerText);
  callFunction(serviceName, number);
  e.stopPropagation();
});
//card-8
callBtn8.addEventListener("click", function (e) {
  serviceName = getElement(".brac-title").innerText;
  number = parseInt(getElement(".brac-call-num").innerText);
  callFunction(serviceName, number);
  e.stopPropagation();
});
//card-9
callBtn9.addEventListener("click", function (e) {
  serviceName = getElement(".railway-title").innerText;
  number = parseInt(getElement(".railway-call-num").innerText);
  callFunction(serviceName, number);
  e.stopPropagation();
});

// Clear function
let clearBtn = getElement(".clear-btn");
clearBtn.addEventListener("click", function (e) {
  getElement(".call-history").innerHTML = "";
  e.stopPropagation();
});

// Copy function
function copyFunction(className) {
  return navigator.clipboard.writeText(
    parseInt(getElement(className).innerText)
  );
}

const copyBtn1 = getElement(".copy-btn-1");
const copyBtn2 = getElement(".copy-btn-2");
const copyBtn3 = getElement(".copy-btn-3");
const copyBtn4 = getElement(".copy-btn-4");
const copyBtn5 = getElement(".copy-btn-5");
const copyBtn6 = getElement(".copy-btn-6");
const copyBtn7 = getElement(".copy-btn-7");
const copyBtn8 = getElement(".copy-btn-8");
const copyBtn9 = getElement(".copy-btn-9");
//copy btn function

let copyValue;
//card-1
copyBtn1.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  number = parseInt(getElement(".emergency-call-num").innerText);
  copyFunction(".emergency-call-num");
  copyValue++;
  getElement(".copy-value").innerText = copyValue;
  alert(`Copied ${number} to clipboard successfully `);
  e.stopPropagation();
});
//card-2
copyBtn2.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  copyFunction(".police-call-num");
  number = parseInt(getElement(".police-call-num").innerText);
  copyValue++;
  getElement(".copy-value").innerText = copyValue;
  alert(`Copied ${number} to clipboard successfully `);
  e.stopPropagation();
});
//card-3
copyBtn3.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  copyFunction(".fire-call-num");
  number = parseInt(getElement(".fire-call-num").innerText);
  copyValue++;
  getElement(".copy-value").innerText = copyValue;
  alert(`Copied ${number} to clipboard successfully `);
  e.stopPropagation();
});
//card-4
copyBtn4.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  navigator.clipboard.writeText(
    parseInt(getElement(".ambulance-call-num").innerText.replace("-", ""))
  );
  copyValue++;
  const numberStr = getElement(".ambulance-call-num").innerText;
  getElement(".copy-value").innerText = copyValue;
  alert(`Copied ${numberStr} to clipboard successfully `);
  e.stopPropagation();
});
//card-5
copyBtn5.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  copyFunction(".women-call-num");
  number = parseInt(getElement(".women-call-num").innerText);
  copyValue++;
  getElement(".copy-value").innerText = copyValue;
  alert(`Copied ${number} to clipboard successfully `);
  e.stopPropagation();
});
//card-6
copyBtn6.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  copyFunction(".anti-corruption-call-num");
  number = parseInt(getElement(".anti-corruption-call-num").innerText);
  copyValue++;
  getElement(".copy-value").innerText = copyValue;
  alert(`Copied ${number} to clipboard successfully `);
  e.stopPropagation();
});
//card-7
copyBtn7.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  copyFunction(".electricity-call-num");
  number = parseInt(getElement(".electricity-call-num").innerText);
  copyValue++;
  getElement(".copy-value").innerText = copyValue;
  alert(`Copied ${number} to clipboard successfully `);
  e.stopPropagation();
});
//card-8
copyBtn8.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  copyFunction(".brac-call-num");
  number = parseInt(getElement(".brac-call-num").innerText);
  copyValue++;
  getElement(".copy-value").innerText = copyValue;
  alert(`Copied ${number} to clipboard successfully `);
  e.stopPropagation();
});
//card-9
copyBtn9.addEventListener("click", function (e) {
  copyValue = parseInt(getElement(".copy-value").innerText);
  copyFunction(".railway-call-num");
  number = parseInt(getElement(".railway-call-num").innerText);
  copyValue++;
  getElement(".copy-value").innerText = copyValue;
  alert(`Copied ${number} to clipboard successfully `);
  e.stopPropagation();
});
