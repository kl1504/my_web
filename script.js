let compteur = 0;

const btn = document.getElementById("btn");
const affichage = document.getElementById("compteur");

btn.addEventListener("click", () => {
  compteur++;
  affichage.textContent = `Clics : ${compteur}`;
});
