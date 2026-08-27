/* ============================================================
   PRÓTESES — Ryoko's Guide to the Yokai Realms
   (Equipment & Prostheses, p. 76–80). Texto transcrito do PDF.
   ============================================================ */
(function () {
  "use strict";
  window.DND.register("prostheses", [
    {
      id: "pr-regras", name: "Próteses — regras gerais", source: "homebrew", page: 76, kind: "regra",
      text: "Uma prótese é um item que funciona como substituto ou aumento de um membro ou parte do corpo. Dividem-se em mundanas e mágicas.\n\nPRÓTESES MUNDANAS. Não mágicas e totalmente mecânicas, com limitações: podem substituir um membro perdido, mas não aumentar um existente nem adicionar um membro que a espécie normalmente não tem; replicam funções motoras, mas não transmitem sensação (um olho protético mundano gira na órbita, mas não permite enxergar). Fora isso, imitam perfeitamente a função do membro. Uma criatura leva 1 min para prender ou remover uma prótese de si ou de outra criatura disposta a até 1,5 m. Alternativamente, gasta 1 min para travar (jam) a prótese de uma criatura disposta ou inconsciente; uma prótese travada continua funcionando como membro, mas nenhuma de suas propriedades pode ser usada até alguém gastar 10 min destravando-a (exige as duas mãos livres). Advanced Weapon Masteries: próteses podem ser usadas com o sistema de AWM; para cada prótese que sirva como arma, a tabela Adventuring Prostheses indica qual superior strike pode ser usado com ela.\n\nPRÓTESES MÁGICAS. Usam encantamentos intrincados. Podem substituir um membro/parte e replicar TODAS as funções (um olho protético mágico enxerga; uma língua protética mágica prova). Podem ser colocadas em torno de um membro existente para aprimorá-lo. Não podem adicionar um membro além do número típico da criatura, salvo indicação. Não podem ser presas nem removidas contra a vontade da criatura, mesmo inconsciente. Uma prótese mágica sem propriedades adicionais é um item mágico comum sem sintonização; as mais poderosas podem exigir sintonização."
    },
    { id: "pr-p-blast", name: "Propriedade: Blast (XdX, X m)", source: "homebrew", page: 80, kind: "propriedade",
      text: "A prótese pode descarregar rajadas explosivas. É uma arma marcial à distância com a propriedade Recarga (Loading). Se você é proficiente com arma marcial à distância, é proficiente com esta. Os parênteses indicam dados de dano, tipo e alcance; esta arma não tem alcance máximo. Alternativamente, você pode usar uma ação para disparar o canhão e se propelir por uma distância de até o alcance em linha reta em qualquer direção, sem causar dano (o movimento pode provocar ataques de oportunidade)." },
    { id: "pr-p-hookshot", name: "Propriedade: Hookshot (X m)", source: "homebrew", page: 80, kind: "propriedade",
      text: "Gancho metálico preso a um carretel de arame (ou corda/corrente/teia). Se a prótese não estiver segurando um item, você pode atirar o gancho numa superfície fixa no alcance como ação bônus, ou como reação ao cair. O gancho fica preso até você usar uma ação bônus para soltá-lo e recolher o arame, ou até o arame ser destruído (objeto CA 19, 10 PV; resistência a fogo e frio; imune a elétrico, psíquico e veneno). Alternativamente, atire o gancho numa criatura ao menos dois tamanhos maior que você (jogada de ataque com a prótese; proficiente; Força ou Destreza). No acerto, sem dano, mas o gancho se prende; uma criatura a até 1,5 m pode gastar uma ação para arrancá-lo (teste de Força ou Destreza CD 10). Enquanto preso, você tem vantagem em testes para se mover pelo arame e não pode se afastar mais que o alcance do ponto de ancoragem; se estiver caindo, para de cair além do alcance e fica suspenso. Enquanto o gancho não é recolhido, a prótese não pode segurar nada nem atacar, e você não pode usar objetos integrados nela." },
    { id: "pr-p-integrated", name: "Propriedade: Integrated (X)", source: "homebrew", page: 80, kind: "propriedade",
      text: "O objeto entre parênteses é integrado à prótese e não pode ser separado, trocado nem arremessado. Você pode estender/retrair o objeto integrado como interação de objeto livre (se for arma, conta como sacar/guardar). Enquanto estendido de uma prótese de braço/mão, você o manipula como se o segurasse, e a mão não é considerada livre. Uma prótese só pode ter um objeto integrado: uma arma sem as propriedades Pesada ou Superpesada; um escudo; um conjunto de ferramentas ou item de mão que caiba na prótese; um orbe, bastão ou varinha; ou um \"stash\" (compartimento oculto de até ~35 pol³ para objetos Minúsculos — anéis, frascos, bombas de fumaça, munição, saco de estrepes; guardar/retirar é ação bônus; encontrar exige teste de Inteligência (Investigação) CD 11)." },
    { id: "pr-p-launch", name: "Propriedade: Launch (XdX, X m)", source: "homebrew", page: 80, kind: "propriedade",
      text: "Parte da prótese presa ao membro por corrente/corda/arame, que pode ser lançada num inimigo. A prótese é uma arma marcial à distância com as propriedades Arremesso e Acuidade. Se você é proficiente com arma de Arremesso, é proficiente com esta. A parte usada no ataque é automaticamente recolhida logo após. Os parênteses indicam dados de dano, tipo e alcance; sem alcance máximo." },
    { id: "pr-p-melee", name: "Propriedade: Melee (XdX, X)", source: "homebrew", page: 80, kind: "propriedade",
      text: "A prótese é uma arma marcial corpo a corpo. Se você é proficiente com arma marcial corpo a corpo, é proficiente com esta. Os parênteses indicam dados de dano, tipo e propriedades adicionais que ela possa ter." },
    { id: "pr-p-mobility", name: "Propriedade: Mobility (X, X m)", source: "homebrew", page: 80, kind: "propriedade",
      text: "Usando esta prótese, você ganha um deslocamento especial, cujo tipo e valor estão nos parênteses (ex.: escalada 9 m, natação 9 m, escavação 1,5 m)." },
    { id: "pr-p-obscure", name: "Propriedade: Obscure", source: "homebrew", page: 80, kind: "propriedade",
      text: "A prótese pode expelir uma nuvem de fumaça. Como ação bônus, expila uma nuvem de 1,5 m de raio centrada em você; a área fica densamente obscurecida e dura até o fim do seu próximo turno. Depois, você não pode fazê-lo de novo até usar uma ação para redefinir o mecanismo." },

    /* --- Tabela Adventuring Prostheses (OCR parcial do PDF) --- */
    { id: "pr-i-basic", name: "Basic Prosthesis", source: "homebrew", page: 78, kind: "item",
      text: "Propriedades: Integrated (qualquer). Custo: 50 po. Encaixa em braço (varia por objeto integrado). Superior strike: varia (o da arma/escudo integrado)." },
    { id: "pr-i-advanced-hookshot", name: "Advanced Hookshot", source: "homebrew", page: 78, kind: "item",
      text: "Propriedades: Hookshot (4,5 m), Integrated (qualquer), Launch (1d6*, 4,5 m). Custo: 100 po. Encaixa em braço. Superior strike: varia." },
    { id: "pr-i-cannon", name: "Cannon", source: "homebrew", page: 78, kind: "item",
      text: "Propriedade: Blast (1d6*, 6 m). Custo: 150 po. Encaixa em braço. Superior strike: Piercing Shot." },
    { id: "pr-i-climbing-claw", name: "Climbing Claw", source: "homebrew", page: 78, kind: "item",
      text: "Propriedade: Mobility (escalada 6 m). Custo: 75 po. Encaixa em braço." },
    { id: "pr-i-combat-arm", name: "Combat Arm", source: "homebrew", page: 78, kind: "item",
      text: "Propriedades: Hookshot (6 m), Launch (1d6*, 6 m), Melee (1d6*, Pugilista). Custo: 150 po. Encaixa em braço. Superior strike: Flurry." },
    { id: "pr-i-grappling-hook", name: "Grappling Hook", source: "homebrew", page: 78, kind: "item",
      text: "Propriedade: Hookshot (12 m). Custo: 100 po. Encaixa em braço." },
    { id: "pr-i-smokeshot", name: "Smokeshot", source: "homebrew", page: 78, kind: "item",
      text: "Propriedades: Integrated (stash), Obscure. Custo: 90 po. Encaixa em braço." },
    { id: "pr-i-steelslinger", name: "Steelslinger", source: "homebrew", page: 78, kind: "item",
      text: "Propriedades: Hookshot (9 m), Launch (1d6*, 9 m). Custo: 125 po. Encaixa em braço. Superior strike: Battery Strike." },
    { id: "pr-i-streamcutter", name: "Streamcutter", source: "homebrew", page: 78, kind: "item",
      text: "Propriedade: Mobility (natação 6 m). Custo: 75 po. Encaixa em braço/perna." },
    { id: "pr-i-wartail", name: "Wartail", source: "homebrew", page: 78, kind: "item",
      text: "Propriedade: Melee (1d6*, Flagelo). Custo: 100 po. Encaixa em cauda. Superior strike: Trip." }
  ]);
})();
