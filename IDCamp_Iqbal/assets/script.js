window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section"); // Semua section
  const navLinks = document.querySelectorAll("nav .menu a"); // Semua link di navbar

  let current = ""; // Variabel untuk menentukan section yang aktif

  // Memeriksa posisi scroll dan menentukan section yang sedang terlihat
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Menghapus kelas active dari semua link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    // Menambahkan kelas active pada link yang sesuai
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

const asGunpla = document.getElementById("as-gunpla");
const sdDetail = document.getElementById("sd-detail");
const egDetail = document.getElementById("eg-detail");
const hgDetail = document.getElementById("hg-detail");
const rgDetail = document.getElementById("rg-detail");
const mgDetail = document.getElementById("mg-detail");
const pgDetail = document.getElementById("pg-detail");
const linkSD = document.getElementById("sd");
const linkEG = document.getElementById("eg");
const linkHG = document.getElementById("hg");
const linkRG = document.getElementById("rg");
const linkMG = document.getElementById("mg");
const linkPG = document.getElementById("pg");

const linkBack = document.querySelectorAll(".back");

linkSD.addEventListener("click", function (e) {
    e.preventDefault();
    asGunpla.style.display = "none";
    sdDetail.style.display = "flex";
});
linkEG.addEventListener("click", function (e) {
    e.preventDefault();
    asGunpla.style.display = "none";
    egDetail.style.display = "flex";
});
linkHG.addEventListener("click", function (e) {
    e.preventDefault();
    asGunpla.style.display = "none";
    hgDetail.style.display = "flex";
});
linkRG.addEventListener("click", function (e) {
    e.preventDefault();
    asGunpla.style.display = "none";
    rgDetail.style.display = "flex";
});
linkMG.addEventListener("click", function (e) {
    e.preventDefault();
    asGunpla.style.display = "none";
    mgDetail.style.display = "flex";
});
linkPG.addEventListener("click", function (e) {
    e.preventDefault();
    asGunpla.style.display = "none";
    pgDetail.style.display = "flex";
});

linkBack.forEach(function (backButton) {
  backButton.addEventListener("click", function (e) {
    e.preventDefault();
    asGunpla.style.display = "block";
    sdDetail.style.display = "none";
    egDetail.style.display = "none";
    hgDetail.style.display = "none";
    rgDetail.style.display = "none";
    mgDetail.style.display = "none";
    pgDetail.style.display = "none";
  });
});

var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");

var div1 = document.getElementById("calibarn");
var div2 = document.getElementById("strike");
var div3 = document.getElementById("ggg");

btn1.addEventListener("click", () => {
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
});
btn2.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "block";
  div3.style.display = "none";
});
btn3.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
});

const btnActvList = document.querySelectorAll(".btn");
btn1.classList.add("buttonActive");
btnActvList.forEach((btnActv) => {
  btnActv.addEventListener("click", () => {
    document.querySelector(".buttonActive")?.classList.remove("buttonActive");
    btnActv.classList.add("buttonActive");
  });
});

function toggleFilter(buttonNumber) {
  // Reset filter for all buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.style.filter = "grayscale(1)";
  });

  // Remove filter for the clicked button
  const clickedButton = document.querySelector(
    `.btn:nth-child(${buttonNumber})`
  );
  if (clickedButton) {
    clickedButton.style.filter = "none";
  }
}
