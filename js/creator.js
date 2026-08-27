/* ============================================================
   CRIADOR DE PERSONAGEM — assistente de 7 etapas.
   Lê do compêndio (DND.compendium) com filtro de fonte.
   Aplica o resultado em window.DNDSheet.
   ============================================================ */
(function (root) {
  "use strict";
  var DND = root.DND;
  var esc = function (s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); };
  var STEPS = ["Classe", "Espécie", "Antecedente", "Atributos", "Equipamento", "Magias", "Detalhes"];
  var st = {
    step: 1, source: "all",
    classId: null, raceId: null, subraceIdx: null, bgId: null,
    abilities: { for: 10, des: 10, con: 10, int: 10, sab: 10, car: 10 },
    weapons: [], level: 1, name: "", concept: "", spells: "", spellPicks: []
  };

  function abilMod(score) { var n = +score; return isNaN(n) ? 0 : Math.floor((n - 10) / 2); }

  /* quantos truques / magias de 1º nível a classe pode escolher no nível 1 */
  function spellLimits(c) {
    if (!c || !c.spellcasting) return { cantrips: 0, spells: 0 };
    if ((c.spellcasting.type || "").toLowerCase().indexOf("meio-conjurador") >= 0) return { cantrips: 0, spells: 0 };
    var name = c.name;
    var CANTRIPS = { "Bardo": 2, "Clérigo": 3, "Druida": 2, "Feiticeiro (Sorcerer)": 4, "Bruxo (Warlock)": 2, "Mago (Wizard)": 3 };
    var KNOWN = { "Bardo": 4, "Feiticeiro (Sorcerer)": 2, "Bruxo (Warlock)": 2 };
    var cantrips = c.id === "yr-bender" ? 2 : (CANTRIPS[name] != null ? CANTRIPS[name] : 2);
    var spells;
    if (KNOWN[name] != null) spells = KNOWN[name];
    else if (name === "Mago (Wizard)") spells = 6;
    else if (name === "Clérigo" || name === "Druida") spells = Math.max(1, abilMod(st.abilities.sab) + 1);
    else if (c.id === "yr-bender") spells = Math.max(1, Math.max(abilMod(st.abilities.int), abilMod(st.abilities.sab), abilMod(st.abilities.car)));
    else spells = 2;
    return { cantrips: cantrips, spells: spells };
  }

  function pickCount(kind) {
    return st.spellPicks.filter(function (id) {
      var sp = DND.byId("spells", id);
      return sp && (kind === "cantrip" ? sp.level === 0 : sp.level === 1);
    }).length;
  }
  function updateSpellCounts() {
    ["cantrip", "spell"].forEach(function (kind) {
      var grp = el.querySelector('[data-spgroup="' + kind + '"]');
      if (!grp) return;
      var max = +grp.dataset.max, count = pickCount(kind);
      var badge = el.querySelector("#crCount-" + kind);
      if (badge) badge.textContent = count + " / " + max;
      grp.querySelectorAll("input[data-sp]").forEach(function (inp) {
        var full = !inp.checked && count >= max;
        inp.disabled = full;
        inp.parentElement.style.opacity = full ? ".45" : "1";
      });
    });
  }

  /* magias que a classe pode escolher no 1º nível (truques + 1º nível) */
  function level1Spells(c) {
    if (!c || !c.spellcasting) return null;
    if ((c.spellcasting.type || "").toLowerCase().indexOf("meio-conjurador") >= 0) return null; /* Paladino/Patrulheiro/Tamer: só a partir do 2º nível */
    var bender = c.id === "yr-bender";
    var key = c.name.split(" (")[0].toLowerCase();
    var full = c.name.toLowerCase();
    return DND.query("spells", {}).filter(function (s) {
      if (s.level > 1) return false;
      if (bender) return true;
      var cl = (s.classes || "").toLowerCase();
      return cl.indexOf(key) >= 0 || cl.indexOf(full) >= 0;
    }).sort(function (a, b) { return (a.level - b.level) || a.name.localeCompare(b.name, "pt"); });
  }
  var el = null;

  function cls() { return st.classId ? DND.byId("classes", st.classId) : null; }
  function race() { return st.raceId ? DND.byId("races", st.raceId) : null; }
  function bg() { return st.bgId ? DND.byId("backgrounds", st.bgId) : null; }

  function choiceGrid(cat, selKey, meta) {
    var list = DND.query(cat, { source: st.source });
    return '<div class="cmp-list">' + list.map(function (e) {
      var sel = st[selKey] === e.id;
      return '<button class="cmp-card' + (sel ? " selected" : "") + '" data-pick="' + e.id + '">' +
        '<span class="name">' + esc(e.name) + ' <span class="badge ' + (DND.SOURCES[e.source] || {}).badge + '">' + esc((DND.SOURCES[e.source] || {}).label) + '</span></span>' +
        '<span class="meta">' + esc(meta(e)) + '</span>' +
        '<span class="desc">' + esc((e.flavor || "").slice(0, 130)) + '</span></button>';
    }).join("") + "</div>";
  }

  function stepHTML() {
    var c = cls(), r = race();
    if (st.step === 1) return "<h3>1. Escolha sua classe</h3>" + sourceSwitch() +
      choiceGrid("classes", "classId", function (e) { return e.hitDie + " · " + e.primaryAbility; }) +
      (c ? '<div class="callout"><b>' + esc(c.name) + "</b> — TR: " + (c.saves || []).join(", ") + ". Perícias: escolha " + c.skillChoices + ". " + (c.spellcasting ? "Conjura (" + c.spellcasting.ability + ")." : "Não conjura.") + "</div>" : "");
    if (st.step === 2) {
      var sub = "";
      if (r && r.subraces) sub = '<div class="callout">Subraça: ' + r.subraces.map(function (sr, i) {
        return '<label style="margin-right:12px"><input type="radio" name="subr" value="' + i + '" ' + (st.subraceIdx === i ? "checked" : "") + '> ' + esc(sr.name) + "</label>";
      }).join("") + "</div>";
      return "<h3>2. Escolha sua espécie</h3>" + sourceSwitch() +
        choiceGrid("races", "raceId", function (e) { return (e.asi || "").replace(/\.$/, ""); }) + sub;
    }
    if (st.step === 3) return "<h3>3. Escolha seu antecedente</h3>" + sourceSwitch() +
      choiceGrid("backgrounds", "bgId", function (e) { return "Perícias: " + (e.skills || "—"); });
    if (st.step === 4) {
      var hint = "";
      if (r) hint += "Espécie: " + (r.asi || "") + " ";
      if (c) hint += " | Classe " + c.name + ": TR de " + (c.saves || []).join(" e ");
      return "<h3>4. Defina seus atributos</h3><p class=\"pdfnote\">" + esc(hint) + "</p>" +
        '<div class="ability-builder">' + DND.ABILITIES.map(function (a) {
          return "<label>" + a.name + '<input type="number" min="1" max="30" data-ab="' + a.key + '" value="' + st.abilities[a.key] + '"></label>';
        }).join("") + "</div>";
    }
    if (st.step === 5) {
      var weaps = DND.query("weapons", { source: st.source });
      return "<h3>5. Escolha seu equipamento</h3>" +
        (c ? '<div class="callout"><b>Equipamento inicial de ' + esc(c.name) + ':</b> ' + esc(c.startEquipment || "—") + "</div>" : "") +
        sourceSwitch() +
        '<p class="pdfnote">Marque as armas que quiser levar para a ficha:</p>' +
        '<div class="cmp-list cmp-scroll" style="max-height:40vh">' + weaps.map(function (w) {
          return '<label class="cmp-card"><input type="checkbox" data-weap="' + w.id + '" ' + (st.weapons.indexOf(w.id) >= 0 ? "checked" : "") + '> <b>' + esc(w.name) + "</b><br><span class=\"meta\">" + esc(w.category + " · " + w.damage) + "</span></label>";
        }).join("") + "</div>";
    }
    if (st.step === 6) {
      var caster = c && c.spellcasting;
      var l1 = level1Spells(c);
      var head = "<h3>6. Prepare suas magias</h3>";
      if (caster) {
        head += '<div class="callout"><b>' + esc(c.name) + " — " + esc(c.spellcasting.type) + "</b> (" + esc(c.spellcasting.ability) + "). " + esc(c.spellcasting.note || "") + "</div>";
      } else {
        head += '<div class="callout">' + esc(c ? c.name + " não é uma classe conjuradora." : "Escolha uma classe primeiro.") + "</div>";
      }
      var lim = spellLimits(c);
      var picker = "";
      if (l1 && l1.length && (lim.cantrips + lim.spells) > 0) {
        var mkGroup = function (title, arr, kind, max) {
          var chosen = pickCount(kind);
          if (max <= 0) return "";
          return '<div class="lu-sec" style="margin-top:14px">' + title +
            ' <span id="crCount-' + kind + '" class="pdfnote" style="text-transform:none;letter-spacing:0">' + chosen + " / " + max + "</span></div>" +
            '<div class="cmp-list cmp-scroll" data-spgroup="' + kind + '" data-max="' + max + '" style="max-height:26vh">' +
            arr.map(function (s) {
              return '<label class="cmp-card cr-sp-row"><input type="checkbox" data-sp="' + s.id + '" data-splvl="' + s.level + '" ' +
                (st.spellPicks.indexOf(s.id) >= 0 ? "checked" : "") + '> <b>' + esc(s.name) + '</b>' +
                (s.school && s.school !== "—" ? ' <span class="meta">' + esc(s.school) + "</span>" : "") + "</label>";
            }).join("") + "</div>";
        };
        picker =
          '<p class="pdfnote">Escolha os truques e as magias de 1º nível conforme o limite da classe (o restante você aprende ao subir de nível):</p>' +
          '<input type="search" id="crSpellSearch" placeholder="Filtrar magias..." style="margin:6px 0">' +
          mkGroup("Truques", l1.filter(function (s) { return s.level === 0; }), "cantrip", lim.cantrips) +
          mkGroup("Magias de 1º nível", l1.filter(function (s) { return s.level === 1; }), "spell", lim.spells);
      } else if (caster) {
        picker = '<p class="pdfnote">Esta classe só começa a conjurar a partir do 2º nível — suba de nível na tela principal para escolher magias.</p>';
      }
      return head + picker +
        '<div class="field" style="margin-top:10px"><label>Outras magias / anotações (ex.: magias raciais, magias fora da lista)</label><textarea id="crSpells" placeholder="Opcional...">' + esc(st.spells) + "</textarea></div>";
    }
    if (st.step === 7) return "<h3>7. Finalize os detalhes</h3>" +
      '<p class="pdfnote">O personagem começa no nível 1. Use o botão <b>Subir de nível</b> na tela principal para ganhar as características de classe e raça a cada nível.</p>' +
      '<div class="grid cols-2">' +
      '<div class="field" style="grid-column:span 2"><label>Nome do personagem</label><input id="crName" type="text" value="' + esc(st.name) + '"></div>' +
      '<div class="field" style="grid-column:span 2"><label>Conceito e história breve</label><textarea id="crConcept">' + esc(st.concept) + "</textarea></div></div>" +
      summary();
    return "";
  }

  function summary() {
    var c = cls(), r = race(), b = bg();
    return '<div class="callout"><b>Resumo:</b> ' +
      (c ? c.name : "—") + " (nível 1) · " +
      (r ? r.name : "—") + (r && r.subraces && st.subraceIdx != null ? " (" + r.subraces[st.subraceIdx].name + ")" : "") + " · " +
      (b ? b.name : "—") + "<br>Atributos: " +
      DND.ABILITIES.map(function (a) { return DND.ABBR[a.key] + " " + st.abilities[a.key]; }).join(" / ") + "</div>";
  }

  function sourceSwitch() {
    return '<div id="crSource" class="source-switch" style="margin-bottom:12px">' +
      ['all:Todos', 'srd:D&amp;D básico', 'homebrew:Reinos Yokai'].map(function (o) {
        var p = o.split(":");
        return '<button data-src="' + p[0] + '" class="' + (st.source === p[0] ? "active" : "") + '">' + p[1] + "</button>";
      }).join("") + "</div>";
  }

  function render() {
    if (!el) return;
    el.querySelector("#crStepper").innerHTML = STEPS.map(function (label, i) {
      return '<button class="step-button ' + (i + 1 === st.step ? "active" : "") + '" data-nav="' + (i + 1) + '"><strong>' + (i + 1) + "</strong><span>" + label + "</span></button>";
    }).join("");
    el.querySelector("#crBody").innerHTML = stepHTML();
    el.querySelector("#crCount").textContent = st.step + " de 7";
    el.querySelector("#crBack").disabled = st.step === 1;
    el.querySelector("#crNext").style.display = st.step === 7 ? "none" : "inline-block";
    el.querySelector("#crFinish").style.display = st.step === 7 ? "inline-block" : "none";
    wireStep();
  }

  function wireStep() {
    el.querySelectorAll("#crStepper [data-nav]").forEach(function (b) {
      b.addEventListener("click", function () { st.step = +b.dataset.nav; render(); });
    });
    el.querySelectorAll("#crSource button").forEach(function (b) {
      b.addEventListener("click", function () { st.source = b.dataset.src; render(); });
    });
    el.querySelectorAll("[data-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.dataset.pick;
        if (st.step === 1) { if (st.classId !== id) st.spellPicks = []; st.classId = id; }
        if (st.step === 2) { st.raceId = id; st.subraceIdx = null; }
        if (st.step === 3) st.bgId = id;
        render();
      });
    });
    el.querySelectorAll("input[name=subr]").forEach(function (r) {
      r.addEventListener("change", function () { st.subraceIdx = +r.value; });
    });
    el.querySelectorAll("input[data-ab]").forEach(function (i) {
      i.addEventListener("input", function () { st.abilities[i.dataset.ab] = +i.value || 10; });
    });
    el.querySelectorAll("input[data-weap]").forEach(function (i) {
      i.addEventListener("change", function () {
        var id = i.dataset.weap, k = st.weapons.indexOf(id);
        if (i.checked && k < 0) st.weapons.push(id);
        if (!i.checked && k >= 0) st.weapons.splice(k, 1);
      });
    });
    el.querySelectorAll("input[data-sp]").forEach(function (i) {
      i.addEventListener("change", function () {
        var id = i.dataset.sp, k = st.spellPicks.indexOf(id);
        if (i.checked) {
          var grp = i.closest("[data-spgroup]");
          var kind = grp ? grp.dataset.spgroup : (+i.dataset.splvl === 0 ? "cantrip" : "spell");
          var max = grp ? +grp.dataset.max : 99;
          if (pickCount(kind) >= max) { i.checked = false; return; }
          if (k < 0) st.spellPicks.push(id);
        } else if (k >= 0) {
          st.spellPicks.splice(k, 1);
        }
        updateSpellCounts();
      });
    });
    updateSpellCounts();
    var ss = el.querySelector("#crSpellSearch");
    if (ss) ss.addEventListener("input", function () {
      var q = ss.value.toLowerCase();
      el.querySelectorAll("#crBody .cr-sp-row").forEach(function (row) {
        row.style.display = row.textContent.toLowerCase().indexOf(q) >= 0 ? "" : "none";
      });
    });
    var sp = el.querySelector("#crSpells"); if (sp) sp.addEventListener("input", function () { st.spells = sp.value; });
    var nm = el.querySelector("#crName"); if (nm) nm.addEventListener("input", function () { st.name = nm.value; });
    var cc = el.querySelector("#crConcept"); if (cc) cc.addEventListener("input", function () { st.concept = cc.value; });
  }

  function finish() {
    var S = root.DNDSheet, c = cls(), r = race(), b = bg();
    if (!c || !r) { el.querySelector("#crStatus").textContent = "Escolha ao menos classe e espécie."; return; }
    S.setField("nome", st.name || "");
    S.setField("classeNivel", c.name + " " + st.level);
    S.setField("raca", r.name + (r.subraces && st.subraceIdx != null ? " (" + r.subraces[st.subraceIdx].name + ")" : ""));
    if (b) S.setField("antecedente", b.name);
    DND.ABILITIES.forEach(function (a) {
      if (!S.data.abilities[a.key]) S.data.abilities[a.key] = {};
      S.data.abilities[a.key].score = st.abilities[a.key];
    });
    if (c.spellcasting) { S.setField("classeConjuracao", c.name); S.setField("atributoConjuracao", c.spellcasting.ability); }
    if (st.concept) S.setField("historia", st.concept);

    /* características automáticas */
    var raceTraits = (r.traits || []).map(function (t) { return t.name + ": " + (t.text || "") + (t.list ? "\n- " + t.list.join("\n- ") : ""); }).join("\n\n");
    if (r.subraces && st.subraceIdx != null) {
      raceTraits += "\n\n[" + r.subraces[st.subraceIdx].name + "]\n" +
        r.subraces[st.subraceIdx].traits.map(function (t) { return t.name + ": " + (t.text || ""); }).join("\n\n");
    }
    S.addFeature("Traços de " + r.name, (DND.SOURCES[r.source] || {}).label + " · espécie", raceTraits);
    var lvl1 = (c.features || []).filter(function (f) { return f.level <= 1; })
      .map(function (f) { return f.name + ": " + f.text; }).join("\n\n");
    if (lvl1) S.addFeature(c.name + " — características iniciais", (DND.SOURCES[c.source] || {}).label + " · classe", lvl1);
    if (b && b.optionalFeature) S.addFeature(b.optionalFeature.name, b.name + " · antecedente", b.optionalFeature.text);

    st.weapons.forEach(function (id) {
      var w = DND.byId("weapons", id);
      if (w) S.addAttackRow({ nome: w.name, bonus: "", dano: w.damage, notas: w.properties || "" });
    });
    st.spellPicks.forEach(function (id) {
      var sp = DND.byId("spells", id);
      if (sp) S.addSpellRow({
        nivel: String(sp.level), nome: sp.name,
        escola: sp.school === "—" ? "" : (sp.school || ""),
        prep: "", notas: "escolhida na criação" + (sp.page ? " · p." + sp.page : "")
      });
    });
    if (st.spells.trim()) S.addSpellRow({ nivel: "", nome: "Magias iniciais (anotações)", escola: "", prep: "", notas: st.spells.trim() });

    S.setBuild({
      classId: c.id, subclassId: null, raceId: r.id,
      subraceIdx: (r.subraces && st.subraceIdx != null ? st.subraceIdx : null),
      level: 1
    });
    S.save(); S.renderAll();
    document.body.classList.remove("creator-mode");
    el.querySelector("#crStatus").textContent = "Personagem criado! Veja a aba Ficha.";
    if (root.DNDApp) root.DNDApp.showTab("principal");
  }

  function boot() {
    el = document.getElementById("creator-panel");
    if (!el) return;
    el.innerHTML =
      '<h2>Novo personagem <span class="hint">7 etapas · D&amp;D básico + Reinos Yokai</span></h2>' +
      '<div id="crStepper" class="creator-stepper"></div>' +
      '<div id="crBody" class="creator-step active"></div>' +
      '<div class="creator-footer">' +
        '<button class="btn secondary" id="crBack">Anterior</button>' +
        '<span class="step-count" id="crCount">1 de 7</span>' +
        '<span class="creator-status" id="crStatus" aria-live="polite"></span>' +
        '<button class="btn" id="crNext">Próximo</button>' +
        '<button class="btn" id="crFinish" style="display:none">Concluir personagem</button>' +
      '</div>';
    /* botões estáticos do rodapé: conectados uma única vez */
    el.querySelector("#crBack").addEventListener("click", function () { st.step = Math.max(1, st.step - 1); render(); });
    el.querySelector("#crNext").addEventListener("click", function () { st.step = Math.min(7, st.step + 1); render(); });
    el.querySelector("#crFinish").addEventListener("click", finish);
    render();
  }

  root.DNDCreator = { boot: boot, reset: function () { st.step = 1; render(); } };
})(window);
