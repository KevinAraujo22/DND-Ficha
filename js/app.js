/* ============================================================
   APP — boot, navegação por abas, tela inicial.
   ============================================================ */
(function (root) {
  "use strict";

  function showTab(name) {
    document.body.classList.remove("home");
    document.querySelectorAll(".main-tabs .tab").forEach(function (t) { t.classList.toggle("active", t.dataset.page === name); });
    document.querySelectorAll(".page").forEach(function (p) { p.classList.toggle("active", p.id === "page-" + name); });
    if (name === "compendio" && root.DNDCompendium) root.DNDCompendium.open();
    if (name === "criar" && root.DNDCreator) root.DNDCreator.reset();
    try { history.replaceState(null, "", "#" + name); } catch (e) {}
    window.scrollTo(0, 0);
  }

  function leaveHome() { document.body.classList.remove("home"); }

  function boot() {
    root.DNDSheet.boot();
    root.DNDCompendium.boot();
    root.DNDCreator.boot();

    document.querySelectorAll(".main-tabs .tab").forEach(function (t) {
      t.addEventListener("click", function () { leaveHome(); showTab(t.dataset.page); });
    });

    var bNew = document.getElementById("btnNovoPersonagem");
    if (bNew) bNew.addEventListener("click", function () { leaveHome(); showTab("criar"); });
    var bOpen = document.getElementById("btnAbrirFicha");
    if (bOpen) bOpen.addEventListener("click", function () { leaveHome(); showTab("principal"); });
    var bCompendio = document.getElementById("btnAbrirCompendio");
    if (bCompendio) bCompendio.addEventListener("click", function () { leaveHome(); showTab("compendio"); });

    /* rota inicial */
    var hash = (location.hash || "").replace("#", "");
    var known = ["principal", "magias", "inventario", "historia", "compendio", "criar"];
    if (known.indexOf(hash) >= 0) { leaveHome(); showTab(hash); }
    else if (root.DNDSheet.data.fields && root.DNDSheet.data.fields.nome) { /* mantém home, mas ficha existe */ }
  }

  root.DNDApp = { showTab: showTab, boot: boot };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})(window);
