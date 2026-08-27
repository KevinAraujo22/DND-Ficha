/* ============================================================
   PROPRIEDADES DE ARMA
   • SRD: resumo das propriedades padrão de 5e.
   • Reinos Yokai: 7 propriedades novas + propriedades Especiais,
     transcritas verbatim do PDF (Equipment & Prostheses, p. 74–76).
   ============================================================ */
(function () {
  "use strict";
  window.DND.register("weaponProperties", [
    /* ---- SRD ---- */
    { id: "wp-ammunition", name: "Munição (Ammunition)", source: "srd", text: "Só pode fazer ataque à distância se tiver munição; cada ataque gasta uma. Ao fim da batalha, recupera metade da munição gasta em 1 min de busca." },
    { id: "wp-finesse", name: "Acuidade (Finesse)", source: "srd", text: "Ao atacar, use Força ou Destreza (o mesmo modificador para ataque e dano)." },
    { id: "wp-heavy", name: "Pesada (Heavy)", source: "srd", text: "Criaturas Pequenas têm desvantagem em ataques com esta arma." },
    { id: "wp-light", name: "Leve (Light)", source: "srd", text: "Adequada para combate com duas armas: ao usar a ação de Ataque com uma arma leve numa mão, pode usar ação bônus para atacar com outra arma leve na outra mão (sem somar o modificador ao dano do ataque bônus, salvo se negativo)." },
    { id: "wp-loading", name: "Recarga (Loading)", source: "srd", text: "Só pode disparar uma munição por ação, ação bônus ou reação, independentemente do número de ataques." },
    { id: "wp-range", name: "Distância (Range)", source: "srd", text: "Dois valores (normal/máximo). Além do normal: desvantagem; além do máximo: não pode atacar." },
    { id: "wp-reach", name: "Alcance (Reach)", source: "srd", text: "+1,5 m no alcance ao atacar (inclusive para ataques de oportunidade)." },
    { id: "wp-thrown", name: "Arremesso (Thrown)", source: "srd", text: "Pode ser arremessada para um ataque à distância, usando o mesmo modificador de um ataque corpo a corpo com ela." },
    { id: "wp-twohanded", name: "Duas Mãos (Two-handed)", source: "srd", text: "Exige duas mãos ao atacar." },
    { id: "wp-versatile", name: "Versátil (Versatile)", source: "srd", text: "Pode ser usada com uma ou duas mãos. O valor entre parênteses é o dano com duas mãos." },

    /* ---- Reinos Yokai (novas) ---- */
    { id: "wp-adaptable", name: "Adaptável (Adaptable)", source: "homebrew", page: 74, text: "Esta arma pode ser usada com técnicas diferentes, causando tipos de dano diferentes. Um tipo de dano entre parênteses aparece com a propriedade — ao atacar com a arma, você pode optar por causar o tipo de dano alternativo." },
    { id: "wp-attached", name: "Presa (Attached)", source: "homebrew", page: 74, text: "Você não pode ser desarmado desta arma, mas vesti-la ou retirá-la exige uma ação. Você pode usar a mão equipada com ela para segurar itens, mas não pode atacar com a arma enquanto o faz. Além disso, você tem desvantagem em ataques com outras armas seguradas nessa mão e em testes de Prestidigitação (Sleight of Hand) com ela." },
    { id: "wp-impact", name: "Impacto (Impact)", source: "homebrew", page: 74, text: "Esta arma causa o dobro do dano contra objetos e estruturas. (Possui árvore de técnicas de Advanced Weapon Mastery.)" },
    { id: "wp-parry", name: "Aparar (Parry)", source: "homebrew", page: 74, text: "Esta arma foi feita para ajudar a aparar golpes. Empunhando-a, você pode usar sua reação ao ser atingido por um ataque corpo a corpo para ganhar +2 de CA contra o ataque disparador, podendo fazê-lo errar." },
    { id: "wp-pugilist", name: "Pugilista (Pugilist)", source: "homebrew", page: 74, text: "Para criaturas que rolam um dado ao fazer golpes desarmados (como o monge), o tamanho do dado de dano aumenta uma categoria (máx. 1d12) quando fazem golpes desarmados com uma mão equipada com uma arma que tenha esta propriedade. (Possui árvore de técnicas de AWM.)" },
    { id: "wp-scourge", name: "Flagelo (Scourge)", source: "homebrew", page: 74, text: "Esta arma adiciona 1,5 m (5 pés) ao seu alcance ao atacar com ela (inclusive para ataques de oportunidade). Como a propriedade Alcance, mas através de um material flexível, não de uma haste rígida. O chicote (whip) teve Alcance substituída por Flagelo. (Possui árvore de técnicas de AWM.)" },
    { id: "wp-thrown-versatility", name: "Versatilidade de Arremesso (Thrown Versatility)", source: "homebrew", page: 74, text: "Esta arma é melhor usada em ataques à distância arremessados do que corpo a corpo. Um valor de dano entre parênteses aparece com a propriedade — o dano quando a arma é usada num ataque à distância." },

    /* ---- Reinos Yokai (Especiais de armas específicas) ---- */
    { id: "wp-special-counterweight", name: "Especial: Counterweight (kusarigama)", source: "homebrew", page: 74, text: "Empunhando o kusarigama com duas mãos, você pode usar uma ação bônus para atacar com o contrapeso. Esse ataque tem alcance de 3 m (10 pés) e causa 1d4 de dano de concussão. Você não soma seu modificador de habilidade ao dano deste ataque (a menos que seja negativo)." },
    { id: "wp-special-flourish", name: "Especial: Flourish (nunchaku)", source: "homebrew", page: 74, text: "Empunhando o nunchaku com duas mãos e usando a ação de Ataque, você pode tentar florear a arma imediatamente antes do primeiro ataque. Faça um teste de Destreza CD 13, somando o bônus de proficiência se for proficiente. Em sucesso, +2 na primeira jogada de ataque do turno. Em falha, você sofre dano de concussão igual ao seu bônus de proficiência e não ganha bônus de floreios neste turno." },
    { id: "wp-special-fan-shield", name: "Especial: Fan Shield (tessen)", source: "homebrew", page: 74, text: "Ao ser atingido por um ataque com um projétil que pese menos de ~900 g (adaga arremessada, dardo, flecha, bala) enquanto segura o tessen, você pode usar sua reação para abrir o leque e tentar defletir o projétil, ganhando +2 de CA contra o ataque disparador (podendo fazê-lo errar)." },
    { id: "wp-special-long-reload", name: "Especial: Long Reload (odzutsu)", source: "homebrew", page: 74, text: "Após um ataque com esta arma, ela deve ser recarregada. Devido ao peso e tamanho da arma e da munição, recarregar leva duas ações, que não precisam ser consecutivas." }
  ]);
})();
