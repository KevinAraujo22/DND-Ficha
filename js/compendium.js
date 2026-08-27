/* ============================================================
   COMPÊNDIO — páginas de seleção (Raças, Classes, Subclasses,
   Antecedentes, Talentos, Equipamento, Magias...) com filtro de
   fonte (D&D básico / Reinos Yokai) e busca.
   Renderiza dentro de #page-compendio.
   ============================================================ */
(function (root) {
  "use strict";
  var DND = root.DND;
  var esc = function (s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); };
  var nl2br = function (s) { return esc(s).replace(/\n/g, "<br>"); };

  var CATS = [
    { key: "races", label: "Raças" },
    { key: "classes", label: "Classes" },
    { key: "subclasses", label: "Subclasses" },
    { key: "backgrounds", label: "Antecedentes" },
    { key: "feats", label: "Talentos" },
    { key: "weapons", label: "Armas" },
    { key: "armor", label: "Armaduras" },
    { key: "gear", label: "Equipamento" },
    { key: "weaponProperties", label: "Propriedades de arma" },
    { key: "weaponMastery", label: "Weapon Mastery" },
    { key: "prostheses", label: "Próteses" },
    { key: "magicItems", label: "Itens mágicos" },
    { key: "spells", label: "Magias" }
  ];

  var state = { cat: "races", source: "all", text: "", selectedId: null };
  var el = null;

  function sourceBadge(s) {
    var info = DND.SOURCES[s] || { label: s, badge: "soft" };
    return '<span class="badge ' + info.badge + '">' + esc(info.label) + '</span>';
  }
  function pageTag(e) { return e.page ? '<span class="pdfnote"> · p. ' + e.page + '</span>' : ""; }

  /* -------- listagem -------- */
  function cardMeta(cat, e) {
    switch (cat) {
      case "races": return (e.asi || "").replace(/\.$/, "");
      case "classes": return (e.hitDie ? "Dado de vida " + e.hitDie + " · " : "") + (e.primaryAbility || "");
      case "subclasses": return e.forClass + " · nível " + e.unlockLevel;
      case "backgrounds": return "Perícias: " + (e.skills || "—");
      case "feats": return e.prereq && e.prereq !== "—" ? "Pré-req.: " + e.prereq : "Sem pré-requisito";
      case "weapons": return e.category + " · " + e.damage;
      case "armor": return e.category + " · CA " + e.ac;
      case "gear": return [e.cost, e.weight].filter(Boolean).join(" · ");
      case "weaponProperties": return "";
      case "weaponMastery": return e.kind === "arvore" ? "Árvore de técnicas" : (e.kind || "");
      case "prostheses": return e.kind === "item" ? "Prótese de aventura" : (e.kind === "propriedade" ? "Propriedade" : "Regras");
      case "magicItems": return e.type || "";
      case "spells": return (e.level === 0 ? "Truque" : e.level + "º nível") + (e.school && e.school !== "—" ? " · " + e.school : "");
      default: return "";
    }
  }
  function cardDesc(cat, e) {
    if (cat === "spells") return e.classes ? "Classes: " + e.classes : "";
    if (cat === "races") return e.flavor || "";
    if (cat === "classes" || cat === "subclasses" || cat === "backgrounds") return e.flavor || "";
    if (cat === "feats" || cat === "weaponProperties") return (e.text || "").split("\n")[0].slice(0, 140);
    if (cat === "weapons") return e.properties || "";
    return (e.text || "").split("\n")[0].slice(0, 140);
  }

  function renderList() {
    var list = DND.query(state.cat, { source: state.source, text: state.text });
    if (state.cat === "spells") list.sort(function (a, b) { return (a.level - b.level) || a.name.localeCompare(b.name, "pt"); });
    var wrap = el.querySelector("#cmpList");
    if (!list.length) { wrap.innerHTML = '<p class="pdfnote">Nada encontrado para este filtro.</p>'; return; }
    wrap.innerHTML = list.map(function (e) {
      return '<button class="cmp-card' + (e.id === state.selectedId ? " selected" : "") + '" data-id="' + e.id + '">' +
        '<span class="name">' + esc(e.name) + " " + sourceBadge(e.source) + '</span>' +
        '<span class="meta">' + esc(cardMeta(state.cat, e)) + pageTag(e) + '</span>' +
        '<span class="desc">' + esc(cardDesc(state.cat, e)) + '</span>' +
        '</button>';
    }).join("");
    wrap.querySelectorAll(".cmp-card").forEach(function (b) {
      b.addEventListener("click", function () { state.selectedId = b.dataset.id; render(); });
    });
  }

  /* -------- detalhe -------- */
  function traitBlock(t) {
    var body = t.text ? "<p>" + nl2br(t.text) + "</p>" : "";
    if (t.list) body += "<ul>" + t.list.map(function (li) { return "<li>" + nl2br(li) + "</li>"; }).join("") + "</ul>";
    return '<div class="trait"><h4>' + esc(t.name) + "</h4>" + body + "</div>";
  }
  function kv(pairs) {
    return '<dl class="kv">' + pairs.filter(function (p) { return p[1]; })
      .map(function (p) { return "<dt>" + esc(p[0]) + "</dt><dd>" + nl2br(p[1]) + "</dd>"; }).join("") + "</dl>";
  }
  function featuresList(feats) {
    return (feats || []).map(function (f) {
      return '<div class="trait"><h4>Nível ' + f.level + " — " + esc(f.name) + "</h4><p>" + nl2br(f.text) + "</p></div>";
    }).join("");
  }
  function simpleTable(headers, rows) {
    return '<div style="overflow-x:auto"><table class="feat-table"><thead><tr>' +
      headers.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + nl2br(c) + "</td>"; }).join("") + "</tr>"; }).join("") +
      "</tbody></table></div>";
  }

  function renderDetail(e) {
    var cat = state.cat;
    var head = "<button class=\"back-link\" id=\"cmpBack\">← voltar à lista</button>" +
      "<h3>" + esc(e.name) + " " + sourceBadge(e.source) + "</h3>" +
      '<p class="sub">' + esc(e.book || "") + (e.page ? ", p. " + e.page : "") + "</p>";
    var body = "";
    var actions = "";

    if (cat === "races") {
      if (e.flavor) body += '<p class="flavor">' + nl2br(e.flavor) + "</p>";
      body += kv([["Aumento de característica", e.asi], ["Idade", e.age], ["Tamanho", e.size], ["Deslocamento", e.speed], ["Tipo de criatura", e.creatureType]]);
      body += (e.traits || []).map(traitBlock).join("");
      if (e.subraces) e.subraces.forEach(function (sr) {
        body += "<h4 style=\"color:var(--wine-dark);margin-top:18px\">" + esc(sr.name) + "</h4>";
        if (sr.flavor) body += '<p class="flavor">' + nl2br(sr.flavor) + "</p>";
        body += (sr.traits || []).map(traitBlock).join("");
      });
      if (e.pdfNote) body += '<div class="callout">' + nl2br(e.pdfNote) + "</div>";
      actions = '<button class="btn" data-act="race">Usar como espécie na ficha</button>';
    }
    else if (cat === "classes") {
      if (e.flavor) body += '<p class="flavor">' + nl2br(e.flavor) + "</p>";
      body += kv([
        ["Dado de vida", e.hitDie], ["Habilidade principal", e.primaryAbility],
        ["Testes de resistência", (e.saves || []).join(", ")], ["Armaduras", e.armor],
        ["Armas", e.weapons], ["Ferramentas", e.tools],
        ["Perícias", e.skillChoices ? ("escolha " + e.skillChoices + " de: " + (e.skillList || []).join(", ")) : ""],
        ["Pontos de vida", e.hp], ["Equipamento inicial", e.startEquipment],
        ["Subclasse", e.subclassLabel ? (e.subclassLabel + " (nível " + e.subclassLevel + ")") : ""],
        ["Conjuração", e.spellcasting ? (e.spellcasting.type + " — " + e.spellcasting.ability + ". " + (e.spellcasting.note || "")) : "Não conjura"]
      ]);
      if (e.benderTable) body += "<h4>Tabela do Bender</h4>" + simpleTable(
        ["Nível", "Prof.", "Características", "Truques", "Espaços 1º/2º/3º/4º/5º"], e.benderTable);
      if (e.tamerTable) body += "<h4>Tabela do Tamer</h4>" + simpleTable(["Nível", "Prof.", "Características"], e.tamerTable);
      body += "<h4>Características por nível</h4>" + featuresList(e.features);
      if (e.companionTraining) body += "<h4>" + esc(e.companionTraining.title) + "</h4>" + simpleTable(["Melhoria", "Efeito"], e.companionTraining.rows);
      if (e.extraSections) e.extraSections.forEach(function (s) { body += "<h4>" + esc(s.title) + "</h4><p>" + nl2br(s.text) + "</p>"; });
      if (e.pdfNote) body += '<div class="callout">' + nl2br(e.pdfNote) + "</div>";
      actions = '<button class="btn" data-act="class">Usar como classe na ficha</button>';
    }
    else if (cat === "subclasses") {
      if (e.flavor) body += '<p class="flavor">' + nl2br(e.flavor) + "</p>";
      body += kv([["Classe", e.forClass], ["Tipo", e.subclassLabel], ["Nível de acesso", String(e.unlockLevel)]]);
      body += featuresList(e.features);
      actions = '<button class="btn" data-act="subclass">Registrar como característica na ficha</button>';
    }
    else if (cat === "backgrounds") {
      if (e.flavor) body += '<p class="flavor">' + nl2br(e.flavor) + "</p>";
      body += kv([
        ["Aumentos de característica (opcional)", e.abilityScores], ["Idioma (opcional)", e.language],
        ["Talento", e.feat], ["Proficiências em perícia", e.skills], ["Ferramentas", e.tools],
        ["Equipamento", e.equipment]
      ]);
      if (e.optionalFeature) body += traitBlock({ name: "Característica opcional: " + e.optionalFeature.name, text: e.optionalFeature.text });
      actions = '<button class="btn" data-act="background">Usar como antecedente na ficha</button>';
    }
    else if (cat === "feats" || cat === "weaponProperties" || cat === "prostheses" || cat === "weaponMastery" || cat === "magicItems") {
      if (e.prereq) body += kv([["Pré-requisito", e.prereq]]);
      if (e.type) body += kv([["Tipo", e.type], ["Componente de fabricação", e.component]]);
      if (e.forClass) body += kv([["Classes", e.forClass]]);
      body += "<p>" + nl2br(e.text) + "</p>";
      if (e.features) body += featuresList(e.features);
      if (cat === "feats") actions = '<button class="btn" data-act="feat">Registrar talento na ficha</button>';
      if (cat === "magicItems") actions = '<button class="btn" data-act="item">Adicionar ao inventário</button>';
    }
    else if (cat === "weapons") {
      body += kv([
        ["Categoria", e.category], ["Dano", e.damage], ["Propriedades", e.properties],
        ["Superior Strike (AWM)", e.superiorStrike], ["Custo", e.cost], ["Peso", e.weight]
      ]);
      if (e.desc) body += "<p>" + nl2br(e.desc) + "</p>";
      actions = '<button class="btn" data-act="weapon">Adicionar às armas da ficha</button>' +
        ' <button class="btn secondary" data-act="item">Adicionar ao inventário</button>';
    }
    else if (cat === "armor") {
      body += kv([["Categoria", e.category], ["CA", e.ac], ["Furtividade", e.stealth], ["Requisito de Força", e.strength], ["Custo", e.cost], ["Peso", e.weight]]);
      actions = '<button class="btn" data-act="item">Adicionar ao inventário</button>';
    }
    else if (cat === "gear") {
      body += kv([["Custo", e.cost], ["Peso", e.weight]]);
      body += "<p>" + nl2br(e.text) + "</p>";
      actions = '<button class="btn" data-act="item">Adicionar ao inventário</button>';
    }
    else if (cat === "spells") {
      body += kv([["Nível", e.level === 0 ? "Truque" : e.level + "º nível"], ["Escola", e.school], ["Ritual", e.ritual ? "Sim" : ""], ["Classes", e.classes], ["Página (livro)", e.page ? String(e.page) : ""]]);
      body += "<p>" + nl2br(e.text) + "</p>";
      actions = '<button class="btn" data-act="spell">Adicionar às magias da ficha</button>';
    }

    var wrap = el.querySelector("#cmpDetail");
    wrap.innerHTML = head + body + (actions ? '<div class="detail-actions">' + actions + "</div>" : "");
    wrap.querySelector("#cmpBack").addEventListener("click", function () { state.selectedId = null; render(); });
    wrap.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () { applyToSheet(b.dataset.act, e); });
    });
  }

  /* -------- integração com a ficha -------- */
  function toast(msg) {
    var s = el.querySelector("#cmpToast");
    s.textContent = msg; s.style.opacity = "1";
    setTimeout(function () { s.style.opacity = "0"; }, 2600);
  }
  function applyToSheet(act, e) {
    var S = root.DNDSheet; if (!S) return;
    S.data.build = S.data.build || {};
    var srcLabel = (DND.SOURCES[e.source] || {}).label || e.source;
    if (act === "race") { S.setField("raca", e.name); S.setBuild({ raceId: e.id, subraceIdx: null }); syncFields(); toast("Espécie definida: " + e.name); }
    else if (act === "class") {
      var lvl = (S.data.fields.classeNivel || "").match(/\d+/); lvl = lvl ? lvl[0] : "1";
      S.setField("classeNivel", e.name + " " + lvl); S.setBuild({ classId: e.id }); syncFields();
      if (e.spellcasting) { S.setField("classeConjuracao", e.name); S.setField("atributoConjuracao", e.spellcasting.ability); }
      toast("Classe definida: " + e.name);
    }
    else if (act === "background") { S.setField("antecedente", e.name); syncFields(); toast("Antecedente definido: " + e.name); }
    else if (act === "subclass") {
      S.setBuild({ subclassId: e.id });
      S.addFeature(e.name, e.forClass + " · " + srcLabel, (e.features || []).map(function (f) { return "Nv " + f.level + " — " + f.name + ": " + f.text; }).join("\n\n"));
      toast("Registrada como característica: " + e.name);
    }
    else if (act === "feat") { S.addFeature(e.name, "Talento · " + srcLabel, e.text); toast("Talento registrado: " + e.name); }
    else if (act === "weapon") {
      S.addAttackRow({ nome: e.name, bonus: "", dano: e.damage, notas: e.properties || "" }); toast("Arma adicionada: " + e.name);
    }
    else if (act === "item") {
      S.addItemRow({ nome: e.name, qtd: "1", peso: e.weight || "", notas: (e.type || e.category || "") + (e.cost ? " · " + e.cost : "") }); toast("Adicionado ao inventário: " + e.name);
    }
    else if (act === "spell") {
      S.addSpellRow({ nivel: String(e.level), nome: e.name, escola: e.school === "—" ? "" : (e.school || ""), prep: "", notas: "p. " + (e.page || "") + " · " + srcLabel }); toast("Magia adicionada: " + e.name);
    }
  }
  function syncFields() {
    /* reflete alterações feitas via setField nos inputs visíveis */
    document.querySelectorAll("#page-principal [data-field]").forEach(function (inp) {
      var k = inp.dataset.field;
      if (root.DNDSheet.data.fields[k] != null && inp.type !== "checkbox") inp.value = root.DNDSheet.data.fields[k];
    });
  }

  /* -------- shell -------- */
  function render() {
    if (!el) return;
    el.querySelectorAll("#cmpCats button").forEach(function (b) { b.classList.toggle("active", b.dataset.cat === state.cat); });
    el.querySelectorAll("#cmpSource button").forEach(function (b) { b.classList.toggle("active", b.dataset.source === state.source); });
    var entry = state.selectedId ? DND.byId(state.cat, state.selectedId) : null;
    el.querySelector("#cmpList").parentElement.style.display = "block";
    if (entry) {
      el.querySelector("#cmpDetail").style.display = "block";
      renderDetail(entry);
      renderList();
    } else {
      el.querySelector("#cmpDetail").style.display = "none";
      renderList();
    }
  }

  function boot() {
    el = document.getElementById("page-compendio");
    if (!el) return;
    el.innerHTML =
      '<div class="cmp-toolbar">' +
        '<div id="cmpSource" class="source-switch">' +
          '<button data-source="all">Todos</button>' +
          '<button data-source="srd">D&amp;D básico</button>' +
          '<button data-source="homebrew">Reinos Yokai</button>' +
        '</div>' +
        '<input class="search" id="cmpSearch" type="search" placeholder="Buscar por nome, efeito, palavra-chave...">' +
        '<span id="cmpToast" class="creator-status" style="opacity:0;transition:opacity .3s"></span>' +
      '</div>' +
      '<div id="cmpCats" class="tabs" style="border-bottom:1px solid var(--border);margin-bottom:14px">' +
        CATS.map(function (c) { return '<button class="tab" data-cat="' + c.key + '">' + c.label + '</button>'; }).join("") +
      '</div>' +
      '<div class="cmp-columns">' +
        '<div><div id="cmpList" class="cmp-list cmp-scroll"></div></div>' +
        '<div id="cmpDetail" class="cmp-detail" style="display:none"></div>' +
      '</div>';

    el.querySelectorAll("#cmpCats button").forEach(function (b) {
      b.addEventListener("click", function () { state.cat = b.dataset.cat; state.selectedId = null; render(); });
    });
    el.querySelectorAll("#cmpSource button").forEach(function (b) {
      b.addEventListener("click", function () { state.source = b.dataset.source; state.selectedId = null; render(); });
    });
    el.querySelector("#cmpSearch").addEventListener("input", function (ev) {
      state.text = ev.target.value.trim(); state.selectedId = null; render();
    });
    render();
  }

  root.DNDCompendium = { boot: boot, open: function (cat) { if (el) { state.cat = cat || state.cat; state.selectedId = null; render(); } } };
})(window);
