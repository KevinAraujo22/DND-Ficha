/* ============================================================
   SUBIR DE NÍVEL — botão + lógica.
   • Bumpa o nível do personagem e o bônus de proficiência.
   • Adiciona as características de classe/subclasse ganhas no
     novo nível e sinaliza traços raciais que ativam ali.
   • No nível de destravar a subclasse, pede para escolher uma.
   • Se a classe conjura, pede uma nova magia (opcional) da lista
     que a classe pode escolher, e atualiza os espaços de magia.
   ============================================================ */
(function (root) {
  "use strict";
  var DND = root.DND;

  var PB = [0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];

  /* espaços de magia por nível de personagem — [1º..9º] */
  var FULL = {
    1: [2], 2: [3], 3: [4, 2], 4: [4, 3], 5: [4, 3, 2], 6: [4, 3, 3],
    7: [4, 3, 3, 1], 8: [4, 3, 3, 2], 9: [4, 3, 3, 3, 1], 10: [4, 3, 3, 3, 2],
    11: [4, 3, 3, 3, 2, 1], 12: [4, 3, 3, 3, 2, 1], 13: [4, 3, 3, 3, 2, 1, 1], 14: [4, 3, 3, 3, 2, 1, 1],
    15: [4, 3, 3, 3, 2, 1, 1, 1], 16: [4, 3, 3, 3, 2, 1, 1, 1], 17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
    18: [4, 3, 3, 3, 3, 1, 1, 1, 1], 19: [4, 3, 3, 3, 3, 2, 1, 1, 1], 20: [4, 3, 3, 3, 3, 2, 2, 1, 1]
  };
  var HALF = {
    2: [2], 3: [3], 4: [3], 5: [4, 2], 6: [4, 2], 7: [4, 3], 8: [4, 3], 9: [4, 3, 2], 10: [4, 3, 2],
    11: [4, 3, 3], 12: [4, 3, 3], 13: [4, 3, 3, 1], 14: [4, 3, 3, 1], 15: [4, 3, 3, 2], 16: [4, 3, 3, 2],
    17: [4, 3, 3, 3, 1], 18: [4, 3, 3, 3, 1], 19: [4, 3, 3, 3, 2], 20: [4, 3, 3, 3, 2]
  };
  function pact(level) {
    var count = level >= 17 ? 4 : level >= 11 ? 3 : level >= 2 ? 2 : 1;
    var sl = Math.min(5, Math.ceil(level / 2));
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    arr[sl - 1] = count;
    return arr;
  }
  var FULL_CLASSES = ["Bardo", "Clérigo", "Druida", "Feiticeiro (Sorcerer)", "Mago (Wizard)"];
  var HALF_CLASSES = ["Paladino", "Patrulheiro (Ranger)", "Tamer (Domador)"];

  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function clip(s, n) { s = String(s || ""); return s.length > n ? s.slice(0, n - 1) + "…" : s; }
  function shortKey(name) { return String(name || "").split(" (")[0].trim(); }

  function toast(msg) {
    var t = document.createElement("div");
    t.textContent = msg;
    t.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:var(--wine);color:var(--gold-pale);padding:10px 18px;border-radius:6px;font-size:.85rem;z-index:300;box-shadow:0 4px 16px rgba(0,0,0,.35);max-width:90vw;text-align:center";
    document.body.appendChild(t);
    setTimeout(function () { t.style.transition = "opacity .4s"; t.style.opacity = "0"; setTimeout(function () { t.remove(); }, 420); }, 2800);
  }

  function openModal(html, onConfirm) {
    var ov = document.createElement("div");
    ov.className = "modal-overlay";
    ov.innerHTML = '<div class="modal">' + html +
      '<div class="modal-actions"><button class="btn secondary" data-x>Cancelar</button><button class="btn" data-ok>Confirmar</button></div></div>';
    document.body.appendChild(ov);
    var modal = ov.querySelector(".modal");
    ov.querySelector("[data-x]").addEventListener("click", function () { ov.remove(); });
    ov.addEventListener("click", function (e) { if (e.target === ov) ov.remove(); });
    ov.querySelector("[data-ok]").addEventListener("click", function () { onConfirm(modal, function () { ov.remove(); }); });
    return modal;
  }

  /* ---- resolução do "build" (classe/subclasse/raça/nível) ---- */
  function resolveBuild() {
    var S = root.DNDSheet, d = S.data;
    var b = d.build = d.build || {};
    var cls = b.classId ? DND.byId("classes", b.classId) : null;
    if (!cls) {
      var cn = (d.fields.classeNivel || "").trim().toLowerCase();
      (DND.compendium.classes || []).forEach(function (c) {
        if (cn.indexOf(c.name.toLowerCase()) === 0 && (!cls || c.name.length > cls.name.length)) cls = c;
      });
      if (cls) b.classId = cls.id;
    }
    var lvl = b.level;
    if (!lvl) {
      var m = (d.fields.classeNivel || "").match(/(\d+)\s*$/);
      lvl = m ? +m[1] : 1;
    }
    b.level = lvl;

    var race = b.raceId ? DND.byId("races", b.raceId) : null;
    if (!race) {
      var rn = (d.fields.raca || "").trim().toLowerCase();
      (DND.compendium.races || []).forEach(function (r) {
        if (rn.indexOf(r.name.toLowerCase()) === 0 && (!race || r.name.length > race.name.length)) race = r;
      });
      if (race) b.raceId = race.id;
      var pm = (d.fields.raca || "").match(/\(([^)]+)\)/);
      if (race && race.subraces && pm && b.subraceIdx == null) {
        race.subraces.forEach(function (sr, i) {
          if (sr.name.toLowerCase().indexOf(pm[1].toLowerCase().split(" ")[0]) >= 0) b.subraceIdx = i;
        });
      }
    }
    var sub = b.subclassId ? DND.byId("subclasses", b.subclassId) : null;
    return { b: b, cls: cls, race: race, sub: sub, level: lvl };
  }

  function textMentionsLevel(t, n) {
    t = (t || "").toLowerCase();
    var pats = [n + "º nível", n + "o nível", "nível " + n, n + "rd level", n + "th level",
      n + "st level", n + "nd level", n + "th-level", n + "rd-level", n + "st-level", n + "nd-level"];
    return pats.some(function (p) { return t.indexOf(p) >= 0; });
  }

  function subclassMatches(sc, cls) {
    if (sc.id === "yr-improved-extra-attack") return false;
    var fc = (sc.forClass || "").toLowerCase();
    return fc.indexOf(shortKey(cls.name).toLowerCase()) >= 0;
  }

  function slotsFor(cls, level) {
    if (cls.benderTable) {
      var row = cls.benderTable.filter(function (r) { return +r[0] === level; })[0];
      if (row) return String(row[4]).split("/").map(function (x) {
        x = x.trim(); return (x === "–" || x === "-" || x === "") ? 0 : (+x || 0);
      });
    }
    if (FULL_CLASSES.indexOf(cls.name) >= 0) return FULL[level] || null;
    if (HALF_CLASSES.indexOf(cls.name) >= 0) return HALF[level] || null;
    if (cls.name.indexOf("Bruxo") === 0) return pact(level);
    return null;
  }

  function featRowFactory(kind) {
    return function (f, i) {
      return '<label class="lu-feat"><input type="checkbox" checked data-kind="' + kind + '" data-idx="' + i + '">' +
        '<span><b>' + esc(f.name) + '</b>' + (f.level ? ' <span class="pdfnote">(nível ' + f.level + ')</span>' : '') +
        '<br>' + esc(clip(f.text, 260)) + '</span></label>';
    };
  }

  function run() {
    var S = root.DNDSheet;
    if (!S) return;
    var r = resolveBuild();
    if (!r.cls) {
      alert("Defina a classe do personagem primeiro — pela aba Compêndio → Classes (botão \"Usar como classe na ficha\") ou pelo criador de personagem.");
      return;
    }
    var cur = r.level;
    if (cur >= 20) { alert("O personagem já está no nível 20."); return; }
    var newLevel = cur + 1;
    var isCaster = !!r.cls.spellcasting;

    var classFeats = (r.cls.features || []).filter(function (f) { return f.level === newLevel; });
    var raceFeats = [];
    if (newLevel > 1 && r.race) {
      (r.race.traits || []).forEach(function (t) {
        if (textMentionsLevel(t.text, newLevel)) raceFeats.push({ name: t.name, text: t.text, origem: r.race.name + " · traço racial" });
      });
      if (r.race.subraces && r.b.subraceIdx != null && r.race.subraces[r.b.subraceIdx]) {
        (r.race.subraces[r.b.subraceIdx].traits || []).forEach(function (t) {
          if (textMentionsLevel(t.text, newLevel)) raceFeats.push({ name: t.name, text: t.text, origem: r.race.subraces[r.b.subraceIdx].name + " · traço racial" });
        });
      }
    }
    var needSubclass = !r.sub && r.cls.subclassLevel === newLevel;
    var subFeats = (r.sub && r.sub.unlockLevel <= newLevel)
      ? (r.sub.features || []).filter(function (f) { return f.level === newLevel; }) : [];

    var body = "";
    body += '<div class="lu-sec">Características de classe — ' + esc(r.cls.name) + "</div>";
    body += classFeats.length ? classFeats.map(featRowFactory("class")).join("")
      : '<p class="pdfnote">Nenhuma característica nova de classe neste nível. O bônus de proficiência e os espaços de magia são atualizados mesmo assim.</p>';

    if (needSubclass) {
      var opts = DND.query("subclasses", {}).filter(function (sc) { return subclassMatches(sc, r.cls); });
      body += '<div class="lu-sec">Escolha sua subclasse (' + esc(r.cls.subclassLabel || "subclasse") + ")</div>";
      body += '<select id="luSubclass" style="width:100%"><option value="">— escolher depois —</option>' +
        opts.map(function (o) { return '<option value="' + o.id + '">' + esc(o.name) + " · " + esc((DND.SOURCES[o.source] || {}).label || o.source) + "</option>"; }).join("") + "</select>";
      body += '<p class="pdfnote">Ao escolher, todas as características da subclasse até o nível ' + newLevel + " serão adicionadas.</p>";
    } else if (subFeats.length) {
      body += '<div class="lu-sec">Características de subclasse — ' + esc(r.sub.name) + "</div>";
      body += subFeats.map(featRowFactory("sub")).join("");
    }

    if (raceFeats.length) {
      body += '<div class="lu-sec">Traços raciais que passam a valer no nível ' + newLevel + "</div>";
      body += raceFeats.map(featRowFactory("race")).join("");
    }

    if (isCaster) {
      body += '<div class="lu-sec">Nova magia</div>';
      body += '<p class="pdfnote">' + esc(r.cls.spellcasting.type) + " — " + esc(r.cls.spellcasting.ability) +
        ". Escolha uma magia para adicionar à ficha (opcional).</p>";
      body += '<input type="search" id="luSpellSearch" placeholder="Filtrar por nome ou classe..." style="margin-bottom:6px">';
      body += '<select id="luSpell" size="8" style="width:100%"></select>';
      body += '<label style="display:block;margin-top:6px;font-size:.8rem"><input type="checkbox" id="luAllSpells" style="width:auto"> mostrar magias de todas as classes e níveis</label>';
    }

    var m = openModal(
      "<h3>Subir para o nível " + newLevel + "</h3>" +
      '<p class="msub">' + esc(r.cls.name) + (r.race ? " · " + esc(r.race.name) : "") +
      " — nível " + cur + " → " + newLevel + ". Bônus de proficiência: +" + PB[newLevel] + ".</p>" + body,
      function (modal, close) {
        var subChoiceEl = modal.querySelector("#luSubclass");
        var subChoice = subChoiceEl ? subChoiceEl.value : "";
        var chosenSub = subChoice ? DND.byId("subclasses", subChoice) : r.sub;

        r.b.level = newLevel;
        if (subChoice) r.b.subclassId = subChoice;
        S.setBuild(r.b);
        S.setField("classeNivel", r.cls.name + (chosenSub ? " — " + chosenSub.name : "") + " " + newLevel);
        S.setField("profBonus", "+" + PB[newLevel]);
        if (isCaster && !S.data.fields.classeConjuracao) {
          S.setField("classeConjuracao", r.cls.name);
          S.setField("atributoConjuracao", r.cls.spellcasting.ability);
        }

        var added = 0;
        modal.querySelectorAll(".lu-feat input[type=checkbox][data-kind]").forEach(function (cb) {
          if (!cb.checked) return;
          var idx = +cb.dataset.idx, kind = cb.dataset.kind, f;
          if (kind === "class") f = classFeats[idx];
          else if (kind === "sub") f = subFeats[idx];
          else if (kind === "race") f = raceFeats[idx];
          if (!f) return;
          var origem = kind === "race" ? f.origem
            : (kind === "sub" ? chosenSub.name + " · nível " + newLevel : r.cls.name + " · nível " + newLevel);
          if (!S.hasFeature(f.name, origem)) { S.addFeature(f.name, origem, f.text); added++; }
        });

        /* subclasse recém-escolhida: adiciona tudo até o novo nível */
        if (subChoice && chosenSub) {
          (chosenSub.features || []).forEach(function (f) {
            if (f.level > newLevel) return;
            var origem = chosenSub.name + " · nível " + f.level;
            if (!S.hasFeature(f.name, origem)) { S.addFeature(f.name, origem, f.text); added++; }
          });
        }

        var sp = modal.querySelector("#luSpell");
        if (sp && sp.value) {
          var spell = DND.byId("spells", sp.value);
          if (spell) {
            S.addSpellRow({
              nivel: String(spell.level), nome: spell.name,
              escola: spell.school === "—" ? "" : (spell.school || ""),
              prep: "", notas: "aprendida no nível " + newLevel + (spell.page ? " · p." + spell.page : "")
            });
          }
        }

        var arr = slotsFor(r.cls, newLevel);
        if (arr) {
          for (var i = 0; i < 9; i++) {
            if (!S.data.spellSlots[i + 1]) S.data.spellSlots[i + 1] = { total: "", usados: "" };
            if (arr[i] > 0) S.data.spellSlots[i + 1].total = String(arr[i]);
          }
        }

        S.save();
        S.renderAll();
        close();
        toast("Personagem agora é nível " + newLevel + (added ? " — " + added + " característica(s) adicionada(s)" : ""));
      }
    );

    if (isCaster) {
      var searchEl = m.querySelector("#luSpellSearch");
      var selEl = m.querySelector("#luSpell");
      var allEl = m.querySelector("#luAllSpells");
      var clsKey = shortKey(r.cls.name).toLowerCase();
      var clsFull = r.cls.name.toLowerCase();
      var maxLvl = Math.min(9, Math.ceil(newLevel / 2));
      function refresh() {
        var q = (searchEl.value || "").toLowerCase();
        var all = allEl.checked;
        var benderWide = r.cls.id === "yr-bender"; /* lista do bender é ampla e por elemento */
        var list = DND.query("spells", {}).filter(function (s) {
          if (!all) {
            if (s.level > maxLvl) return false;
            var cl = (s.classes || "").toLowerCase();
            if (!benderWide && cl.indexOf(clsKey) < 0 && cl.indexOf(clsFull) < 0) return false;
          }
          if (q && (s.name + " " + (s.classes || "")).toLowerCase().indexOf(q) < 0) return false;
          return true;
        }).sort(function (a, b) { return (a.level - b.level) || a.name.localeCompare(b.name, "pt"); });
        selEl.innerHTML = list.slice(0, 400).map(function (s) {
          return '<option value="' + s.id + '">' + (s.level === 0 ? "Truque" : s.level + "º") + " · " + esc(s.name) +
            (s.school && s.school !== "—" ? " (" + esc(s.school) + ")" : "") + "</option>";
        }).join("") || '<option value="">nenhuma magia encontrada</option>';
      }
      searchEl.addEventListener("input", refresh);
      allEl.addEventListener("change", refresh);
      refresh();
    }
  }

  function boot() {
    var btn = document.getElementById("btnLevelUp");
    if (btn) btn.addEventListener("click", run);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  root.DNDLevelUp = { run: run };
})(window);
