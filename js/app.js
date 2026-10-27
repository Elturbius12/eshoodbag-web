/*
  LÓGICA DEL SITIO DE HOODBAG
  ---------------------------
  No hace falta tocar este archivo para cambiar textos o datos:
  eso se edita en index.html y en js/config.js.
*/

(function () {
  "use strict";

  function construirEnlaceWhatsApp(mensaje) {
    var texto = encodeURIComponent(mensaje);
    return "https://wa.me/" + HOODBAG_WHATSAPP_NUMBER + "?text=" + texto;
  }

  function obtenerParametroOrigen() {
    var params = new URLSearchParams(window.location.search);
    var origen = params.get("origen");
    if (!origen) return null;
    var mapa = {
      tiktok: "TikTok",
      instagram: "Instagram",
      facebook: "Facebook",
    };
    return mapa[origen.toLowerCase()] || null;
  }

  function mensajePorDefectoConOrigen() {
    var mensaje = HOODBAG_DEFAULT_MESSAGE;
    var origenLegible = obtenerParametroOrigen();
    if (origenLegible) {
      mensaje += " Vengo de " + origenLegible + ".";
    }
    return mensaje;
  }

  function actualizarBotonesWhatsApp() {
    var enlace = construirEnlaceWhatsApp(mensajePorDefectoConOrigen());
    var botones = document.querySelectorAll("[data-whatsapp-boton]");
    botones.forEach(function (boton) {
      boton.setAttribute("href", enlace);
    });
  }

  function actualizarEnlacesRedes() {
    var mapaIds = {
      tiktok: "enlace-tiktok",
      instagram: "enlace-instagram",
      facebook: "enlace-facebook",
    };
    Object.keys(mapaIds).forEach(function (red) {
      var el = document.getElementById(mapaIds[red]);
      if (el && HOODBAG_SOCIAL_LINKS[red]) {
        el.setAttribute("href", HOODBAG_SOCIAL_LINKS[red]);
      }
    });
  }

  function mostrarPrecioPremiumSiExiste() {
    var el = document.getElementById("precio-premium-valor");
    if (!el) return;
    if (HOODBAG_PRECIO_PREMIUM) {
      el.textContent = "S/ " + HOODBAG_PRECIO_PREMIUM;
      el.closest("[data-precio-premium-bloque]").hidden = false;
    }
  }

  function inicializarMenuMovil() {
    var boton = document.getElementById("boton-menu");
    var menu = document.getElementById("menu-navegacion");
    if (!boton || !menu) return;

    boton.addEventListener("click", function () {
      var expandido = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!expandido));
      menu.classList.toggle("menu-abierto");
    });

    menu.querySelectorAll("a").forEach(function (enlace) {
      enlace.addEventListener("click", function () {
        menu.classList.remove("menu-abierto");
        boton.setAttribute("aria-expanded", "false");
      });
    });
  }

  function inicializarArmaTuConsulta() {
    var form = document.getElementById("form-arma-consulta");
    if (!form) return;

    form.addEventListener("submit", function (evento) {
      evento.preventDefault();

      var modelo = document.getElementById("consulta-modelo").value;
      var color = document.getElementById("consulta-color").value;
      var talla = document.getElementById("consulta-talla").value;
      var cantidad = document.getElementById("consulta-cantidad").value;

      var partes = [HOODBAG_DEFAULT_MESSAGE];
      partes.push(
        "Modelo: " + modelo + ". Color: " + color + ". Talla: " + talla + ". Cantidad: " + cantidad + "."
      );

      var origenLegible = obtenerParametroOrigen();
      if (origenLegible) {
        partes.push("Vengo de " + origenLegible + ".");
      }

      var mensajeFinal = partes.join(" ");
      var enlace = construirEnlaceWhatsApp(mensajeFinal);
      window.open(enlace, "_blank", "noopener");
    });
  }

  function respetarPreferenciaDeMovimiento() {
    var prefiereReducido = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefiereReducido) {
      document.documentElement.classList.add("movimiento-reducido");
    }
  }

  function inicializarAnioPie() {
    var el = document.getElementById("anio-actual");
    if (el) {
      el.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    actualizarBotonesWhatsApp();
    actualizarEnlacesRedes();
    mostrarPrecioPremiumSiExiste();
    inicializarMenuMovil();
    inicializarArmaTuConsulta();
    respetarPreferenciaDeMovimiento();
    inicializarAnioPie();
  });
})();
