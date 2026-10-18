// WhatsApp number for the enquiry form, digits only with country code (e.g. 8801XXXXXXXXX).
// While empty, the form stays hidden so visitors never see a broken button.
var WHATSAPP_NUMBER = "";

(function () {
  var burger = document.querySelector(".burger"), nav = document.getElementById("nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  });

  var btns = document.querySelectorAll(".filters button"), items = document.querySelectorAll(".gallery figure");
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      btns.forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on");
      items.forEach(function (f) { f.hidden = b.dataset.f !== "all" && f.dataset.c !== b.dataset.f; });
    });
  });

  var lb = document.getElementById("lb"), lbi = lb.querySelector("img");
  document.querySelectorAll(".zoom").forEach(function (z) {
    z.addEventListener("click", function () {
      var i = z.querySelector("img"); lbi.src = i.src; lbi.alt = i.alt;
      if (lb.showModal) lb.showModal();
    });
  });
  lb.addEventListener("click", function () { lb.close(); });

  var num = WHATSAPP_NUMBER.replace(/\D/g, ""), form = document.getElementById("cform");
  if (num) {
    form.hidden = false;
    document.getElementById("nocontact").hidden = true;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var t = "Hello AI INTERIOR, I am " + form.n.value + ". Project: " + form.t.value + ". " + form.m.value;
      window.open("https://wa.me/" + num + "?text=" + encodeURIComponent(t), "_blank", "noopener");
    });
  }
  document.getElementById("yr").textContent = new Date().getFullYear();
})();
