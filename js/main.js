const imgFloat1 = document.querySelector(".img__float1");
const imgFloat2 = document.querySelector(".img__float2");
const imgFloat3 = document.querySelector(".img__float3");
const imgFloat4 = document.querySelector(".img__float4");
const imgFloat5 = document.querySelector(".img__float5");
const imgFloat6 = document.querySelector(".img__float6");
const imgFloat7 = document.querySelector(".img__float7");
const imgFloat8 = document.querySelector(".img__float8");
const imgFloat9 = document.querySelector(".img__float9");
const imgFloat10 = document.querySelector(".img__float10");
const imgFloat11 = document.querySelector(".img__float11");
const imgFloat12 = document.querySelector(".img__float12");
const listGroup1 = document.getElementById("list__group1");
const listGroup2 = document.getElementById("list__group2");
const listGroup3 = document.getElementById("list__group3");
const listGroup4 = document.getElementById("list__group4");
const listGroup5 = document.getElementById("list__group5");
const listGroup6 = document.getElementById("list__group6");
const listGroup7 = document.getElementById("list__group7");
const listGroup8 = document.getElementById("list__group8");
const listGroup9 = document.getElementById("list__group9");
const listGroup10 = document.getElementById("list__group10");
const listGroup11 = document.getElementById("list__group11");
const listGroup12 = document.getElementById("list__group12");

const btn = document.getElementById("btn");
const photoTop = document.getElementById("photo__top");
const loading = document.querySelector(".lds-hourglass");

btn.addEventListener("click", () => {
  loading.style.display = "block";
  setTimeout(function () {
    loading.style.display = "none";
  }, 5000);
    btn.style.display = "none";
    setTimeout(function () {
        photoTop.style.display = "block";
    }, 5000);
});

imgFloat1.addEventListener("click", () => {
  imgFloat1.classList.add("img__none");
});

imgFloat1.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-6.jpeg");
  listGroup1.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat1.classList.remove("img__none");
  }, 5000);
});

imgFloat2.addEventListener("click", () => {
  imgFloat2.classList.add("img__none");
});

imgFloat2.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-1.jpeg");
  listGroup2.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat2.classList.remove("img__none");
  }, 5000);
});

imgFloat3.addEventListener("click", () => {
  imgFloat3.classList.add("img__none");
});

imgFloat3.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-3.jpeg");
  listGroup3.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat3.classList.remove("img__none");
  }, 5000);
});

imgFloat4.addEventListener("click", () => {
  imgFloat4.classList.add("img__none");
});

imgFloat4.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-4.jpeg");
  listGroup4.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat4.classList.remove("img__none");
  }, 5000);
});

imgFloat5.addEventListener("click", () => {
  imgFloat5.classList.add("img__none");
});

imgFloat5.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-5.jpeg");
  listGroup5.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat5.classList.remove("img__none");
  }, 5000);
});

imgFloat6.addEventListener("click", () => {
  imgFloat6.classList.add("img__none");
});

imgFloat6.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-2.jpeg");
  listGroup6.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat6.classList.remove("img__none");
  }, 5000);
});

imgFloat7.addEventListener("click", () => {
  imgFloat7.classList.add("img__none");
});

imgFloat7.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-3.jpeg");
  listGroup7.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat7.classList.remove("img__none");
  }, 5000);
});

imgFloat8.addEventListener("click", () => {
  imgFloat8.classList.add("img__none");
});

imgFloat8.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-2.jpeg");
  listGroup8.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat8.classList.remove("img__none");
  }, 5000);
});

imgFloat9.addEventListener("click", () => {
  imgFloat9.classList.add("img__none");
});

imgFloat9.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-1.jpeg");
  listGroup9.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat9.classList.remove("img__none");
  }, 5000);
});

imgFloat10.addEventListener("click", () => {
  imgFloat10.classList.add("img__none");
});

imgFloat10.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-4.jpeg");
  listGroup10.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat10.classList.remove("img__none");
  }, 5000);
});

imgFloat11.addEventListener("click", () => {
  imgFloat11.classList.add("img__none");
});

imgFloat11.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-5.jpeg");
  listGroup11.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat11.classList.remove("img__none");
  }, 5000);
});

imgFloat12.addEventListener("click", () => {
  imgFloat12.classList.add("img__none");
});

imgFloat12.addEventListener("click", () => {
  let createImg = document.createElement("img");
  createImg.classList.add("img__float");
  createImg.setAttribute("src", "./img/item-6.jpeg");
  listGroup12.appendChild(createImg);
  setTimeout(function () {
    createImg.classList.add("img__none");
  }, 5000);
  setTimeout(function () {
    imgFloat12.classList.remove("img__none");
  }, 5000);
});
