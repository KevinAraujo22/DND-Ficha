/* ============================================================
   EQUIPAMENTO DE AVENTURA
   • SRD: itens de aventura mais comuns (resumo).
   • Reinos Yokai: equipamento novo, transcrito verbatim do PDF
     (Equipment & Prostheses, p. 73).
   ============================================================ */
(function () {
  "use strict";
  window.DND.register("gear", [
    /* ---- Reinos Yokai ---- */
    {
      id: "g-fire-charge", name: "Fire Charge (Carga de Fogo)", source: "homebrew", page: 73,
      cost: "5 po (valor); 2 po de material", weight: "0,9 kg",
      text: "Pequeno dispositivo pirotécnico com projéteis/estilhaços, feito para ser preso a uma arma de haste. Em 1 min, você o prende à ponta de um glaive, alabarda, lança de cavalaria, pique, bordão, lança ou twinblade — a arma passa a ser chamada de \"firelance\". Empunhando-a, você pode usar uma ação bônus para acender o pavio; ele detona e é destruído no próximo ataque que você fizer com a firelance antes do fim do turno. Acertando ou errando, o alvo faz um TR de Destreza CD 13, sofrendo 1d10 de fogo + 1d10 perfurante em falha, ou metade em sucesso. Se você não atacar após acender, a carga detona inofensivamente no fim do turno e é destruída. Fabricação: alquimista ou funileiro, CD 13, 2 h."
    },
    {
      id: "g-firecrackers", name: "Firecrackers (Rojões)", source: "homebrew", page: 73,
      cost: "1 po (valor); 3 pp de material", weight: "0,11 kg",
      text: "Como ação, você acende esta tira de pequenos explosivos e a arremessa num ponto a até 9 m. Os explosivos detonam inofensivamente, mas criam muito barulho. Criaturas que decidam investigar o barulho têm desvantagem em testes de Percepção até pararem de investigar os rojões. Fabricação: alquimista, CD 11, 2 h."
    },
    {
      id: "g-hookshot", name: "Hookshot (Gancho de Arremesso)", source: "homebrew", page: 73,
      cost: "50 po (valor); 17 po de material", weight: "2,25 kg",
      text: "Dispositivo de mão semelhante a uma besta que dispara um gancho preso a uma corda. Empunhando-o, você pode usar uma ação bônus (ou uma reação ao cair) para atirar o gancho numa superfície fixa a até 9 m. O gancho fica preso até uma ação bônus recolhê-lo ou a corda ser destruída (CA 10, 10 PV). Alternativamente, você pode atirar o gancho numa criatura ao menos dois tamanhos maior que você, fazendo uma jogada de ataque (proficiente; usa Força ou Destreza). No acerto, não causa dano, mas o gancho se prende. Uma criatura a até 1,5 m do gancho pode gastar uma ação para arrancá-lo (teste de Força ou Destreza CD 10). Enquanto preso, você tem vantagem em testes para se mover pela corda (escalar, nadar contra a corrente, andar contra vento forte) e não pode se afastar mais que o alcance do ponto de ancoragem. Se você está caindo, você para de cair e fica suspenso da superfície. Fabricação: funileiro, CD 15, 12 h."
    },
    {
      id: "g-odzutsu-shot", name: "Ōdzutsu Shot (20)", source: "homebrew", page: 73,
      cost: "10 po (valor); 3 po de material", weight: "1,8 kg (o pacote)",
      text: "Esferas de ferro maciço do tamanho de um punho, munição para o ōdzutsu. Cada uma tem de 2,5 a 5 cm de diâmetro e pesa ~90 g. Fabricação: ferreiro, CD 11, 2 h."
    },
    {
      id: "g-parachute", name: "Parachute (Paraquedas)", source: "homebrew", page: 73,
      cost: "50 po (valor); 17 po de material", weight: "6,8 kg",
      text: "Geralmente dobrado dentro de uma mochila especializada. Como reação ao cair de uma altura de 30 m ou mais usando tal mochila, você abre o paraquedas para reduzir sua velocidade de descida a 18 m por rodada. Se pousar com o paraquedas aberto, você não sofre dano de queda. Uma vez aberto, ele pode ser redobrado em 10 min ou cortado como ação. Uma criatura que arrasta um paraquedas aberto atrás de si tem o deslocamento reduzido à metade. Fabricação: tecelão, CD 15, 6 h."
    },
    {
      id: "g-smokebomb", name: "Smokebomb (Bomba de Fumaça) (5)", source: "homebrew", page: 73,
      cost: "25 po (valor); 8 po de material", weight: "0,45 kg (o pacote)",
      text: "Como ação, você arremessa uma dessas pequenas esferas para criar uma nuvem de fumaça de 1,5 m de raio centrada num ponto a até 9 m. A área é densamente obscurecida e dura até o fim do seu próximo turno ou até ser dispersada por vento moderado (ao menos 16 km/h). Fabricação: alquimista, CD 15, 2 h."
    },

    /* ---- SRD (resumo dos itens mais usados) ---- */
    { id: "g-mochila", name: "Mochila (Backpack)", source: "srd", cost: "2 po", weight: "2,5 kg", text: "Comporta 1 pé cúbico / ~12 kg de equipamento." },
    { id: "g-corda-canhamo", name: "Corda de cânhamo (15 m)", source: "srd", cost: "1 po", weight: "5 kg", text: "Tem 2 PV e pode ser rompida com um teste de Força CD 17." },
    { id: "g-tocha", name: "Tocha (Torch)", source: "srd", cost: "1 cp", weight: "0,5 kg", text: "Queima por 1 h; luz plena em 6 m, penumbra por mais 6 m. Ataque improvisado: 1 de fogo." },
    { id: "g-kit-curandeiro", name: "Kit de curandeiro (Healer's kit)", source: "srd", cost: "5 po", weight: "1,5 kg", text: "10 usos. Ação para estabilizar uma criatura a 0 PV sem teste de Medicina." },
    { id: "g-racoes", name: "Rações (1 dia)", source: "srd", cost: "5 pp", weight: "1 kg", text: "Comida seca para viagem." },
    { id: "g-cantil", name: "Cantil (Waterskin)", source: "srd", cost: "2 pp", weight: "2,5 kg (cheio)", text: "Guarda ~4 litros de líquido." },
    { id: "g-pacote-explorador", name: "Pacote de explorador", source: "srd", cost: "10 po", weight: "—", text: "Mochila, saco de dormir, kit de mesa, caixa de fósforos, 10 tochas, 10 dias de rações, cantil, 15 m de corda de cânhamo." },
    { id: "g-pacote-masmorra", name: "Pacote de masmorra (Dungeoneer's pack)", source: "srd", cost: "12 po", weight: "—", text: "Mochila, pé de cabra, martelo, 10 estacas, 10 tochas, caixa de fósforos, 10 dias de rações, cantil, 15 m de corda de cânhamo." },
    { id: "g-ferramentas-ladrao", name: "Ferramentas de ladrão", source: "srd", cost: "25 po", weight: "0,5 kg", text: "Testes com elas usam Destreza; incluem gazuas, espelho, tesoura, pinça e limas." }
  ]);
})();
