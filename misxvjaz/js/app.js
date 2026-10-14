const allImages = document.querySelectorAll("img");
allImages.forEach((e) => {
  e.setAttribute("loading", "lazy");
});

const allButton = document.querySelectorAll(".button");
allButton.forEach((e) => {
  e.setAttribute("target", "_blank");
});

const contador = (() => {
  const FECHA_OBJETIVO = new Date("2026-11-22T21:00:00");

  function actualizarContador() {
    const ahora = new Date();
    const diferencia = FECHA_OBJETIVO - ahora;

    const elDias = document.getElementById("dias");
    const elHoras = document.getElementById("horas");
    const elMinutos = document.getElementById("minutos");
    const elSegundos = document.getElementById("segundos");

    if (diferencia <= 0) {
      if (elDias) elDias.textContent = "00";
      if (elHoras) elHoras.textContent = "00";
      if (elMinutos) elMinutos.textContent = "00";
      if (elSegundos) elSegundos.textContent = "00";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    if (elDias) elDias.textContent = String(dias).padStart(2, "0");
    if (elHoras) elHoras.textContent = String(horas).padStart(2, "0");
    if (elMinutos) elMinutos.textContent = String(minutos).padStart(2, "0");
    if (elSegundos) elSegundos.textContent = String(segundos).padStart(2, "0");
  }

  actualizarContador();
  setInterval(actualizarContador, 1000);
})();

const alias = "jazvegezzi.07";
document.getElementById("btn-alias").addEventListener("click", () => {
  navigator.clipboard
    .writeText(alias)
    .then(() => {
      alert("El alias se copió exitosamente!");
    })
    .catch((err) => {
      console.error("Error al copiar: ", err);
    });
});

// Musica
// Musica + pantalla de entrada
const musica = document.getElementById("musica-fondo");
musica.volume = 0.35;

const portada = document.getElementById("portada");
const btnAbrir = document.getElementById("btn-abrir");

document.body.classList.add("bloqueado");

btnAbrir.addEventListener("click", () => {
  // El play() va dentro del click para que el navegador lo permita
  musica.play().catch((err) => {
    console.error("No se pudo reproducir la música: ", err);
  });

  portada.classList.add("oculta");
  document.body.classList.remove("bloqueado");

  // Saca la portada del DOM cuando termina la animación
  portada.addEventListener("transitionend", () => portada.remove(), {
    once: true,
  });
});