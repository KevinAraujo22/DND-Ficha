/* ============================================================
   RAÇAS — D&D 5e básico (SRD 5.1). Rótulos traduzidos.
   O SRD inclui apenas uma subraça de exemplo por raça.
   ============================================================ */
(function () {
  "use strict";
  window.DND.register("races", [
    {
      id: "srd-anao", name: "Anão (colina)", source: "srd",
      flavor: "Reinos audaciosos e resistentes de montanhas e cavernas, ecoando com o som de picaretas e martelos.",
      asi: "Constituição +2; Sabedoria +1 (anão da colina).",
      age: "Maturidade aos ~50; vivem até ~350 anos.", size: "Médio.", speed: "7,5 m (25 pés); não reduzida por armadura pesada.",
      creatureType: "Humanoide.",
      traits: [
        { name: "Visão no Escuro", text: "18 m (60 pés)." },
        { name: "Resiliência Anã", text: "Vantagem em TR contra veneno e resistência a dano de veneno." },
        { name: "Treino de Combate Anão", text: "Proficiência com machado de batalha, machadinha, martelo leve e martelo de guerra." },
        { name: "Proficiência com Ferramentas", text: "Ferramentas de ferreiro, de cervejeiro ou de pedreiro (uma à escolha)." },
        { name: "Especialização em Pedra", text: "Ao fazer teste de Inteligência (História) sobre obra em pedra, adicione o dobro do bônus de proficiência." },
        { name: "Robustez Anã (colina)", text: "PV máximo +1, e +1 por nível." },
        { name: "Idiomas", text: "Comum e Anão." }
      ]
    },
    {
      id: "srd-elfo", name: "Elfo (alto)", source: "srd",
      flavor: "Povo mágico de graça sobrenatural, vivendo no mundo mas não totalmente parte dele.",
      asi: "Destreza +2; Inteligência +1 (alto elfo).",
      age: "Maioridade aos 100; vivem até ~750 anos.", size: "Médio.", speed: "9 m (30 pés).",
      creatureType: "Humanoide.",
      traits: [
        { name: "Visão no Escuro", text: "18 m (60 pés)." },
        { name: "Sentidos Aguçados", text: "Proficiência em Percepção." },
        { name: "Ancestralidade Feérica", text: "Vantagem em TR contra ser enfeitiçado; magia não pode fazê-lo dormir." },
        { name: "Transe", text: "Não dorme; medita profundamente por 4 horas para o benefício de um descanso longo." },
        { name: "Treino com Armas Élficas (alto)", text: "Proficiência com espada longa, espada curta, arco curto e arco longo." },
        { name: "Truque (alto)", text: "Você conhece um truque à sua escolha da lista de mago; Inteligência é a habilidade de conjuração." },
        { name: "Idioma Extra (alto)", text: "Comum, Élfico e mais um idioma à escolha." }
      ]
    },
    {
      id: "srd-halfling", name: "Halfling (pés-leves)", source: "srd",
      flavor: "Povo prático e acolhedor, que valoriza lar, comunidade e um bom jantar.",
      asi: "Destreza +2; Carisma +1 (pés-leves).",
      age: "Maioridade aos 20; vivem até ~150 anos.", size: "Pequeno.", speed: "7,5 m (25 pés).",
      creatureType: "Humanoide.",
      traits: [
        { name: "Sortudo", text: "Ao rolar 1 num d20 de ataque, teste de habilidade ou TR, role de novo e use o novo resultado." },
        { name: "Bravura", text: "Vantagem em TR contra ficar amedrontado." },
        { name: "Agilidade Halfling", text: "Você pode mover-se pelo espaço de qualquer criatura de tamanho maior que o seu." },
        { name: "Furtividade Natural (pés-leves)", text: "Você pode se esconder mesmo obscurecido apenas por uma criatura ao menos um tamanho maior." },
        { name: "Idiomas", text: "Comum e Halfling." }
      ]
    },
    {
      id: "srd-humano", name: "Humano", source: "srd",
      flavor: "Os mais adaptáveis e ambiciosos entre os povos comuns.",
      asi: "+1 em todas as seis características.",
      age: "Maioridade no fim da adolescência; vivem menos de um século.", size: "Médio.", speed: "9 m (30 pés).",
      creatureType: "Humanoide.",
      traits: [
        { name: "Idiomas", text: "Comum e mais um idioma à escolha." },
        { name: "Variante (opcional)", text: "Em vez do +1 em tudo: +1 em duas características à escolha, uma perícia à escolha e um talento à escolha." }
      ]
    },
    {
      id: "srd-draconato", name: "Draconato", source: "srd",
      flavor: "Nascidos para o combate, honram feitos acima de tudo e portam a herança dracônica no sangue.",
      asi: "Força +2; Carisma +1.",
      age: "Crescem rápido; adultos aos 15; vivem até ~80 anos.", size: "Médio.", speed: "9 m (30 pés).",
      creatureType: "Humanoide.",
      traits: [
        { name: "Ancestralidade Dracônica", text: "Escolha um tipo de dragão; define seu dano de sopro e resistência (ácido, frio, fogo, veneno ou elétrico)." },
        { name: "Arma de Sopro", text: "Como ação, exala energia numa área (cone de 4,5 m ou linha de 1,5×9 m). TR CD 8 + Con + proficiência; 2d6 (aumenta com o nível), metade se passar. Recupera em descanso curto ou longo." },
        { name: "Resistência a Dano", text: "Resistência ao tipo de dano associado à sua ancestralidade." },
        { name: "Idiomas", text: "Comum e Dracônico." }
      ]
    },
    {
      id: "srd-gnomo", name: "Gnomo (das rochas)", source: "srd",
      flavor: "Curiosos e energéticos, encaram cada dia como uma oportunidade de alegria.",
      asi: "Inteligência +2; Constituição +1 (das rochas).",
      age: "Maioridade aos 40; vivem 350–500 anos.", size: "Pequeno.", speed: "7,5 m (25 pés).",
      creatureType: "Humanoide.",
      traits: [
        { name: "Visão no Escuro", text: "18 m (60 pés)." },
        { name: "Astúcia Gnômica", text: "Vantagem em todos os TR de Inteligência, Sabedoria e Carisma contra magia." },
        { name: "Conhecimento de Artífice (das rochas)", text: "Some o dobro do bônus de proficiência a testes de Inteligência (História) sobre itens mágicos, alquímicos ou tecnológicos." },
        { name: "Engenhoqueiro (das rochas)", text: "Proficiência com ferramentas de funileiro; pode construir pequenos dispositivos mecânicos." },
        { name: "Idiomas", text: "Comum e Gnômico." }
      ]
    },
    {
      id: "srd-meio-elfo", name: "Meio-elfo", source: "srd",
      flavor: "Andarilhos entre dois mundos, sem pertencer plenamente a nenhum.",
      asi: "Carisma +2; e +1 em duas outras características à escolha.",
      age: "Amadurecem como humanos; vivem mais de 180 anos.", size: "Médio.", speed: "9 m (30 pés).",
      creatureType: "Humanoide.",
      traits: [
        { name: "Visão no Escuro", text: "18 m (60 pés)." },
        { name: "Ancestralidade Feérica", text: "Vantagem em TR contra enfeitiçado; magia não pode fazê-lo dormir." },
        { name: "Versatilidade em Perícias", text: "Proficiência em duas perícias à sua escolha." },
        { name: "Idiomas", text: "Comum, Élfico e mais um idioma à escolha." }
      ]
    },
    {
      id: "srd-meio-orc", name: "Meio-orc", source: "srd",
      flavor: "Força imponente e fúria selvagem, buscando provar seu valor num mundo que os teme.",
      asi: "Força +2; Constituição +1.",
      age: "Maioridade aos 14; raramente passam dos 75 anos.", size: "Médio.", speed: "9 m (30 pés).",
      creatureType: "Humanoide.",
      traits: [
        { name: "Visão no Escuro", text: "18 m (60 pés)." },
        { name: "Ameaçador", text: "Proficiência em Intimidação." },
        { name: "Resistência Implacável", text: "Ao cair a 0 PV sem ser morto, você fica com 1 PV. Uma vez por descanso longo." },
        { name: "Ataques Selvagens", text: "Em crítico com arma corpo a corpo, role um dado de dano da arma uma vez a mais." },
        { name: "Idiomas", text: "Comum e Orc." }
      ]
    },
    {
      id: "srd-tiefling", name: "Tiefling", source: "srd",
      flavor: "Marcados por um pacto infernal ancestral, carregam desconfiança alheia e um fogo interior.",
      asi: "Inteligência +1; Carisma +2.",
      age: "Amadurecem como humanos; vivem alguns anos a mais.", size: "Médio.", speed: "9 m (30 pés).",
      creatureType: "Humanoide.",
      traits: [
        { name: "Visão no Escuro", text: "18 m (60 pés)." },
        { name: "Resistência Infernal", text: "Resistência a dano de fogo." },
        { name: "Legado Infernal", text: "Conhece o truque taumaturgia. No 3º nível, conjura repreensão infernal 1×/dia; no 5º, escuridão 1×/dia. Carisma é a habilidade de conjuração." },
        { name: "Idiomas", text: "Comum e Infernal." }
      ]
    }
  ]);
})();
