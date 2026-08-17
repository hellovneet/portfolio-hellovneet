const certificates = [
  ["AI Workshop — Artificial Intelligence Workshop", "Bharat Space Education Research Centre • 25 Apr 2026", "assets/certificates/ai-workshop.png"],
  ["AI Upskilling: Technical Foundation", "Qualcomm Academy • 10 Jun 2026", "assets/certificates/qualcomm-ai-upskilling.png"],
  ["Computer Basic Certificate", "Future IT College • Grade A", "assets/certificates/computer-basic.jpg"],
  ["Quiz on TB Mukt Bharat Abhiyan", "Ministry of Youth Affairs & Sports • 22 Jul 2026", "assets/certificates/tb-mukt-bharat.png"],
  ["Nasha Mukt Yuva — Recognition", "Ministry of Youth Affairs & Sports", "assets/certificates/nasha-mukt-yuva.png"],
  ["Har Ghar Tiranga Campaign", "Ministry of Culture • 2025", "assets/certificates/har-ghar-tiranga.png"],
  ["Freedom Movement Certificate", "Internshala • Commemorative participation", "assets/certificates/freedom-movement.png"],
  ["Eshan Battlefield Series S02 2025", "Hellfire Club / Eshan College • BGMI participation", "assets/certificates/eshan-battlefield.png"]
];

const grid = document.getElementById("certGrid");
certificates.forEach(([title, issuer, img]) => {
  const card = document.createElement("article");
  card.className = "cert";
  card.innerHTML = `<img src="${img}" alt="${title}" loading="lazy"><div class="cert-body"><b>${title}</b><p>${issuer}</p></div>`;
  card.addEventListener("click", () => openModal(title, img));
  grid.appendChild(card);
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
function openModal(title, img){
  modalImg.src = img; modalImg.alt = title; modalTitle.textContent = title;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
}
function closeModal(){
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); modalImg.src="";
}
document.getElementById("closeModal").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => nav.classList.toggle("mobile"));
document.querySelectorAll(".nav nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("mobile")));

window.addEventListener("scroll", () => {
  const h = document.documentElement;
  document.querySelector(".progress").style.width = `${(h.scrollTop/(h.scrollHeight-h.clientHeight))*100}%`;
});
