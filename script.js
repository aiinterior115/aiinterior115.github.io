// ===== EDIT THIS: WhatsApp number in international format, digits only =====
// Example format for Bangladesh: 8801XXXXXXXXX  (leave empty until you add the real number)
var WHATSAPP_NUMBER = "";
var WHATSAPP_MESSAGE = "Hello AI INTERIOR, I would like to discuss an interior design project.";

(function () {
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  });

  // gallery filter
  var btns = document.querySelectorAll(".filters button");
  var items = document.querySelectorAll(".gallery figure");
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      btns.forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on");
      items.forEach(function (f) { f.hidden = b.dataset.f !== "all" && f.dataset.c !== b.dataset.f; });
    });
  });

  // WhatsApp button
  var wa = document.getElementById("wa");
  var note = document.getElementById("wanote");
  var num = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (num) {
    wa.href = "https://wa.me/" + num + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
  } else {
    wa.addEventListener("click", function (e) {
      e.preventDefault();
      note.textContent = "[WhatsApp number not set yet. Add it in script.js.]";
    });
  }

  document.getElementById("yr").textContent = new Date().getFullYear();
})();
