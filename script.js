// CONFIGURAÇÃO RÁPIDA: edite os dados abaixo antes de publicar.
const CONFIG = {
  whatsapp: "5511999999999", // Troque pelo WhatsApp real, com código do país e DDD.
  phoneLabel: "(11) 99999-9999",
  instagram: "", // Exemplo: https://instagram.com/padariacentral
  facebook: "",
  address: "Adicione aqui o endereço da padaria"
};

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}
function openWhatsApp(message) {
  const number = (CONFIG.whatsapp || "").replace(/\D/g, "");
  if (!number || number === "5511999999999") {
    showToast("Antes de publicar, configure o WhatsApp real no arquivo script.js.");
    return;
  }
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}
document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openWhatsApp("Olá! Gostaria de fazer um pedido na Padaria Central.");
  });
});
document.querySelectorAll("[data-category]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openWhatsApp(`Olá! Gostaria de conhecer as opções de ${link.dataset.category} da Padaria Central.`);
  });
});
document.querySelectorAll("[data-phone-label]").forEach(el => el.textContent = CONFIG.phoneLabel);
document.querySelectorAll("[data-instagram]").forEach(el => {
  if (CONFIG.instagram) { el.href = CONFIG.instagram; el.target = "_blank"; el.rel = "noopener"; }
  else el.addEventListener("click", e => { e.preventDefault(); showToast("Adicione o link do Instagram no arquivo script.js."); });
});
document.querySelectorAll("[data-facebook]").forEach(el => {
  if (CONFIG.facebook) { el.href = CONFIG.facebook; el.target = "_blank"; el.rel = "noopener"; }
  else el.addEventListener("click", e => { e.preventDefault(); showToast("Adicione o link do Facebook no arquivo script.js."); });
});
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
