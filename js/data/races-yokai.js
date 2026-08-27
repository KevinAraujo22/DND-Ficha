/* ============================================================
   RAÇAS — Ryoko's Guide to the Yokai Realms (Capítulo 8)
   Transcrito do texto fornecido pelo usuário em
   sources/racasextras.md. Rótulos traduzidos; efeitos fiéis
   ao original (termos-chave em inglês entre parênteses).
   ============================================================ */
(function () {
  "use strict";
  window.DND.register("races", [

    /* ---------------------------------------------------------- ENKOH */
    {
      id: "yr-enkoh", name: "Enkoh", source: "homebrew", page: 117,
      flavor: "Sob picos nevados, onde a neve soterra o caos de rochas e riachos, os formidáveis enkoh erguem cidades de gelo. Povo símio de pelagem densa, unem talento inato para a sobrevivência a uma inteligência penetrante, fazendo lar em ambientes inóspitos e mestres da escultura em gelo.",
      asi: "Sua Inteligência aumenta em 2 (mais o aumento da subraça).",
      age: "Um enkoh atinge a maturidade aos 15 anos e pode viver até 80 anos.",
      size: "Médio ou Pequeno (conforme a subraça).", speed: "9 m (30 pés) ou mais, conforme a subraça.",
      creatureType: "Humanoide.",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços, duas pernas e uma cauda." },
        { name: "Pelo Espesso (Thick Fur)", text: "Você tem resistência a dano de frio." },
        { name: "Craft (Ofício)", text: "Você ganha proficiência com um destes tipos de ferramentas de artesão: de carpinteiro, de vidreiro, de joalheiro, de pedreiro, de oleiro ou de ferreiro. Você tem vantagem em testes de habilidade feitos para usar essas ferramentas para moldar gelo." },
        { name: "Idiomas", text: "Você fala, lê e escreve Comum e mais um idioma que você e seu Mestre concordem ser apropriado." },
        { name: "Subraça", text: "Há duas variações principais entre os enkoh: hulking e springtail. Escolha uma." }
      ],
      subraces: [
        {
          name: "Enkoh Hulking",
          flavor: "Tão rústicos e inabaláveis quanto as montanhas geladas que chamam de lar, os hulking são conhecidos pela mente calculista feroz e pela força física explosiva. Raramente agem depressa — preferem avaliar e ponderar antes de escolher um caminho.",
          traits: [
            { name: "Aumento de Habilidade", text: "Sua Constituição aumenta em 1." },
            { name: "Tamanho", text: "Você é Médio. Hulking têm porte largo e altura muito variável, de cerca de 1,5 m a mais de 2,1 m." },
            { name: "Deslocamento", text: "Seu deslocamento de caminhada é 9 m (30 pés), e você tem deslocamento de escalada igual ao de caminhada." },
            { name: "Chest Beating (Bater no Peito)", text: "Como ação bônus, você bate os punhos no peito, provocando uma onda de adrenalina e coragem. Até o início do seu próximo turno, você tem resistência a dano de concussão, perfurante e cortante, e vantagem em testes de Intimidação. Usos = seu bônus de proficiência; recupera em descanso longo." },
            { name: "Natural Cooks (Cozinheiros Natos)", text: "Com ingredientes valendo ao menos 1 pp, você pode preparar uma refeição para um número de criaturas Médias ou menores igual a 2 + seu bônus de proficiência, ao longo de um descanso curto ou longo. Uma criatura que coma a refeição ao fim do descanso recupera um Dado de Vida gasto e ganha PV temporários iguais a 1d6 + seu bônus de proficiência." },
            { name: "Powerful Build (Constituição Poderosa)", text: "Você conta como uma categoria de tamanho maior para determinar sua capacidade de carga e o peso que pode empurrar, arrastar ou erguer." }
          ]
        },
        {
          name: "Enkoh Springtail",
          flavor: "Vibrantes, dinâmicos e ágeis, os springtail são os mais sociáveis de sua raça. Raramente ficam parados: andam, falam e confiam depressa, e são mestres em domesticar bestas de terra e céu.",
          traits: [
            { name: "Aumento de Habilidade", text: "Sua Destreza aumenta em 1." },
            { name: "Tamanho", text: "Você é Pequeno. Springtail são ágeis, leves e baixos — de cerca de 60 cm a 1,2 m." },
            { name: "Deslocamento", text: "Seu deslocamento de caminhada é 10,5 m (35 pés), e você tem deslocamento de escalada igual ao de caminhada. Além disso, escalar sobre uma criatura maior que você não conta como terreno difícil." },
            { name: "Beast Wardens (Guardiões das Bestas)", text: "Você tem vantagem em testes de habilidade para domar ou influenciar Bestas." },
            { name: "Skillful (Habilidoso)", text: "Você ganha proficiência em duas destas perícias à sua escolha: Acrobacia, Lidar com Animais, Natureza, Atuação ou Sobrevivência." },
            { name: "Springing Leap (Salto Impulsionado)", text: "Sua cauda dá um impulso incrível aos seus saltos. Você pode somar seu valor de Destreza à distância máxima de um salto em distância, e seu modificador de Destreza à altura máxima de um salto em altura. Além disso, você pode saltar sua distância máxima com ou sem impulso. Como de costume, cada 30 cm saltados custa 30 cm de deslocamento." },
            { name: "Sturdy Tail (Cauda Firme)", text: "Ao fazer um teste de habilidade ou de resistência para evitar ser movido à força, você pode usar sua reação para enrolar a cauda em um objeto a até 1,5 m que esteja fixo ao chão ou a outra superfície firme. Se o fizer, você tem vantagem nesse teste." }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------- FUYOREN */
    {
      id: "yr-fuyoren", name: "Fuyoren", source: "homebrew", page: 120,
      flavor: "Nascidos e criados em rios de fluxo suave e lagoas tranquilas, os fuyoren são plantas móveis e sencientes, inatamente em harmonia com o mundo natural. Uma sociedade fuyoren pode ocupar o mesmo trecho de terra por milênios sem que um forasteiro perceba — sem uma árvore arrancada nem uma pedra virada.",
      asi: "Sua Destreza aumenta em 2 e sua Sabedoria aumenta em 1.",
      age: "Fuyoren jovens são criados sobre a água até a adolescência, quando aprendem a andar eretos. Chegam à vida adulta por volta dos 18 anos e podem viver até 150.",
      size: "Médio (adultos chegam a 1,8 m).", speed: "10,5 m (35 pés).", creatureType: "Planta (Plant).",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços e duas pernas." },
        { name: "Fluid Motion (Movimento Fluido)", text: "Você tem vantagem em testes de resistência para evitar ou terminar as condições imobilizado, paralisado ou petrificado em si mesmo." },
        { name: "Graceful Step (Passo Gracioso)", text: "Você pode se mover sobre qualquer superfície líquida — água, lama, neve ou areia movediça — como se fosse chão sólido. Você não é protegido dos efeitos danosos do contato com superfícies perigosas, como lava ou ácido. Você não afunda se terminar seu movimento sobre a superfície." },
        { name: "Water Magic (Magia da Água)", text: "Por um ritual de 10 minutos, você pode imbuir um frasco de água comum com propriedades mágicas. Escolha um efeito:\n• A água ganha as propriedades de água benta.\n• A água vira um antídoto simples que termina a condição envenenado quando bebida por uma criatura.\n• A água é imbuída de vitalidade: beber o frasco hidrata uma criatura Grande ou menor por 24 horas.\n• A água borbulha com magia de cura: uma criatura que ingira o frasco recupera 1d4 pontos de vida.\nA água permanece potente por 24 horas. Usos = seu bônus de proficiência; recupera em descanso longo." },
        { name: "Nature Warden (Guardião da Natureza)", text: "Você ganha proficiência em uma destas perícias à sua escolha: Acrobacia, Lidar com Animais, Natureza, Sobrevivência ou Atuação." },
        { name: "Idiomas", text: "Você fala, lê e escreve Comum e mais um idioma apropriado (acordado com o Mestre)." }
      ]
    },

    /* ---------------------------------------------------------- HANAMORI */
    {
      id: "yr-hanamori", name: "Hanamori", source: "homebrew", page: 122,
      flavor: "De rostos magros, pele de carvão e pétalas carmesins ásperas, os hanamori são plantas sencientes tidas por muitos como arautos da morte. Seus corpos reverberam com o espírito fugaz de criaturas que morrem em sua presença, assumindo traços do falecido por um breve tempo.",
      asi: "Sua Carisma aumenta em 2 e sua Sabedoria aumenta em 1.",
      age: "Amadurecem no mesmo ritmo que humanos e vivem até cerca de 60 anos.",
      size: "Médio ou Pequeno (você escolhe ao selecionar a raça). Variam de 90 cm a 2,1 m.",
      speed: "9 m (30 pés).", creatureType: "Planta (Plant).",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços e duas pernas." },
        { name: "Essence Capture (Captura de Essência)", text: "Como reação, quando uma criatura com ND igual ou menor que seu nível morre a até 3 m (10 pés) de você, você captura um fragmento de sua essência e ganha um dos efeitos a seguir, à sua escolha:", list: [
          "Você substitui sua Força, Destreza, Inteligência, Sabedoria ou Carisma pela mesma característica da criatura que morreu.",
          "Você ganha um sentido especial à sua escolha (exceto visão verdadeira) que a criatura possuía, no mesmo alcance.",
          "Você ganha resistência a um tipo de dano à sua escolha ao qual a criatura tinha resistência ou imunidade.",
          "Você ganha imunidade a uma condição à sua escolha (exceto exaustão) à qual a criatura tinha imunidade.",
          "O efeito dura até você terminar um descanso longo. Depois de usar, você não pode fazê-lo de novo até terminar um descanso longo."
        ] },
        { name: "Fiery Countenance (Semblante Ardente)", text: "Você tem vantagem em testes de resistência para evitar ou terminar as condições amedrontado ou atordoado em si mesmo." },
        { name: "Gaze Of Death (Olhar da Morte)", text: "Você ganha proficiência em uma destas perícias à sua escolha: Intimidação, Medicina, Natureza ou Sobrevivência." },
        { name: "Rugged (Rústico)", text: "Quando você não está usando armadura, sua CA é 12 + seu modificador de Constituição. Você pode usar essa armadura natural se a armadura que estiver usando resultar em CA menor. Um escudo se aplica normalmente." },
        { name: "Idiomas", text: "Você fala, lê e escreve Comum e mais um idioma apropriado (acordado com o Mestre)." }
      ]
    },

    /* ---------------------------------------------------------- HANIWA */
    {
      id: "yr-haniwa", name: "Haniwa", source: "homebrew", page: 124,
      flavor: "Talhados em argila como guardiões sencientes para as tumbas de antigos governantes, os haniwa eram vasos criados para portar as almas de guerreiros leais. Adormecidos por milênios, começaram a despertar no último século, emergindo num mundo alheio.",
      asi: "Sua Constituição aumenta em 2 e sua Sabedoria aumenta em 1.",
      age: "Haniwa são criados já formados e não crescem nem envelhecem. O tempo de vida máximo é desconhecido e não podem ser envelhecidos magicamente.",
      size: "Médio ou Pequeno (você escolhe ao selecionar a raça). De 90 cm a 2,1 m.",
      speed: "9 m (30 pés).", creatureType: "Constructo (Construct).",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços e duas pernas." },
        { name: "Clay Companion (Companheiro de Argila)", text: "Ao longo de um descanso longo, você pode moldar um companheiro de argila quase-senciente. Ele pode ter a forma que quiser, mas usa o bloco de estatísticas de doninha gigante, falcão, mastim ou mula. Seu tipo é Constructo e ele também ganha sua característica Soul Shell. O companheiro entende você; use sua ação bônus para comandá-lo a realizar qualquer ação. Em combate, sem comandos, ele usa a ação Esquivar. Ele se desfaz em argila sem forma quando reduzido a 0 pontos de vida ou quando você usa esta característica de novo." },
        { name: "Grave Guardian (Guardião do Túmulo)", text: "Você pode conjurar as magias earthen uppercut* e santuário (sanctuary) com esta característica. Depois de conjurar uma delas assim, você não pode conjurá-la de novo com esta característica até terminar um descanso longo. Você também pode conjurá-las gastando espaços de magia de nível apropriado. Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração para essas magias (escolha ao selecionar a raça)." },
        { name: "Soul Shell (Carapaça da Alma)", text: "Sua alma possuiu um Constructo, concedendo:", list: [
          "Você não precisa comer, beber ou respirar.",
          "Você tem vantagem em testes de resistência contra doença e para evitar/terminar a condição envenenado em si mesmo.",
          "Você pode receber os benefícios de magias que restauram pontos de vida e que normalmente não afetam Constructos, como cure wounds e healing word."
        ] },
        { name: "Spirit Ward (Proteção Espiritual)", text: "Seus ataques com arma são considerados mágicos para o propósito de superar resistências e imunidades." },
        { name: "Tombkeeper (Zelador de Tumbas)", text: "Você ganha proficiência nas perícias Religião e Percepção." },
        { name: "Idiomas", text: "Você fala, lê e escreve Comum e mais um idioma apropriado (acordado com o Mestre)." }
      ]
    },

    /* ---------------------------------------------------------- ISETSU */
    {
      id: "yr-isetsu", name: "Isetsu", source: "homebrew", page: 129,
      flavor: "Ao longo de falésias fustigadas por vento uivante e chuva gélida, os isetsu montam guarda. Humanoides grandes e crustáceos, fizeram lar de frente para o oceano por milênios. São os senhores incontestes das falésias e dos leitos marinhos — encarregados, desde a aurora do mundo, de defender a terra contra o mar.",
      asi: "Sua Força aumenta em 2 e sua Constituição aumenta em 1.",
      age: "Isetsu crescem depressa, chegando à vida adulta em menos de uma década, e vivem até um século.",
      size: "Médio (em média ~2,1 m de altura).", speed: "9 m (30 pés).", creatureType: "Humanoide.",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços, duas pernas e quatro apêndices vestigiais." },
        { name: "Brittle Shell (Casca Quebradiça)", text: "Sua carapaça tem uma camada externa frágil, porém dura, que se regenera com o tempo. Ao terminar um descanso curto ou longo, você ganha +2 de CA se ainda não tiver esse bônus. Esse bônus termina depois que você é atingido por uma jogada de ataque." },
        { name: "Crustacean Physiology (Fisiologia Crustácea)", text: "Suas antenas ajudam na vigília e seu porte serve em provas de força. Você ganha proficiência nas perícias Atletismo e Percepção." },
        { name: "Claws (Garras)", text: "Você tem garras que pode usar em golpes desarmados: no acerto, causam 1d6 + seu modificador de Força de dano perfurante, em vez do dano de concussão normal. A partir do 5º nível, quando você acerta uma criatura com um golpe desarmado no seu turno, pode imediatamente usar uma ação bônus para tentar agarrá-la." },
        { name: "Darkvision (Visão no Escuro)", text: "Você enxerga na penumbra a até 18 m (60 pés) como se fosse luz plena, e na escuridão como se fosse penumbra. Não distingue cores na escuridão, apenas tons de cinza." },
        { name: "Fortune Favoured (Favorecido pela Fortuna)", text: "Se você erra uma jogada de ataque, ou falha num teste de habilidade ou de resistência, você pode rolar de novo essa jogada. Usos = metade do seu bônus de proficiência; recupera em descanso longo." },
        { name: "Natural Armour (Armadura Natural)", text: "Quando você não está usando armadura, sua CA base é 12 + seu modificador de Constituição. Você pode usar essa armadura natural se a armadura que usar resultar em CA menor. Um escudo se aplica normalmente." },
        { name: "Waterborne (Nascido nas Águas)", text: "Você respira no ar e na água. Além disso, estar submerso não impõe desvantagem às suas jogadas de ataque com arma." },
        { name: "Idiomas", text: "Você fala, lê e escreve Comum e mais um idioma apropriado (acordado com o Mestre)." }
      ]
    },

    /* ---------------------------------------------------------- KITSUNE */
    {
      id: "yr-kitsune", name: "Kitsune", source: "homebrew", page: 134,
      flavor: "Com passos cautelosos e o focinho de carvão erguido ao ar, um kitsune se esgueira por uma floresta ao crepúsculo, indistinguível de uma raposa comum. Seus poderes de transformação são lendários; mesmo em forma humanoide, mantêm cauda, orelhas e pés com garras.",
      asi: "Sua Carisma aumenta em 2 e sua Destreza aumenta em 1.",
      age: "Amadurecem como humanos, alcançando a vida adulta por volta dos 20. Podem viver até um milênio.",
      size: "Médio (adultos têm entre 1,5 m e 2,1 m).", speed: "10,5 m (35 pés).", creatureType: "Feérico (Fey).",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços, duas pernas e entre uma e nove caudas." },
        { name: "Ascendant Form (Forma Ascendente)", text: "Como ação, você pode irradiar luz branca e brilhante por 1 hora ou até terminar o efeito como ação bônus. Essa luz penetra a escuridão mágica, criando luz plena num raio de 3 m (10 pés) e penumbra por mais 3 m. Criaturas à sua escolha na luz podem somar 1d4 a testes de Intimidação, Percepção e Persuasão. Enquanto nessa forma, quando uma criatura a até 3 m de você erra uma jogada de ataque ou falha num teste de resistência, você pode usar sua reação para somar 1d4 ao resultado. Depois de usar, você não pode fazê-lo de novo até terminar um descanso longo." },
        { name: "Darkvision (Visão no Escuro)", text: "Você enxerga na penumbra a até 18 m (60 pés) como se fosse luz plena, e na escuridão como se fosse penumbra, distinguindo apenas tons de cinza na escuridão." },
        { name: "Fox's Wedding (Casamento da Raposa)", text: "Você conhece os truques druidcraft e produce flame. Ao alcançar o 3º nível, você pode conjurar a magia disguise self uma vez com esta característica como magia de 1º nível, recuperando o uso ao terminar um descanso longo. Você também pode conjurá-la gastando espaços de magia de nível apropriado. Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração para essas magias (escolha ao selecionar a raça)." },
        { name: "Kitsune Guile (Astúcia Kitsune)", text: "Você tem proficiência em uma destas perícias à sua escolha: Enganação, Persuasão ou Furtividade." },
        { name: "Language of Motion (Linguagem do Movimento)", text: "Você pode articular ideias por meio do movimento, além da fala. Gastando 1 minuto movendo caudas e orelhas, você comunica uma mensagem simples, que pode contradizer o que você diz em voz alta. Essa comunicação é indetectável para quem não fala Kitsune. Uma criatura a até 18 m que possa ver você e fale Kitsune entende a mensagem." },
        { name: "Shapeshifter (Metamorfo)", text: "Como ação, você se transforma na forma de uma raposa. Suas roupas e equipamento se fundem à sua forma e não lhe dão benefícios. Você determina a aparência (cor e tamanho — Minúsculo ou Pequeno). Suas demais estatísticas de jogo permanecem iguais. Você não pode conjurar magias com componentes materiais ou somáticos nessa forma, mas ainda pode se concentrar em magias e falar normalmente. Você permanece assim até usar uma ação para reverter à forma verdadeira ou morrer." },
        { name: "Idiomas", text: "Você fala, lê e escreve Comum, Kitsune e mais um idioma apropriado (acordado com o Mestre)." }
      ]
    },

    /* ---------------------------------------------------------- ONIBORNE */
    {
      id: "yr-oniborne", name: "Oniborne", source: "homebrew", page: 137,
      flavor: "Descendentes de yokai, os oniborne são vasos de um poder impetuoso e latente que se manifesta ao longo de gerações. Saturados de magia, comandam forças primais de forma instintiva — em momentos de emoção intensa, a conjuração espontânea é comum. Descendem dos oni e, por isso, sofrem sob antigos preconceitos.",
      asi: "Sua Constituição aumenta em 2 (mais o aumento da subraça).",
      age: "Atingem a maturidade por volta dos 21 anos e têm vidas longas, muitas vezes até 400 anos.",
      size: "Médio (entre 1,5 m e 2,1 m).", speed: "9 m (30 pés).", creatureType: "Humanoide.",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços e duas pernas." },
        { name: "Powerful Build (Constituição Poderosa)", text: "Você conta como uma categoria de tamanho maior para determinar sua capacidade de carga e o peso que pode empurrar, arrastar ou erguer." },
        { name: "Idiomas", text: "Você fala, lê e escreve Comum e mais um idioma apropriado (acordado com o Mestre)." },
        { name: "Subraça", text: "A diferença mais marcante entre os oniborne é a cor: vermelho, azul ou verde. Escolha uma subraça." }
      ],
      subraces: [
        {
          name: "Oniborne Vermelho (Red)",
          flavor: "Grandes contadores de histórias, os oniborne vermelhos são os mais sociáveis das três heranças. Na cúspide da vida adulta, realizam o Rito da Caça: partem para o ermo apenas com sua astúcia para abater um inimigo perigoso e forjar uma arma de seu corpo.",
          traits: [
            { name: "Aumento de Habilidade", text: "Sua Sabedoria aumenta em 1." },
            { name: "Daunting Stature (Porte Intimidador)", text: "Você tem proficiência na perícia Intimidação." },
            { name: "Magical Scavenger (Coletor Mágico)", text: "Ao longo de 1 minuto, ou como parte de um teste de Coleta (Harvesting), você extrai uma parte rígida da anatomia de um cadáver e a transforma numa arma mágica: qualquer arma corpo a corpo ou de Arremesso, que lhe dá +1 em ataque e dano com ela. O bônus sobe para +2 no 9º nível e +3 no 17º. A arma só é mágica para você; nas mãos de outros, funciona como arma normal. Ao criar uma nova, as anteriores deixam de ser mágicas. A partir do 3º nível, você pode conjurar cure wounds com esta característica; a partir do 5º, também enhance ability. Depois de conjurar uma delas, não pode conjurá-la de novo com esta característica até um descanso longo (também pode usar espaços de magia). Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração (escolha). Lágrimas se formam no canto dos seus olhos ao conjurar com esta característica." }
          ]
        },
        {
          name: "Oniborne Azul (Blue)",
          flavor: "A magia dos oniborne azuis é sutil e primal, um rio de energia que corre pelo corpo, transmitido pelo toque como um fluxo de cura ou uma onda esmagadora nas mandíbulas. Solitários por natureza, a maioria permanece com o clã a vida toda.",
          traits: [
            { name: "Aumento de Habilidade", text: "Sua Força aumenta em 1." },
            { name: "Compassionate Heart (Coração Compassivo)", text: "Você pode usar a ação Ajudar como ação bônus. Usos = seu bônus de proficiência; recupera em descanso longo. Além disso, ao usar a ação Ajudar, você pode gastar um Dado de Vida para fortalecer um aliado a até 1,5 m: ele ganha PV temporários iguais a uma rolagem desse dado + seu modificador de Constituição (mín. 1)." },
            { name: "Crunching Maw (Mandíbula Trituradora)", text: "Você tem dentes viciosos e mandíbula forte que pode usar em golpes desarmados: no acerto, causam 1d6 + seu modificador de Força de dano perfurante, em vez do dano de concussão normal." },
            { name: "Gift of Empathy (Dom da Empatia)", text: "Você tem proficiência nas perícias Intuição e Persuasão." },
            { name: "Savage Bite (Mordida Selvagem)", text: "Como reação ao sofrer dano de uma criatura a até 1,5 m, você aumenta magicamente a mandíbula e a morde: faça um golpe desarmado com Crunching Maw contra ela. Esse ataque é um acerto crítico com um resultado de 18–20 no d20. Usos = seu bônus de proficiência; recupera em descanso longo." }
          ]
        },
        {
          name: "Oniborne Verde (Green)",
          flavor: "Preferindo climas quentes e áridos, os oniborne verdes costumam ser um povo nômade, seguindo o calor de um verão eterno. Renomados oradores, falam em ritmo martelado — uma avalanche estacada de histórias e possibilidades — e sua conjuração é igualmente animada.",
          traits: [
            { name: "Aumento de Habilidade", text: "Sua Carisma aumenta em 1." },
            { name: "Captivating Quality (Qualidade Cativante)", text: "Você tem proficiência na perícia Atuação." },
            { name: "Fierce Magic (Magia Feroz)", text: "Você conhece o truque thaumaturgy. A partir do 3º nível, você pode conjurar hellish rebuke com esta característica; a partir do 5º, também enlarge/reduce. Depois de conjurar uma delas, não pode conjurá-la de novo com esta característica até um descanso longo (também pode usar espaços de magia). Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração (escolha). O espaço à sua volta fica quente e úmido ao conjurar com esta característica." },
            { name: "Ghastly Visage (Semblante Medonho)", text: "Depois de usar a ação de Ataque no seu turno, você pode usar uma ação bônus para tentar amedrontar magicamente uma criatura a até 1,5 m. Ela faz um TR de Sabedoria (CD = 8 + seu modificador de Constituição + seu bônus de proficiência) ou fica amedrontada de você por 1 minuto. Se o alvo terminar o turno a mais de 9 m de você, pode repetir o TR, terminando o efeito num sucesso. Usos = seu bônus de proficiência; recupera em descanso longo." }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------- RYOKIDO */
    {
      id: "yr-ryokido", name: "Ryokido", source: "homebrew", page: 141,
      flavor: "Nas florestas de espinhos secos vivem os ryokido, coloquialmente \"tartarugas-leão\": seres telepáticos de garras ferozes e faces felinas achatadas. Cada carapaça é única como uma impressão digital. Compartilham pensamentos e sentimentos de alma para alma, o que lhes dá uma empatia imensa.",
      asi: "Sua Força, Sabedoria e Carisma aumentam em 1 cada.",
      age: "Ryokido crescem muito devagar. São considerados jovens até os 80 anos e vivem até 600.",
      size: "Médio (entre 1,5 m e 2,1 m).", speed: "9 m (30 pés).", creatureType: "Humanoide.",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços, duas pernas e uma cauda." },
        { name: "Darkvision (Visão no Escuro)", text: "Você enxerga na penumbra a até 18 m (60 pés) como se fosse luz plena, e na escuridão como se fosse penumbra (apenas tons de cinza na escuridão)." },
        { name: "Heavy Shell (Casca Pesada)", text: "Você tem vantagem em testes de habilidade e de resistência para evitar ser derrubado. Além disso, ao se levantar de caído, você deve usar sua ação bônus, além do deslocamento gasto." },
        { name: "Lionheart (Coração de Leão)", text: "Você ganha proficiência em uma destas perícias à sua escolha: Acrobacia, Atletismo, Intuição ou Intimidação." },
        { name: "Slashing Claws (Garras Cortantes)", text: "Você pode usar suas garras em golpes desarmados: no acerto, causam 1d6 + seu modificador de Força de dano cortante, em vez do dano de concussão normal." },
        { name: "Telepathic Bond (Vínculo Telepático)", text: "Como ação, você forma um vínculo telepático com uma criatura disposta e visível a até 30 m (100 pés). Por 1 hora, vocês se comunicam telepaticamente mesmo sem idioma em comum (ideias rudimentares, imagens e sentimentos, se a criatura não falar nenhum idioma). O vínculo termina cedo se você usar esta característica de novo com outra criatura, ou se vocês ficarem a mais de 30 m de distância." },
        { name: "Tough Shell (Casca Resistente)", text: "Quando você não está usando armadura, sua CA base é 12 + seu modificador de Constituição — e você pode usar um escudo e manter esse benefício. Além disso, ao cair, você pode usar uma reação para angular o corpo e amortecer o impacto: subtraia até 30 m (100 pés) da queda ao calcular o dano. Uma vez por descanso longo (a carapaça precisa se recuperar)." },
        { name: "Idiomas", text: "Você fala Comum e mais um idioma apropriado (acordado com o Mestre)." }
      ]
    },

    /* ---------------------------------------------------------- TATSUMI */
    {
      id: "yr-tatsumi", name: "Tatsumi", source: "homebrew", page: 144,
      flavor: "Ao longo de lagos e riachos de água doce, vivem os dois povos gêmeos dos tatsumi. Dizem que seus ancestrais são a semente de que brotaram todos os dragões e povos dracônicos. São renomados por suas escamas coloridas abençoadas pela lua e por seus corpos poderosos.",
      asi: "Sua Destreza, Constituição e Sabedoria aumentam em 1 cada.",
      age: "Tatsumi amadurecem rápido, chegando à vida adulta aos 14 anos. Vivem cerca de dois séculos.",
      size: "Médio (entre 1,5 m e 2,1 m).", speed: "9 m (30 pés), e você tem deslocamento de natação igual ao de caminhada.",
      creatureType: "Humanoide.",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços, duas pernas e uma cauda." },
        { name: "Amphibious (Anfíbio)", text: "Você respira no ar e na água." },
        { name: "Koi Dragon Colour (Cor do Dragão Koi)", text: "Cada tatsumi nasce com uma coloração única. Sua coloração primária tem significado e afeta o traço Slumbering Dragon (como nishikin) e os traços Heartening Breath e Innate Magic (como ryujin), conforme a tabela:\n• Vermelho — Força — Feiticeiro\n• Dourado — Destreza — Druida\n• Preto — Constituição — Bruxo\n• Prata — Inteligência — Mago\n• Branco — Sabedoria — Clérigo\n• Azul — Carisma — Bardo" },
        { name: "Idiomas", text: "Você fala, lê e escreve Comum e Aquan." },
        { name: "Subraça", text: "As duas formas dos tatsumi são nishikin e ryujin. Todo ryujin já foi um nishikin — são mais estágios de desenvolvimento do que subraças verdadeiras. Escolha uma." }
      ],
      subraces: [
        {
          name: "Nishikin",
          flavor: "Todo nishikin carrega um coração turbulento de calor e poder. Em geral essa força age invisível, um poço de energia que impele o nishikin com longevidade e vitalidade incríveis. A diligência dos nishikin é lendária — eles se lançam em novas experiências com fervor alarmante e mal toleram o descanso.",
          traits: [
            { name: "Moonblessed (Abençoado pela Lua)", text: "Enquanto banhado ao luar, você pode usar uma ação bônus para gastar um número de Dados de Vida igual ao seu bônus de proficiência. Role esses dados e some seu modificador de Constituição; você recupera pontos de vida iguais ao total. Se essa cura levar seus PV ao máximo, o excedente vira PV temporários. Uma vez por descanso longo." },
            { name: "Powerful Build (Constituição Poderosa)", text: "Você conta como uma categoria de tamanho maior para capacidade de carga e o peso que pode empurrar, arrastar ou erguer." },
            { name: "Slippery (Escorregadio)", text: "Você tem vantagem em testes de habilidade e de resistência feitos para evitar ou terminar a condição agarrado em si mesmo." },
            { name: "Slumbering Dragon (Dragão Adormecido)", text: "Ao fazer uma jogada de ataque, teste de habilidade ou de resistência usando a característica associada à sua coloração primária, você pode usar sua reação para somar 1d6 à rolagem. Você pode usar esta reação após rolar o d20, mas deve decidir antes de o resultado ser determinado. Usos = seu bônus de proficiência; recupera em descanso curto ou longo." },
            { name: "Draconic Metamorphosis (Metamorfose Dracônica)", text: "Ao alcançar o 7º nível, ou ao passar por um momento significativo de conquista ou perda pessoal (a critério do Mestre), você pode escolher se metamorfosear em ryujin. Seu nível, classe e demais estatísticas permanecem iguais, exceto a subraça. Você troca os traços raciais do nishikin pelos do ryujin, e a cor do seu ryujin é a mesma da sua coloração primária como nishikin. A transformação é definitiva e só pode ser revertida pela magia wish." }
          ]
        },
        {
          name: "Ryujin",
          flavor: "Os ryujin transformaram-se dos povos-peixe aquáticos numa nova forma dracônica. Não são reverenciados acima da família nishikin em sua sociedade — quando vivem juntos, vivem em harmonia. São notavelmente mais relaxados, dispostos a pausar e ver o mundo passar.",
          traits: [
            { name: "Cloudstep (Passo nas Nuvens)", text: "Como ação bônus, você conjura uma pequena nuvem sob os pés. Você ganha deslocamento de voo igual à metade do seu deslocamento de caminhada pelos próximos 10 minutos. Uma vez por descanso longo." },
            { name: "Heartening Breath (Sopro Encorajador)", text: "Como ação, você exala uma rajada quente e espiralada de energia mágica num cone de 9 m (30 pés). Você e até um número de criaturas à sua escolha na área igual ao seu bônus de proficiência podem somar 1d4 a jogadas de ataque e a testes de habilidade e de resistência que usem a característica associada à sua coloração primária, por 1 minuto ou até você perder a concentração (como se concentrando numa magia). Usos = seu bônus de proficiência; recupera em descanso longo." },
            { name: "Innate Magic (Magia Inata)", text: "Você aprende um truque à sua escolha da lista de magias da classe associada à sua coloração primária. Sua habilidade de conjuração para esse truque é a característica associada à sua coloração primária." },
            { name: "Sunblessed (Abençoado pelo Sol)", text: "Enquanto sob luz do sol, você tem vantagem em testes de resistência para evitar ou terminar as condições amedrontado, paralisado ou atordoado em si mesmo, ou contra ser posto para dormir." }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------- TENGU */
    {
      id: "yr-tengu", name: "Tengu", source: "homebrew", page: 143,
      flavor: "Nas florestas que vestem a terra da montanha gélida à costa fértil, a vida verdejante é cultivada e protegida por guardiões distantes: os tengu. Travessos, orgulhosos e territoriais, são yokai longevos que fazem lar nas copas das árvores. A quem invade, um recado sutil: não fira a floresta.",
      asi: "Sua Destreza aumenta em 2 (mais o aumento da subraça).",
      age: "Atingem a maturidade por volta dos 16 anos e vivem até 400 anos.",
      size: "Médio (geralmente entre 1,8 m e 2,1 m).", speed: "9 m (30 pés).", creatureType: "Humanoide.",
      traits: [
        { name: "Anatomia", text: "Você tem dois braços e duas pernas." },
        { name: "Lethal Masters (Mestres Letais)", text: "Você tem proficiência com uma arma simples ou marcial à sua escolha." },
        { name: "Idiomas", text: "Você fala, lê e escreve Comum e mais um idioma apropriado (acordado com o Mestre)." },
        { name: "Subraça", text: "Há duas variações principais de tengu: hanataka e karasu. Escolha uma." }
      ],
      subraces: [
        {
          name: "Tengu Hanataka",
          flavor: "Menos ferozes e impulsivos que os karasu, os hanataka são vistos como a linhagem \"mais alta\" dos tengu. Com a paciência de um rio, vivem, treinam e meditam nas árvores altas de seu lar montanhês.",
          traits: [
            { name: "Aumento de Habilidade", text: "Sua Carisma aumenta em 1." },
            { name: "Master of Craft (Mestre do Ofício)", text: "Você é proficiente com um tipo de ferramentas de artesão à sua escolha. Ao fazer um teste de Fabricação (Crafting) com essa ferramenta, você pode somar 1d4 ao resultado." },
            { name: "Nature Guardian (Guardião da Natureza)", text: "Você ganha proficiência em uma destas perícias à sua escolha: Arcanismo, Natureza, Religião, Furtividade ou Sobrevivência." },
            { name: "Shadowcaster (Conjurador de Sombras)", text: "Você aprende os truques prestidigitação e taumaturgia (thaumaturgy). Além disso, pode conjurá-los sem componentes enquanto estiver em penumbra ou escuridão. Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração para essas magias (escolha ao selecionar a raça)." },
            { name: "Whirlwind Onslaught (Investida Turbilhão)", text: "Depois de usar a ação de Ataque no seu turno, você pode usar sua ação bônus nesse turno para conjurar um truque com tempo de conjuração de uma ação, ou fazer um número de ataques corpo a corpo igual a metade do seu bônus de proficiência (arredondado para cima). Cada ataque deve ter um alvo diferente. Depois de usar, você não pode fazê-lo de novo até terminar um descanso curto ou longo." }
          ]
        },
        {
          name: "Tengu Karasu",
          flavor: "Enganadores e espirituosos, astutos e perigosos, os karasu são trapaceiros de coração. Têm muitas qualidades aviárias, incluindo asas emplumadas vestigiais e bicos poderosos.",
          traits: [
            { name: "Aumento de Habilidade", text: "Sua Sabedoria aumenta em 1." },
            { name: "Fortified Mind (Mente Fortificada)", text: "Você tem resistência a dano psíquico." },
            { name: "Prankster (Brincalhão)", text: "Você ganha proficiência nas perícias Enganação e Furtividade." },
            { name: "Psychic Battery (Bateria Psíquica)", text: "Ao usar a ação de Ataque no seu turno, você pode substituir um de seus ataques por um assalto psíquico contra uma criatura visível a até 4,5 m (15 pés). Ela deve ter sucesso num TR de Sabedoria (CD = 8 + seu modificador de Constituição + seu bônus de proficiência) ou sofrer os efeitos da magia confusão até o fim de seu próximo turno. Depois de usar, não pode de novo até um descanso curto ou longo." },
            { name: "Skyrider (Cavaleiro do Céu)", text: "Quando você cai pelo menos 3 m (10 pés) e não está incapacitado, pode usar sua reação para estender as asas emplumadas vestigiais e planar. Você não sofre dano dessa queda e pode se mover 60 cm na horizontal para cada 30 cm que cai. Ao planar assim, você não pode cair mais de 30 m verticais num turno." }
          ]
        }
      ]
    }
  ]);
})();
