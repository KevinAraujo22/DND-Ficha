/* ============================================================
   CLASSES — D&D 5e básico (SRD 5.1).
   Progressão resumida: proficiências completas + características
   principais por nível (texto condensado a partir do SRD).
   ASI = Aumento no Valor de Habilidade (níveis 4/8/12/16/19,
   salvo indicação da classe).
   ============================================================ */
(function () {
  "use strict";
  var ASI = { level: 4, name: "Aumento no Valor de Habilidade", text: "Aumente uma característica em 2, ou duas em 1 (máx. 20). Também nos níveis 8, 12, 16 e 19 (Guerreiro: +6/14; Ladino: +10)." };

  window.DND.register("classes", [
    {
      id: "srd-barbaro", name: "Bárbaro", source: "srd", hitDie: "d12",
      primaryAbility: "Força", saves: ["Força", "Constituição"],
      armor: "Leve, média, escudos", weapons: "Simples e marciais",
      tools: "Nenhuma", skillChoices: 2,
      skillList: ["Lidar com Animais", "Atletismo", "Intimidação", "Natureza", "Percepção", "Sobrevivência"],
      startEquipment: "(a) machado grande ou (b) qualquer arma marcial corpo a corpo; (a) 2 machadinhas ou (b) qualquer arma simples; pacote de explorador e 4 azagaias.",
      subclassLevel: 3, subclassLabel: "Caminho Primal",
      spellcasting: null,
      features: [
        { level: 1, name: "Fúria", text: "Como ação bônus, entra em fúria por 1 min: vantagem em testes/TR de Força, bônus de dano corpo a corpo com Força (+2 até +4 conforme nível) e resistência a dano de concussão, perfurante e cortante. Usos: 2 (aumenta com o nível)." },
        { level: 1, name: "Defesa sem Armadura", text: "Sem armadura, sua CA = 10 + mod. Destreza + mod. Constituição." },
        { level: 2, name: "Ataque Descuidado", text: "No primeiro ataque do turno, ganha vantagem em ataques corpo a corpo com Força; ataques contra você têm vantagem até seu próximo turno." },
        { level: 2, name: "Sentir Perigo", text: "Vantagem em TR de Destreza contra efeitos visíveis (armadilhas, magias etc.) se não estiver cego, surdo ou incapacitado." },
        { level: 3, name: "Caminho Primal", text: "Escolha uma subclasse (ex.: Berserker no SRD; Path of the Kaiju em Reinos Yokai)." },
        ASI,
        { level: 5, name: "Ataque Extra", text: "Ataca duas vezes ao usar a ação de Ataque." },
        { level: 5, name: "Movimento Rápido", text: "Deslocamento +3 m sem armadura pesada." },
        { level: 7, name: "Instinto Feral", text: "Vantagem em iniciativa; se surpreso, pode agir normalmente entrando em fúria antes." },
        { level: 9, name: "Crítico Brutal", text: "Rola um dado de dano da arma a mais em acertos críticos corpo a corpo (2 no 13º, 3 no 17º)." },
        { level: 11, name: "Fúria Implacável", text: "Ao cair a 0 PV em fúria (sem morrer de imediato), TR Constituição CD 10 para ficar com 1 PV (CD +5 por uso)." },
        { level: 15, name: "Fúria Persistente", text: "Sua fúria só termina cedo se você ficar inconsciente ou optar por encerrá-la." },
        { level: 18, name: "Força Indômita", text: "Se o total de um teste de Força for menor que Força + 20, use esse valor." },
        { level: 20, name: "Campeão Primal", text: "Força e Constituição +4 (máx. 24)." }
      ]
    },
    {
      id: "srd-bardo", name: "Bardo", source: "srd", hitDie: "d8",
      primaryAbility: "Carisma", saves: ["Destreza", "Carisma"],
      armor: "Leve", weapons: "Simples, bestas de mão, espadas curtas/longas, rapieiras",
      tools: "Três instrumentos musicais à escolha", skillChoices: 3, skillList: ["qualquer três"],
      startEquipment: "(a) rapieira, (b) espada longa ou (c) qualquer arma simples; (a) pacote de diplomata ou (b) de artista; (a) alaúde ou (b) outro instrumento; armadura de couro e adaga.",
      subclassLevel: 3, subclassLabel: "Colégio Bárdico",
      spellcasting: { type: "Conhecida", ability: "Carisma", ritual: true, focus: "instrumento musical", note: "Conjurador pleno; conhece magias e as troca ao subir de nível." },
      features: [
        { level: 1, name: "Conjuração", text: "Conjurador pleno de Carisma. Truques e magias conhecidas da lista de bardo." },
        { level: 1, name: "Inspiração de Bardo (d6)", text: "Ação bônus: dá 1d6 a outra criatura (até 18 m); ela soma o dado a um ataque, teste ou TR em até 10 min. Usos = mod. Carisma por descanso longo (curto a partir do 5º). Dado sobe: d8 (5º), d10 (10º), d12 (15º)." },
        { level: 2, name: "Pau para Toda Obra", text: "Some metade do bônus de proficiência (arred. baixo) a testes de habilidade sem proficiência." },
        { level: 2, name: "Canção de Descanso", text: "Aliados que veem/ouvem sua atuação em descanso curto recuperam +1d6 PV extra (aumenta com o nível)." },
        { level: 3, name: "Colégio Bárdico", text: "Escolha uma subclasse (ex.: Colégio do Saber no SRD; College of Masks em Reinos Yokai)." },
        { level: 3, name: "Perícia (Expertise)", text: "Escolha duas perícias proficientes: dobra o bônus de proficiência (mais duas no 10º)." },
        ASI,
        { level: 5, name: "Fonte de Inspiração", text: "Recupera Inspiração de Bardo em descanso curto ou longo." },
        { level: 6, name: "Contramágica (Countercharm)", text: "Ação: você e aliados a 9 m têm vantagem em TR contra amedrontado e enfeitiçado até o fim do seu próximo turno." },
        { level: 10, name: "Segredos Mágicos", text: "Aprende 2 magias de qualquer classe (mais no 14º e 18º)." },
        { level: 20, name: "Inspiração Superior", text: "Recupera 1 uso de Inspiração ao rolar iniciativa sem nenhum restante." }
      ]
    },
    {
      id: "srd-clerigo", name: "Clérigo", source: "srd", hitDie: "d8",
      primaryAbility: "Sabedoria", saves: ["Sabedoria", "Carisma"],
      armor: "Leve, média, escudos", weapons: "Simples",
      tools: "Nenhuma", skillChoices: 2, skillList: ["História", "Intuição", "Medicina", "Persuasão", "Religião"],
      startEquipment: "(a) maça ou (b) martelo de guerra (se proficiente); (a) cota de escamas, (b) armadura de couro ou (c) cota de malha (se proficiente); (a) besta leve e 20 virotes ou (b) qualquer arma simples; (a) pacote de sacerdote ou (b) de explorador; escudo e símbolo sagrado.",
      subclassLevel: 1, subclassLabel: "Domínio Divino",
      spellcasting: { type: "Preparada", ability: "Sabedoria", ritual: true, focus: "símbolo sagrado", note: "Conjurador pleno; prepara magias da lista de clérigo diariamente." },
      features: [
        { level: 1, name: "Conjuração", text: "Conjurador pleno de Sabedoria; prepara magias da lista de clérigo (nº = mod. Sab + nível de clérigo)." },
        { level: 1, name: "Domínio Divino", text: "Escolha um domínio (Vida no SRD; Shrine Warden em Reinos Yokai). Concede magias e características." },
        { level: 2, name: "Canalizar Divindade", text: "Expulsar Mortos-Vivos + opção do domínio. 1 uso (2 no 6º, 3 no 18º), recupera em descanso curto ou longo." },
        ASI,
        { level: 5, name: "Destruir Mortos-Vivos", text: "Mortos-vivos de ND baixo são destruídos ao falharem em Expulsar (ND sobe com o nível)." },
        { level: 8, name: "Golpe Divino (domínio) / Investida Divina", text: "Característica do domínio no 8º nível." },
        { level: 10, name: "Intervenção Divina", text: "Ação: role d100; se ≤ nível de clérigo, sua divindade intervém. No 20º, sempre funciona." },
        { level: 17, name: "Magias de Domínio 8º–9º", text: "Progressão de conjuração completa." }
      ]
    },
    {
      id: "srd-druida", name: "Druida", source: "srd", hitDie: "d8",
      primaryAbility: "Sabedoria", saves: ["Inteligência", "Sabedoria"],
      armor: "Leve, média, escudos (não usa metal, por tradição)", weapons: "Clavas, adagas, dardos, azagaias, maças, bordões, cimitarras, foices, fundas, lanças",
      tools: "Kit de herbalismo", skillChoices: 2, skillList: ["Arcanismo", "Lidar com Animais", "Intuição", "Medicina", "Natureza", "Percepção", "Religião", "Sobrevivência"],
      startEquipment: "(a) escudo de madeira ou (b) qualquer arma simples; (a) cimitarra ou (b) qualquer arma simples corpo a corpo; armadura de couro, pacote de explorador e foco druídico.",
      subclassLevel: 2, subclassLabel: "Círculo Druídico",
      spellcasting: { type: "Preparada", ability: "Sabedoria", ritual: true, focus: "foco druídico", note: "Conjurador pleno; prepara magias da lista de druida diariamente." },
      features: [
        { level: 1, name: "Druídico", text: "Você conhece o idioma secreto Druídico." },
        { level: 1, name: "Conjuração", text: "Conjurador pleno de Sabedoria; prepara magias da lista de druida (nº = mod. Sab + nível)." },
        { level: 2, name: "Forma Selvagem", text: "Ação: assume a forma de uma besta já vista (ND ≤ 1/4, sem voo/nado inicialmente). 2 usos por descanso curto/longo. Melhora no 4º e 8º." },
        { level: 2, name: "Círculo Druídico", text: "Escolha uma subclasse (Círculo da Terra no SRD; Circle of the Yokai em Reinos Yokai)." },
        ASI,
        { level: 18, name: "Corpo Atemporal / Feitiços Bestiais", text: "Envelhece mais devagar; pode conjurar em Forma Selvagem." },
        { level: 20, name: "Arquidruida", text: "Usos ilimitados de Forma Selvagem." }
      ]
    },
    {
      id: "srd-guerreiro", name: "Guerreiro", source: "srd", hitDie: "d10",
      primaryAbility: "Força ou Destreza", saves: ["Força", "Constituição"],
      armor: "Todas + escudos", weapons: "Simples e marciais",
      tools: "Nenhuma", skillChoices: 2, skillList: ["Acrobacia", "Lidar com Animais", "Atletismo", "História", "Intuição", "Intimidação", "Percepção", "Sobrevivência"],
      startEquipment: "(a) cota de malha ou (b) couro batido, arco longo e 20 flechas; (a) arma marcial e escudo ou (b) duas armas marciais; (a) besta leve e 20 virotes ou (b) 2 machadinhas; pacote de masmorra ou de explorador.",
      subclassLevel: 3, subclassLabel: "Arquétipo Marcial",
      spellcasting: null,
      features: [
        { level: 1, name: "Estilo de Luta", text: "Escolha um estilo: Arquearia, Defesa, Duelismo, Combate com Armas Grandes, Proteção ou Combate com Duas Armas." },
        { level: 1, name: "Retomar o Fôlego", text: "Ação bônus: recupera 1d10 + nível de guerreiro PV. 1×/descanso curto ou longo." },
        { level: 2, name: "Surto de Ação", text: "Ganha uma ação extra no turno. 1 uso (2 no 17º), recupera em descanso curto ou longo." },
        { level: 3, name: "Arquétipo Marcial", text: "Escolha uma subclasse (Campeão no SRD; Skeletal Blade em Reinos Yokai)." },
        { level: 4, name: "Aumento no Valor de Habilidade", text: "Guerreiros também recebem ASI nos níveis 6 e 14 (além de 4/8/12/16/19)." },
        { level: 5, name: "Ataque Extra", text: "Ataca duas vezes (três no 11º, quatro no 20º)." },
        { level: 9, name: "Indomável", text: "Repete um TR falho. 1 uso (2 no 13º, 3 no 17º), recupera em descanso longo." }
      ]
    },
    {
      id: "srd-monge", name: "Monge", source: "srd", hitDie: "d8",
      primaryAbility: "Destreza e Sabedoria", saves: ["Força", "Destreza"],
      armor: "Nenhuma", weapons: "Simples e espadas curtas",
      tools: "Um tipo de ferramenta de artesão ou instrumento musical", skillChoices: 2,
      skillList: ["Acrobacia", "Atletismo", "História", "Intuição", "Religião", "Furtividade"],
      startEquipment: "(a) espada curta ou (b) qualquer arma simples; (a) pacote de masmorra ou (b) de explorador; 10 dardos.",
      subclassLevel: 3, subclassLabel: "Tradição Monástica",
      spellcasting: null,
      features: [
        { level: 1, name: "Defesa sem Armadura", text: "Sem armadura/escudo: CA = 10 + mod. Destreza + mod. Sabedoria." },
        { level: 1, name: "Artes Marciais", text: "Com ataques desarmados e armas de monge: usa Destreza; dano 1d4 (sobe a 1d6/1d8/1d10); ataque desarmado bônus após a ação de Ataque." },
        { level: 2, name: "Chi (Ki)", text: "Pontos de chi = nível de monge; recupera em descanso curto ou longo. Rajada de Golpes, Defesa Paciente, Passo do Vento." },
        { level: 2, name: "Movimento sem Armadura", text: "Deslocamento +3 m sem armadura (aumenta com o nível)." },
        { level: 3, name: "Tradição Monástica", text: "Escolha uma subclasse (Caminho da Mão Aberta no SRD; Way of the Eight Gates em Reinos Yokai)." },
        { level: 3, name: "Defletir Projéteis", text: "Reação: reduz dano de ataque à distância em 1d10 + Des + nível de monge; se zerar, pode arremessar de volta gastando 1 chi." },
        ASI,
        { level: 4, name: "Queda Lenta", text: "Reação: reduz dano de queda em 5 × nível de monge." },
        { level: 5, name: "Ataque Extra", text: "Ataca duas vezes." },
        { level: 5, name: "Golpe Atordoante", text: "Gasta 1 chi ao acertar corpo a corpo: TR Constituição ou alvo atordoado até o fim do seu próximo turno." },
        { level: 6, name: "Golpes com Chi", text: "Ataques desarmados contam como mágicos." },
        { level: 7, name: "Evasão / Serenidade", text: "TR Destreza para meia área: nenhum dano em sucesso, metade em falha. Pode gastar chi para sair de enfeitiçado/amedrontado." },
        { level: 10, name: "Pureza de Corpo", text: "Imune a doença e veneno." },
        { level: 14, name: "Alma de Diamante", text: "Proficiência em todos os TR; pode gastar 1 chi para refazer um TR falho." },
        { level: 18, name: "Corpo Vazio", text: "Gasta chi para ficar invisível e resistente a tudo (exceto força), ou 8 chi para conjurar projeção astral." },
        { level: 20, name: "Ser Perfeito", text: "Recupera 4 pontos de chi ao rolar iniciativa sem nenhum." }
      ]
    },
    {
      id: "srd-paladino", name: "Paladino", source: "srd", hitDie: "d10",
      primaryAbility: "Força e Carisma", saves: ["Sabedoria", "Carisma"],
      armor: "Todas + escudos", weapons: "Simples e marciais",
      tools: "Nenhuma", skillChoices: 2, skillList: ["Atletismo", "Intuição", "Intimidação", "Medicina", "Persuasão", "Religião"],
      startEquipment: "(a) arma marcial e escudo ou (b) duas armas marciais; (a) 5 azagaias ou (b) qualquer arma simples corpo a corpo; (a) pacote de sacerdote ou (b) de explorador; cota de malha e símbolo sagrado.",
      subclassLevel: 3, subclassLabel: "Juramento Sagrado",
      spellcasting: { type: "Preparada (meio-conjurador)", ability: "Carisma", ritual: false, focus: "símbolo sagrado", note: "Conjuração a partir do 2º nível; prepara magias da lista de paladino." },
      features: [
        { level: 1, name: "Sentido Divino", text: "Ação: detecta celestiais, corruptores e mortos-vivos a 18 m. Usos = 1 + mod. Carisma por descanso longo." },
        { level: 1, name: "Cura pelas Mãos", text: "Reserva de cura = 5 × nível de paladino; distribui PV por toque; 5 pontos curam doença/veneno." },
        { level: 2, name: "Estilo de Luta", text: "Escolha um estilo (Defesa, Duelismo, Combate com Armas Grandes, Proteção)." },
        { level: 2, name: "Conjuração", text: "Meio-conjurador de Carisma; prepara magias da lista de paladino." },
        { level: 2, name: "Destruição Divina (Divine Smite)", text: "Ao acertar corpo a corpo, gasta espaço de magia: +2d8 dano radiante (+1d8 por nível de espaço acima do 1º; +1d8 extra contra corruptor/morto-vivo)." },
        { level: 3, name: "Saúde Divina", text: "Imune a doença." },
        { level: 3, name: "Juramento Sagrado", text: "Escolha uma subclasse (Juramento da Devoção no SRD; Oath of the Yojimbo em Reinos Yokai). Concede magias e Canalizar Divindade." },
        ASI,
        { level: 5, name: "Ataque Extra", text: "Ataca duas vezes." },
        { level: 6, name: "Aura de Proteção", text: "Você e aliados a 3 m somam seu mod. Carisma (mín. +1) a todos os TR (9 m no 18º)." },
        { level: 10, name: "Aura de Coragem", text: "Você e aliados a 3 m não podem ficar amedrontados." },
        { level: 11, name: "Castigo Divino Aprimorado", text: "Todo ataque corpo a corpo causa +1d8 radiante." },
        { level: 14, name: "Toque Purificador", text: "Ação: encerra uma magia sobre si ou aliado tocado. Usos = mod. Carisma por descanso longo." }
      ]
    },
    {
      id: "srd-patrulheiro", name: "Patrulheiro (Ranger)", source: "srd", hitDie: "d10",
      primaryAbility: "Destreza e Sabedoria", saves: ["Força", "Destreza"],
      armor: "Leve, média, escudos", weapons: "Simples e marciais",
      tools: "Nenhuma", skillChoices: 3, skillList: ["Lidar com Animais", "Atletismo", "Intuição", "Investigação", "Natureza", "Percepção", "Furtividade", "Sobrevivência"],
      startEquipment: "(a) cota de escamas ou (b) couro batido; (a) duas espadas curtas ou (b) duas armas simples corpo a corpo; (a) pacote de masmorra ou (b) de explorador; arco longo e 20 flechas.",
      subclassLevel: 3, subclassLabel: "Arquétipo de Patrulheiro",
      spellcasting: { type: "Conhecida (meio-conjurador)", ability: "Sabedoria", ritual: false, focus: "—", note: "Conjuração a partir do 2º nível; magias conhecidas da lista de patrulheiro." },
      features: [
        { level: 1, name: "Inimigo Favorito", text: "Escolha um tipo de inimigo: vantagem em Sobrevivência para rastreá-lo e em Inteligência para lembrar dele; aprende um idioma relacionado." },
        { level: 1, name: "Explorador Natural", text: "Escolha um tipo de terreno favorito: benefícios de deslocamento, rastreamento e forrageio nesse terreno." },
        { level: 2, name: "Estilo de Luta", text: "Arquearia, Defesa, Duelismo ou Combate com Duas Armas." },
        { level: 2, name: "Conjuração", text: "Meio-conjurador de Sabedoria; magias conhecidas da lista de patrulheiro." },
        { level: 3, name: "Consciência Primeva", text: "Gasta espaço de magia para sentir criaturas de certos tipos a até 1,6 km (6 km no ermo)." },
        { level: 3, name: "Arquétipo de Patrulheiro", text: "Escolha uma subclasse (Caçador no SRD; Ronin em Reinos Yokai)." },
        ASI,
        { level: 5, name: "Ataque Extra", text: "Ataca duas vezes." },
        { level: 8, name: "Passo da Terra", text: "Terreno difícil natural não mágico não o atrasa; vantagem contra plantas mágicas que impedem movimento." },
        { level: 10, name: "Esconder-se à Vista", text: "1 min de preparo: +10 em testes de Furtividade para se esconder enquanto imóvel contra a natureza." },
        { level: 14, name: "Desaparecer", text: "Ação Esconder-se como bônus; não pode ser rastreado por meios não mágicos." },
        { level: 18, name: "Sentidos Selvagens", text: "Sabe a localização de criaturas invisíveis a 9 m." },
        { level: 20, name: "Matador de Inimigos Favoritos", text: "1×/turno adiciona mod. Sabedoria ao ataque/dano contra inimigo favorito." }
      ]
    },
    {
      id: "srd-ladino", name: "Ladino (Rogue)", source: "srd", hitDie: "d8",
      primaryAbility: "Destreza", saves: ["Destreza", "Inteligência"],
      armor: "Leve", weapons: "Simples, bestas de mão, espadas curtas/longas, rapieiras",
      tools: "Ferramentas de ladrão", skillChoices: 4,
      skillList: ["Acrobacia", "Atletismo", "Enganação", "Intuição", "Intimidação", "Investigação", "Percepção", "Atuação", "Persuasão", "Prestidigitação (Sleight of Hand)", "Furtividade"],
      startEquipment: "(a) rapieira ou (b) espada curta; (a) arco curto e 20 flechas ou (b) espada curta; (a) pacote de assaltante, (b) de masmorra ou (c) de explorador; armadura de couro, duas adagas e ferramentas de ladrão.",
      subclassLevel: 3, subclassLabel: "Arquétipo Ladino",
      spellcasting: null,
      features: [
        { level: 1, name: "Perícia (Expertise)", text: "Duas proficiências (ou ferramentas de ladrão): dobra o bônus de proficiência. Mais duas no 6º." },
        { level: 1, name: "Ataque Furtivo", text: "1×/turno, +1d6 dano quando tem vantagem OU um aliado adjacente ao alvo, com arma de acuidade/à distância. Sobe 1d6 a cada 2 níveis (10d6 no 19º)." },
        { level: 1, name: "Gíria de Ladrão", text: "Código secreto de sinais e jargão." },
        { level: 2, name: "Ação Ardilosa", text: "Ação bônus para Disparada, Desengajar ou Esconder-se." },
        { level: 3, name: "Arquétipo Ladino", text: "Escolha uma subclasse (Trapaceiro no SRD; Tamaya em Reinos Yokai)." },
        ASI,
        { level: 5, name: "Esquiva Sobrenatural", text: "Reação: reduz à metade o dano de um ataque de atacante visível." },
        { level: 7, name: "Evasão", text: "TR Destreza para meia área: nenhum dano em sucesso, metade em falha." },
        { level: 11, name: "Talento Confiável", text: "Trata rolagens de 9 ou menos como 10 em testes de perícia proficiente." },
        { level: 14, name: "Sentido Cego", text: "Percebe criaturas invisíveis/escondidas a 3 m." },
        { level: 15, name: "Mente Escorregadia", text: "Proficiência em TR de Sabedoria." },
        { level: 18, name: "Elusivo", text: "Nenhum ataque tem vantagem contra você enquanto não estiver incapacitado." },
        { level: 20, name: "Golpe de Sorte", text: "Transforma um erro em acerto ou um teste falho em 20 natural. 1×/descanso curto ou longo." }
      ]
    },
    {
      id: "srd-feiticeiro", name: "Feiticeiro (Sorcerer)", source: "srd", hitDie: "d6",
      primaryAbility: "Carisma", saves: ["Constituição", "Carisma"],
      armor: "Nenhuma", weapons: "Adagas, dardos, fundas, bordões, bestas leves",
      tools: "Nenhuma", skillChoices: 2, skillList: ["Arcanismo", "Enganação", "Intuição", "Intimidação", "Persuasão", "Religião"],
      startEquipment: "(a) besta leve e 20 virotes ou (b) qualquer arma simples; (a) bolsa de componentes ou (b) foco arcano; (a) pacote de masmorra ou (b) de explorador; duas adagas.",
      subclassLevel: 1, subclassLabel: "Origem de Feitiçaria",
      spellcasting: { type: "Conhecida", ability: "Carisma", ritual: false, focus: "foco arcano", note: "Conjurador pleno; poucas magias conhecidas, mas Metamagia." },
      features: [
        { level: 1, name: "Conjuração", text: "Conjurador pleno de Carisma; magias conhecidas da lista de feiticeiro." },
        { level: 1, name: "Origem de Feitiçaria", text: "Escolha uma subclasse (Linhagem Dracônica no SRD; Spirit Caller em Reinos Yokai)." },
        { level: 2, name: "Fonte de Magia", text: "Pontos de feitiçaria = nível de feiticeiro; recupera em descanso longo." },
        { level: 3, name: "Metamagia", text: "Duas opções (ex.: Magia Sutil, Magia Gêmea, Magia Acelerada). Mais no 10º e 17º." },
        ASI,
        { level: 20, name: "Restauração de Feitiçaria", text: "Recupera 4 pontos de feitiçaria em descanso curto." }
      ]
    },
    {
      id: "srd-bruxo", name: "Bruxo (Warlock)", source: "srd", hitDie: "d8",
      primaryAbility: "Carisma", saves: ["Sabedoria", "Carisma"],
      armor: "Leve", weapons: "Simples",
      tools: "Nenhuma", skillChoices: 2, skillList: ["Arcanismo", "Enganação", "História", "Intimidação", "Investigação", "Natureza", "Religião"],
      startEquipment: "(a) besta leve e 20 virotes ou (b) qualquer arma simples; (a) bolsa de componentes ou (b) foco arcano; (a) pacote de erudito ou (b) de masmorra; armadura de couro, qualquer arma simples e duas adagas.",
      subclassLevel: 1, subclassLabel: "Patrono Transcendental",
      spellcasting: { type: "Magia de Pacto", ability: "Carisma", ritual: true, focus: "foco arcano", note: "Poucos espaços, mas sempre do nível máximo; recuperam em descanso curto. Talhes Místicos." },
      features: [
        { level: 1, name: "Patrono Transcendental", text: "Escolha uma subclasse (O Corruptor no SRD; The Shinigami em Reinos Yokai). Concede magias expandidas e características." },
        { level: 1, name: "Magia de Pacto", text: "Espaços de magia de nível único (sobe até 5º); todos do mesmo nível; recuperam em descanso curto ou longo." },
        { level: 2, name: "Talhes Místicos (Eldritch Invocations)", text: "Duas invocações; mais conforme sobe de nível; pode trocar ao subir." },
        { level: 3, name: "Dádiva de Pacto", text: "Pacto da Lâmina, do Tomo ou da Corrente." },
        ASI,
        { level: 11, name: "Arcano Místico (6º)", text: "Uma magia de 6º nível conjurável 1×/descanso longo (7º no 13º, 8º no 15º, 9º no 17º)." },
        { level: 20, name: "Mestre Místico", text: "Recupera todos os espaços de Magia de Pacto ao gastar 1 min. 1×/descanso longo." }
      ]
    },
    {
      id: "srd-mago", name: "Mago (Wizard)", source: "srd", hitDie: "d6",
      primaryAbility: "Inteligência", saves: ["Inteligência", "Sabedoria"],
      armor: "Nenhuma", weapons: "Adagas, dardos, fundas, bordões, bestas leves",
      tools: "Nenhuma", skillChoices: 2, skillList: ["Arcanismo", "História", "Intuição", "Investigação", "Medicina", "Religião"],
      startEquipment: "(a) bordão ou (b) adaga; (a) bolsa de componentes ou (b) foco arcano; (a) pacote de erudito ou (b) de explorador; um grimório.",
      subclassLevel: 2, subclassLabel: "Tradição Arcana",
      spellcasting: { type: "Preparada (grimório)", ability: "Inteligência", ritual: true, focus: "foco arcano", note: "Conjurador pleno; grimório com magias; prepara diariamente; Recuperação Arcana." },
      features: [
        { level: 1, name: "Conjuração", text: "Conjurador pleno de Inteligência; grimório inicial com 6 magias de 1º nível; prepara (mod. Int + nível)." },
        { level: 1, name: "Recuperação Arcana", text: "Em descanso curto, recupera espaços de magia com soma de níveis ≤ metade do nível de mago (arred. cima). 1×/dia." },
        { level: 2, name: "Tradição Arcana", text: "Escolha uma escola de magia como subclasse (ex.: Evocação no SRD; School of Shinobi em Reinos Yokai)." },
        ASI,
        { level: 18, name: "Domínio de Magia", text: "Escolha 1 magia de 1º e 1 de 2º do grimório: conjura-as no nível mais baixo sem gastar espaço." },
        { level: 20, name: "Magias Assinatura", text: "Duas magias de 3º nível sempre preparadas; conjura cada uma 1×/descanso curto sem espaço." }
      ]
    }
  ]);
})();
