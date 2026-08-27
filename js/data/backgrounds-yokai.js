/* ============================================================
   ANTECEDENTES — Ryoko's Guide to the Yokai Realms (Cap. 10)
   Regras de construção: você pode abrir mão do aumento de
   característica da raça e usar os do antecedente (aumente um
   em 2 e outro em 1, ou os três em 1; máx. 20). Idioma e
   Característica Opcional só se usar as regras de 5ª edição.
   ============================================================ */
(function () {
  "use strict";
  window.DND.register("backgrounds", [
    {
      id: "yr-elementalist", name: "Elementalist (Elementalista)", source: "homebrew", page: 210,
      flavor: "Do solo sob seus pés às nuvens no céu, cada aspecto do mundo natural guarda magia — e você também. Elementalistas realçam trabalhos comuns com toques sobrenaturais.",
      abilityScores: "Força, Constituição, Sabedoria",
      language: "Primordial",
      feat: "Elemental Fighting (p. 217) ou Elemental Initiate (p. 218)",
      skills: "Acrobacia e Natureza",
      tools: "Um tipo de ferramentas de artesão à escolha",
      equipment: "Escolha A ou B: (A) ferramentas de artesão (as mesmas), mochila, roupas de viajante, kit de curandeiro, 15 po; ou (B) 50 po.",
      optionalFeature: {
        name: "Primordial Sense", text: "Como ação, você se sintoniza ao ambiente e prevê com precisão o clima do seu local pelas próximas 24 horas. Depois de prever, você pode fazer um ritual de 10 min para influenciá-lo: há 50% de chance de o clima mudar nas próximas 24 h para uma condição que você especifique entre nevoeiro, encoberto, chuva, neve, sol ou vento. Você não pode conjurar clima que cause dano a plantas e animais, nem influenciar clima de origem não natural. Uma vez por dia (até o próximo amanhecer)."
      }
    },
    {
      id: "yr-hanabi-engineer", name: "Hanabi Engineer (Engenheiro Hanabi)", source: "homebrew", page: 211,
      flavor: "Por trás de todo grande aventureiro há um engenheiro maior — fonte de próteses incríveis, armaduras reluzentes e itens mágicos mortais. Como associado do College of Hanabi, escola de pirotécnicos, alquimistas e inventores.",
      abilityScores: "Destreza, Constituição, Inteligência",
      language: "Linguagem de sinais comum",
      feat: "Prosthesis Adept (p. 219) ou Prosthesis Fighting (p. 220)",
      skills: "Investigação e Prestidigitação (Sleight of Hand)",
      tools: "Um tipo de ferramentas de artesão à escolha",
      equipment: "Escolha A ou B: (A) ferramentas de artesão (as mesmas), 2 bolsas, roupas de viajante, uma prótese básica com arma integrada à sua escolha*, 5 po; ou (B) 50 po.",
      optionalFeature: {
        name: "Hanabi Apprentice", text: "Como associado do College of Hanabi, você tem acesso a uma grande rede de funileiros, mercadores e fabricantes. Você conhece o jargão técnico para se integrar a outros inventores e pode contar com o apoio do colégio para informações e hospedagem em comunidades onde ele tem presença. Ex-alunos podem conseguir componentes e itens mágicos \"de primeira\" indisponíveis a quem está de fora, ou pôr você em contato com mercadores e tribos afluentes interessados em suas mercadorias."
      }
    },
    {
      id: "yr-kaiju-tracker", name: "Kaiju Tracker (Rastreador de Kaiju)", source: "homebrew", page: 211,
      flavor: "Por uma paisagem retorcida e desenraizada, você segue as pisadas dos poderosos kaiju. Viajante audaz que rastreia criaturas Imensas pelos reinos, do topo gelado das montanhas ao pântano tóxico.",
      abilityScores: "Destreza, Constituição, Sabedoria",
      language: "Um de: Dracônico, Gigante ou Primordial",
      feat: "Kaiju Hunter (p. 218)",
      skills: "Atletismo e Sobrevivência",
      tools: "Kit de herbalismo",
      equipment: "Escolha A ou B: (A) kit de herbalismo, mochila, roupas de viajante, uma armadilha de caça, uma prótese de gancho de escalada*, 15 m de corda de cânhamo, 5 po; ou (B) 50 po.",
      optionalFeature: {
        name: "Trail of Destruction", text: "Terreno difícil não mágico não impede seu movimento."
      }
    },
    {
      id: "yr-raised-by-yokai", name: "Raised by Yokai (Criado por Yokai)", source: "homebrew", page: 213,
      flavor: "Você não foi criado entre seus semelhantes. A sua foi uma infância de magia, aventura e isolamento — pois você foi criado por um espírito yokai. Você deve a vida à proteção e orientação deles.",
      abilityScores: "Destreza, Constituição, Sabedoria",
      language: "Um de: Abissal, Infernal ou Silvestre",
      feat: "Spirit Bonded (p. 220)",
      skills: "Lidar com Animais e Percepção",
      tools: "Kit de envenenador",
      equipment: "Escolha A ou B: (A) uma adaga, um kit de envenenador, 2 bolsas, roupas de viajante, uma lâmpada, um frasco de veneno básico, uma gema rara valendo 10 po; ou (B) 50 po.",
      optionalFeature: {
        name: "Natural Envoy", text: "Você cresceu cercado por yokai e entende seus modos e peculiaridades melhor que a maioria. Você tem vantagem em testes de habilidade para interagir pacificamente com Bestas e Yokai."
      }
    }
  ]);
})();
