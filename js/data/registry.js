/* ============================================================
   Registro central do compêndio.
   Cada arquivo js/data/*.js chama DND.register('<colecao>', [...])
   colecoes: races, classes, subclasses, backgrounds, feats,
             weapons, weaponProperties, armor, gear, prostheses,
             weaponMastery, magicItems, spells
   Cada entrada deve ter: id, name, source ('srd' | 'homebrew')
   Fonte padrão dos itens homebrew: "Ryoko's Guide to the Yokai Realms"
   ============================================================ */
(function (root) {
  "use strict";
  var DND = root.DND || (root.DND = {});
  var C = DND.compendium || (DND.compendium = {
    races: [], classes: [], subclasses: [], backgrounds: [], feats: [],
    weapons: [], weaponProperties: [], armor: [], gear: [], prostheses: [],
    weaponMastery: [], magicItems: [], spells: []
  });

  DND.SOURCES = {
    srd: { label: "D&D básico", book: "SRD 5.1 (System Reference Document)", badge: "srd" },
    homebrew: { label: "Reinos Yokai", book: "Ryoko's Guide to the Yokai Realms", badge: "home" }
  };

  DND.register = function (collection, entries) {
    if (!C[collection]) C[collection] = [];
    (entries || []).forEach(function (e) {
      if (!e.source) e.source = "homebrew";
      if (e.source === "homebrew" && !e.book) e.book = DND.SOURCES.homebrew.book;
      if (e.source === "srd" && !e.book) e.book = DND.SOURCES.srd.book;
      C[collection].push(e);
    });
  };

  /* filtro por fonte: 'all' | 'srd' | 'homebrew' */
  DND.query = function (collection, opts) {
    opts = opts || {};
    var list = (C[collection] || []).slice();
    if (opts.source && opts.source !== "all") {
      list = list.filter(function (e) { return e.source === opts.source; });
    }
    if (opts.text) {
      var q = opts.text.toLowerCase();
      list = list.filter(function (e) {
        return JSON.stringify(e).toLowerCase().indexOf(q) !== -1;
      });
    }
    if (opts.sort !== false) {
      list.sort(function (a, b) { return (a.name || "").localeCompare(b.name || "", "pt"); });
    }
    return list;
  };

  DND.byId = function (collection, id) {
    return (C[collection] || []).filter(function (e) { return e.id === id; })[0] || null;
  };
})(window);