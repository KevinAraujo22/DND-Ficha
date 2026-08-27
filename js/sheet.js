/* ============================================================
   FICHA DE PERSONAGEM — lógica (portada do index.html legado).
   Expõe window.DNDSheet: { data, save, renderAll, addFeature,
   addSpellRow, addItemRow, addAttackRow, setField }
   ============================================================ */
(function (root) {
  "use strict";
  var DND = root.DND || (root.DND = {});
  var STORAGE_KEY = "dnd_ficha_personagem_v1";
  var ABILITIES = DND.ABILITIES;
  var SKILLS = DND.SKILLS;
  var ABBR = DND.ABBR;

  function blankData() {
    return { abilities: {}, skills: {}, fields: {}, ataques: [], magias: [], itens: [], caracteristicas: [], spellSlots: {}, build: {} };
  }
  var data = blankData();

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) data = Object.assign(data, JSON.parse(raw));
    } catch (e) { console.warn("Falha ao carregar ficha", e); }
    if (!Array.isArray(data.caracteristicas)) data.caracteristicas = [];
    if (!Array.isArray(data.ataques)) data.ataques = [];
    if (!Array.isArray(data.magias)) data.magias = [];
    if (!Array.isArray(data.itens)) data.itens = [];
    if (!data.spellSlots) data.spellSlots = {};
    if (!data.build || typeof data.build !== "object") data.build = {};
  }
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

  function mod(score) { var n = parseInt(score, 10); return isNaN(n) ? 0 : Math.floor((n - 10) / 2); }
  function fmt(n) { return (n >= 0 ? "+" : "") + n; }
  function profBonusValue() {
    var n = parseInt((data.fields.profBonus || "").toString().replace("+", ""), 10);
    return isNaN(n) ? 2 : n;
  }
  function num(v) {
    var n = parseFloat((v == null ? "" : v).toString().replace(",", ".").replace(/\+/g, ""));
    return isNaN(n) ? 0 : n;
  }
  function skillBonus(key) {
    var s = SKILLS.filter(function (x) { return x.key === key; })[0];
    if (!s) return 0;
    var st = data.skills[key] || {};
    var abScore = (data.abilities[s.ab] || { score: 10 }).score;
    var pb = profBonusValue();
    return mod(abScore) + (st.exp ? pb * 2 : (st.prof ? pb : 0));
  }

  /* ---------- Render: Iniciativa / CA / Percepção Passiva (calculadas) ---------- */
  function renderCombatStats() {
    var f = data.fields;
    var dexMod = mod((data.abilities.des || { score: 10 }).score);

    var iniEl = document.getElementById("statIniciativa");
    if (iniEl) iniEl.textContent = fmt(dexMod + num(f.iniciativaExtra));

    var caArm = (f.caArmadura || "").toString().trim();
    var base = caArm === "" ? 10 : num(caArm);
    var limStr = (f.caLimiteDes || "").toString().trim();
    var dexPart;
    if (limStr === "") dexPart = dexMod;
    else if (num(limStr) === 0) dexPart = 0;
    else dexPart = Math.min(dexMod, num(limStr));
    var caEl = document.getElementById("statCA");
    if (caEl) caEl.textContent = String(base + dexPart + num(f.caEscudo) + num(f.caOutros));

    var ppEl = document.getElementById("statPercepcao");
    if (ppEl) ppEl.textContent = String(10 + skillBonus("percepcao") + num(f.percepcaoExtra));
  }

  function renderAbilities() {
    var c = document.getElementById("abilitiesContainer"); if (!c) return;
    c.innerHTML = "";
    ABILITIES.forEach(function (a) {
      if (!data.abilities[a.key]) data.abilities[a.key] = { score: 10, saveProf: false };
      var st = data.abilities[a.key];
      var card = document.createElement("div");
      card.className = "ability-card";
      card.innerHTML = '<div class="ab-name">' + a.name + '</div>' +
        '<input type="text" class="ab-score" data-ability="' + a.key + '" value="' + (st.score == null ? "" : st.score) + '">' +
        '<div class="ab-mod" id="abmod-' + a.key + '">' + fmt(mod(st.score)) + '</div>';
      c.appendChild(card);
    });
    c.querySelectorAll("input[data-ability]").forEach(function (inp) {
      inp.addEventListener("input", function () {
        data.abilities[inp.dataset.ability].score = inp.value;
        document.getElementById("abmod-" + inp.dataset.ability).textContent = fmt(mod(inp.value));
        renderSaves(); renderSkills(); renderCombatStats(); save();
      });
    });
  }
  function renderSaves() {
    var c = document.getElementById("savesContainer"); if (!c) return;
    c.innerHTML = "";
    ABILITIES.forEach(function (a) {
      var st = data.abilities[a.key] || { score: 10, saveProf: false };
      var total = mod(st.score) + (st.saveProf ? profBonusValue() : 0);
      var row = document.createElement("div");
      row.className = "check-row";
      row.innerHTML = '<input type="checkbox" data-save="' + a.key + '" ' + (st.saveProf ? "checked" : "") + '>' +
        '<span class="row-abbr">' + ABBR[a.key] + '</span><span>' + a.name + '</span>' +
        '<span class="row-mod">' + fmt(total) + '</span>';
      c.appendChild(row);
    });
    c.querySelectorAll("input[data-save]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        data.abilities[cb.dataset.save].saveProf = cb.checked; renderSaves(); save();
      });
    });
  }
  function renderSkills() {
    var c = document.getElementById("skillsContainer"); if (!c) return;
    c.innerHTML = "";
    SKILLS.forEach(function (s) {
      if (!data.skills[s.key]) data.skills[s.key] = { prof: false, exp: false };
      var st = data.skills[s.key];
      var abScore = (data.abilities[s.ab] || { score: 10 }).score;
      var pb = profBonusValue();
      var bonus = mod(abScore) + (st.exp ? pb * 2 : (st.prof ? pb : 0));
      var row = document.createElement("div");
      row.className = "check-row" + (st.exp ? " expertise" : "");
      row.innerHTML = '<input type="checkbox" data-skill-prof="' + s.key + '" ' + (st.prof ? "checked" : "") + '>' +
        '<span class="row-abbr">' + ABBR[s.ab] + '</span><span>' + s.name + (st.exp ? " ★" : "") + '</span>' +
        '<span class="row-mod">' + fmt(bonus) + '</span>';
      row.addEventListener("dblclick", function () {
        st.exp = !st.exp; if (st.exp) st.prof = true; renderSkills(); renderCombatStats(); save();
      });
      c.appendChild(row);
    });
    c.querySelectorAll("input[data-skill-prof]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        var k = cb.dataset.skillProf;
        data.skills[k].prof = cb.checked; if (!cb.checked) data.skills[k].exp = false;
        renderSkills(); renderCombatStats(); save();
      });
    });
  }
  var CA_KEYS = { caArmadura: 1, caLimiteDes: 1, caEscudo: 1, caOutros: 1, iniciativaExtra: 1, percepcaoExtra: 1 };
  function bindSimpleFields() {
    document.querySelectorAll("[data-field]").forEach(function (el) {
      var k = el.dataset.field;
      if (el.type === "checkbox") {
        el.checked = !!data.fields[k];
        el.addEventListener("change", function () { data.fields[k] = el.checked; save(); });
      } else {
        el.value = data.fields[k] || "";
        el.addEventListener("input", function () {
          data.fields[k] = el.value; save();
          if (k === "profBonus") { renderSaves(); renderSkills(); renderCombatStats(); }
          else if (CA_KEYS[k]) renderCombatStats();
        });
      }
    });
  }
  function renderTable(sel, list, columns) {
    var tbody = document.querySelector(sel + " tbody"); if (!tbody) return;
    tbody.innerHTML = "";
    list.forEach(function (row, idx) {
      var tr = document.createElement("tr");
      columns.forEach(function (col) {
        var td = document.createElement("td");
        var inp = document.createElement(col.type === "select" ? "select" : "input");
        if (col.type === "select") {
          col.options.forEach(function (opt) {
            var o = document.createElement("option"); o.value = opt; o.textContent = opt || "—";
            if (row[col.key] === opt) o.selected = true; inp.appendChild(o);
          });
          inp.addEventListener("change", function () { row[col.key] = inp.value; save(); });
        } else {
          inp.type = "text"; inp.value = row[col.key] || ""; inp.placeholder = col.placeholder || "";
          inp.addEventListener("input", function () { row[col.key] = inp.value; save(); });
        }
        td.appendChild(inp); tr.appendChild(td);
      });
      var tdDel = document.createElement("td");
      var btn = document.createElement("button");
      btn.className = "icon-btn"; btn.textContent = "✕"; btn.title = "Remover linha";
      btn.addEventListener("click", function () { list.splice(idx, 1); renderTable(sel, list, columns); save(); });
      tdDel.appendChild(btn); tr.appendChild(tdDel); tbody.appendChild(tr);
    });
  }
  var ATAQUE_COLS = [{ key: "nome" }, { key: "bonus", placeholder: "+5" }, { key: "dano", placeholder: "1d8+3 cortante" }, { key: "notas", placeholder: "alcance, propriedades..." }];
  var MAGIA_COLS = [{ key: "nivel", placeholder: "0-9" }, { key: "nome" }, { key: "escola", placeholder: "Ex.: Evocação" }, { key: "prep", type: "select", options: ["", "Sim", "Não"] }, { key: "notas", placeholder: "efeito, CD, dano..." }];
  var ITEM_COLS = [{ key: "nome" }, { key: "qtd", placeholder: "1" }, { key: "peso", placeholder: "0,5 kg" }, { key: "notas" }];

  function renderAtaques() { renderTable("#tblAtaques", data.ataques, ATAQUE_COLS); }
  function renderMagias() { renderTable("#tblMagias", data.magias, MAGIA_COLS); }
  function renderItens() { renderTable("#tblItens", data.itens, ITEM_COLS); }

  function renderCaracteristicas() {
    var c = document.getElementById("featuresContainer"); if (!c) return;
    c.innerHTML = "";
    data.caracteristicas.forEach(function (item, idx) {
      var card = document.createElement("div");
      card.className = "feature-card" + (item.open ? " open" : "");
      var head = document.createElement("div");
      head.className = "feature-head";
      head.innerHTML = '<span class="toggle-arrow">▶</span>' +
        '<input type="text" class="feature-name" placeholder="Nome" value="' + (item.nome || "").replace(/"/g, "&quot;") + '">' +
        '<input type="text" class="feature-source" placeholder="origem" value="' + (item.origem || "").replace(/"/g, "&quot;") + '">' +
        '<button class="icon-btn" title="Remover">✕</button>';
      var body = document.createElement("div");
      body.className = "feature-body";
      var ta = document.createElement("textarea");
      ta.placeholder = "Descreva o que essa característica faz...";
      ta.value = item.descricao || "";
      body.appendChild(ta);
      head.addEventListener("click", function (e) {
        if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") return;
        item.open = !item.open; card.classList.toggle("open", item.open); save();
      });
      var nameI = head.querySelector(".feature-name");
      nameI.addEventListener("click", function (e) { e.stopPropagation(); });
      nameI.addEventListener("input", function () { item.nome = nameI.value; save(); });
      var srcI = head.querySelector(".feature-source");
      srcI.addEventListener("click", function (e) { e.stopPropagation(); });
      srcI.addEventListener("input", function () { item.origem = srcI.value; save(); });
      ta.addEventListener("input", function () { item.descricao = ta.value; save(); });
      head.querySelector("button.icon-btn").addEventListener("click", function (e) {
        e.stopPropagation(); data.caracteristicas.splice(idx, 1); renderCaracteristicas(); save();
      });
      card.appendChild(head); card.appendChild(body); c.appendChild(card);
    });
  }

  function renderSpellSlots() {
    var c = document.getElementById("spellSlotsContainer"); if (!c) return;
    c.innerHTML = "";
    for (var lvl = 1; lvl <= 9; lvl++) {
      if (!data.spellSlots[lvl]) data.spellSlots[lvl] = { total: "", usados: "" };
      var st = data.spellSlots[lvl];
      var div = document.createElement("div");
      div.className = "spell-level";
      div.innerHTML = '<label>Nível ' + lvl + '</label><div class="slot-inputs">' +
        '<input type="text" data-slot="total-' + lvl + '" placeholder="Tot." value="' + (st.total || "") + '">' +
        '<input type="text" data-slot="usados-' + lvl + '" placeholder="Us." value="' + (st.usados || "") + '"></div>';
      c.appendChild(div);
    }
    c.querySelectorAll("input[data-slot]").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var p = inp.dataset.slot.split("-"); data.spellSlots[p[1]][p[0]] = inp.value; save();
      });
    });
  }

  function renderAll() {
    renderAbilities(); renderSaves(); renderSkills(); bindSimpleFields(); renderCombatStats();
    renderAtaques(); renderMagias(); renderItens(); renderCaracteristicas(); renderSpellSlots();
  }

  function wireButtons() {
    document.querySelectorAll("[data-add]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var w = btn.dataset.add;
        if (w === "ataques") { data.ataques.push({}); renderAtaques(); }
        if (w === "magias") { data.magias.push({}); renderMagias(); }
        if (w === "itens") { data.itens.push({}); renderItens(); }
        if (w === "caracteristicas") { data.caracteristicas.push({ open: true }); renderCaracteristicas(); }
        save();
      });
    });
    var be = document.getElementById("btnExportar");
    if (be) be.addEventListener("click", function () {
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      var nome = (data.fields.nome || "ficha").toString().trim().replace(/\s+/g, "_") || "ficha";
      a.href = url; a.download = nome + "_dnd.json";
      document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    });
    var bi = document.getElementById("btnImportar");
    if (bi) bi.addEventListener("click", function () { document.getElementById("fileImport").click(); });
    var fi = document.getElementById("fileImport");
    if (fi) fi.addEventListener("change", function (e) {
      var file = e.target.files[0]; if (!file) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var parsed = JSON.parse(r.result);
          data = Object.assign(blankData(), parsed);
          if (!Array.isArray(data.caracteristicas)) data.caracteristicas = [];
          if (!data.build || typeof data.build !== "object") data.build = {};
          save(); renderAll();
        } catch (err) { alert("Arquivo inválido. Selecione um JSON exportado por esta ficha."); }
      };
      r.readAsText(file); e.target.value = "";
    });
    var bn = document.getElementById("btnNovaFicha");
    if (bn) bn.addEventListener("click", function () {
      if (confirm("Isso vai apagar a ficha atual (não salva em arquivo) e abrir o criador de personagem. Continuar?")) {
        data = blankData();
        save(); renderAll();
        if (root.DNDApp) root.DNDApp.showTab("criar");
      }
    });
  }

  root.DNDSheet = {
    get data() { return data; },
    save: save,
    renderAll: renderAll,
    setField: function (k, v) { data.fields[k] = v; save(); },
    setBuild: function (patch) { data.build = Object.assign(data.build || {}, patch || {}); save(); },
    hasFeature: function (nome, origem) {
      return data.caracteristicas.some(function (c) {
        return c.nome === nome && (origem == null || c.origem === origem);
      });
    },
    addFeature: function (nome, origem, descricao) {
      data.caracteristicas.unshift({ nome: nome, origem: origem || "", descricao: descricao || "", open: false });
      save(); renderCaracteristicas();
    },
    addAttackRow: function (row) { data.ataques.push(row || {}); save(); renderAtaques(); },
    addSpellRow: function (row) { data.magias.push(row || {}); save(); renderMagias(); },
    addItemRow: function (row) { data.itens.push(row || {}); save(); renderItens(); },
    boot: function () { load(); renderAll(); wireButtons(); }
  };
})(window);
