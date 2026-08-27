/* ============================================================
   TALENTOS (FEATS) — Ryoko's Guide to the Yokai Realms (Cap. 10)
   Texto transcrito verbatim do PDF fornecido. O PDF termina no
   verbete "Prosthesis Adept" (p. 219) — talentos após esse não
   constam do arquivo.
   ============================================================ */
(function () {
  "use strict";
  window.DND.register("feats", [
    {
      id: "yr-boon-ashura", name: "Boon of Ashura", source: "homebrew", page: 216, prereq: "—",
      text: "Por dádiva, roubo ou acaso de magia selvagem, você passou a possuir um fragmento do poder de Ashura, o poderoso deus-demônio de três cabeças da paixão e da fúria. Você ganha:\n• Aumente sua Força ou Constituição em 1 (máx. 20).\n• Você pode fazer uma reação adicional numa rodada, mas só uma reação por turno. Usos = seu bônus de proficiência; recupera em descanso longo."
    },
    {
      id: "yr-boon-jorogumo", name: "Boon of the Jorogumo", source: "homebrew", page: 216, prereq: "—",
      text: "A jorogumo é um yokai aracnídeo metamorfo que vive entre Humanoides, seduzindo e devorando vítimas. Você possui um fragmento de seu poder:\n• Você ganha proficiência em Enganação ou Persuasão (à escolha).\n• Você pode conjurar disfarçar-se (disguise self) um número de vezes igual ao seu bônus de proficiência; recupera em descanso longo.\n• Você tem deslocamento de escalada igual ao seu deslocamento de caminhada. Além disso, pode se mover para cima, para baixo e de cabeça para baixo em superfícies verticais e tetos, com as mãos livres.\n• Você ignora terreno difícil causado por teias."
    },
    {
      id: "yr-boon-komainu", name: "Boon of the Komainu", source: "homebrew", page: 216, prereq: "—",
      text: "Os komainu de pele de pedra vigiam santuários por todo o reino. Você possui um fragmento do poder desses yokai leão-cão:\n• Como ação, você acende uma juba reluzente de energia radiante ao redor do pescoço, que dura até você dispensá-la (ação bônus) ou cair inconsciente. Enquanto acesa, você emite luz fraca num raio de 3 m e uma criatura que você esteja agarrando sofre 2d4 de dano radiante no início do turno dela.\n• Como ação bônus, você endurece o corpo em pedra. Até o início do seu próximo turno, ganhe +2 de CA enquanto não usar armadura pesada, vantagem em TR de Constituição e desvantagem em TR de Destreza. Usos = seu bônus de proficiência; recupera em descanso longo."
    },
    {
      id: "yr-boon-nue", name: "Boon of the Nue", source: "homebrew", page: 216, prereq: "—",
      text: "A nue é uma caçadora quimérica feroz, dita o primeiro yokai. Seu poder é caótico, e uma faísca dele reside em você:\n• No início do seu turno, você pode rolar um d6. Se o resultado for par, você ganha um bônus igual ao resultado na próxima jogada de ataque, teste de habilidade ou TR que fizer antes do fim deste turno. Se for ímpar, você sofre dano de veneno igual ao resultado (não pode ser reduzido nem prevenido). Usos = seu bônus de proficiência; recupera em descanso curto ou longo.\n• Como ação bônus, você concede a si mesmo deslocamento de voo igual ao seu deslocamento de caminhada até o fim do seu turno. Você cai se terminar o turno no ar sem sustentação. Usos = seu bônus de proficiência; recupera em descanso curto ou longo."
    },
    {
      id: "yr-boon-omukade", name: "Boon of the Ōmukade", source: "homebrew", page: 216, prereq: "—",
      text: "O ōmukade é um caçador de dragões — um yokai centopeia colossal com carapaça resistente e resistência aos elementos. Você ganha:\n• Aumente sua Constituição em 1 (máx. 20).\n• Escolha um tipo de dano entre ácido, frio, fogo, elétrico, veneno e trovão ao selecionar o talento. Você ganha resistência a esse tipo e, ao sofrer dano desse tipo, pode usar uma reação para ficar empoderado: a primeira rolagem de dano que você fizer no próximo minuto causa 1d8 de dano extra desse tipo. Esse dano aumenta em 1d8 no 5º (2d8), 11º (3d8) e 17º (4d8) nível. Usos da reação = seu bônus de proficiência; recupera em descanso longo."
    },
    {
      id: "yr-boon-wanyudo", name: "Boon of the Wanyūdō", source: "homebrew", page: 222, prereq: "—",
      text: "Frenético, fanático e ofuscantemente rápido, o wanyūdō é um yokai infernal com a forma de uma grande roda flamejante. Você ganha:\n• Seu deslocamento aumenta em 3 m (10 pés).\n• Quando você está caído, levantar-se custa apenas 1,5 m (5 pés) de deslocamento.\n• Se você se move ao menos 3 m em linha reta em direção a uma criatura ao seu alcance, pode imediatamente usar uma ação bônus para tentar uma investida contra ela. Faça um teste de Força (Atletismo), disputado por Força (Atletismo) ou Destreza (Acrobacia) do alvo (à escolha dele). Quem perde a disputa cai caído. Usos = seu bônus de proficiência; recupera em descanso curto ou longo."
    },
    {
      id: "yr-cantrip-combatant", name: "Cantrip Combatant", source: "homebrew", page: 222,
      prereq: "Uma característica de classe que permita atacar mais de uma vez na ação de Ataque, e a capacidade de conjurar ao menos um truque.",
      text: "Você domina a arte de combinar golpes e conjuração:\n• Aumente uma característica à sua escolha em 1 (máx. 20).\n• Quando você usa uma ação para conjurar um truque que exige que você faça um golpe desarmado ou ataque corpo a corpo com uma arma que empunha como parte da conjuração, você pode fazer um ataque com arma como ação bônus nesse turno."
    },
    {
      id: "yr-combo-striker", name: "Combo Striker", source: "homebrew", page: 223, prereq: "—",
      text: "Você é praticado na arte do combate colaborativo e de golpes combinados:\n• Aumente uma característica à sua escolha em 1 (máx. 20).\n• Você pode colaborar num combo attack* mesmo que já tenha colaborado em um desde seu último descanso longo. Depois de usar, não pode de novo até um descanso longo.\n• Quando você inicia um combo attack, uma criatura disposta à sua escolha que você veja pode colaborar nesse combo sem que isso a impeça de colaborar em outro antes de terminar um descanso longo. Depois de usar, não pode de novo até um descanso longo."
    },
    {
      id: "yr-dedicated-combatant", name: "Dedicated Combatant", source: "homebrew", page: 223, prereq: "—",
      text: "Seu compromisso fervoroso com o treino de combate coloca seu Advanced Weapon Mastery no nível dos especialistas mais dedicados. Você pode calcular seu nível marcial (martial level) usando seu nível completo em qualquer classe considerada meio-marcial, e metade dos seus níveis em qualquer classe não-marcial."
    },
    {
      id: "yr-double-throw", name: "Double Throw", source: "homebrew", page: 223, prereq: "—",
      text: "Você desenvolveu técnicas para arremessar várias armas de uma vez:\n• Aumente sua Força ou Destreza em 1 (máx. 20).\n• Uma vez em cada um dos seus turnos, ao fazer um ataque à distância com uma arma que tenha as propriedades Leve e Arremesso, e você não tenha desvantagem no ataque, você pode arremessar duas armas com um único gesto. Se o fizer, faça uma jogada de ataque separada com desvantagem para cada arma. Se você tinha vantagem no ataque original, não sofre desvantagem nesses dois ataques. Podem ter alvos diferentes."
    },
    {
      id: "yr-elemental-fighting", name: "Elemental Fighting", source: "homebrew", page: 217, prereq: "—",
      text: "Você estudou os movimentos meticulosos e as artes mágicas do element bending a ponto de canalizar rajadas cruas de energia elemental pelo corpo. Ao selecionar este talento, escolha um tipo de dano entre ácido, frio, fogo, elétrico e trovão. Quando você faz um golpe desarmado, pode optar para que ele cause dano desse tipo igual a 1d8 + seu modificador de Força, em vez do dano de concussão normal. Dano causado assim ignora resistência."
    },
    {
      id: "yr-elemental-initiate", name: "Elemental Initiate", source: "homebrew", page: 218, prereq: "—",
      text: "Você adquiriu uma porção da conexão de um bender com um elemento. Escolha um dos quatro elementos da característica Elemental Affinity do bender: ar, terra, fogo ou água. Você ganha:\n• Você aprende um truque e uma magia de 1º nível da lista do elemento escolhido. Você pode conjurar a magia de 1º nível sem gastar espaço, mas deve terminar um descanso longo antes de fazê-lo assim de novo. Também pode conjurá-la gastando espaços de magia. Sua habilidade de conjuração para este talento é Inteligência, Sabedoria ou Carisma (escolha ao selecionar o talento).\n• Escolha um tipo de dano associado ao elemento. Ao sofrer dano desse tipo, você pode usar uma reação para ganhar resistência a ele (incluindo o dano do gatilho) até o início do seu próximo turno.\nVocê pode selecionar este talento várias vezes."
    },
    {
      id: "yr-extra-attack-tactician", name: "Extra Attack Tactician", source: "homebrew", page: 217, prereq: "Característica Improved Extra Attack.",
      text: "Você estudou os estilos de luta de outros e aprendeu a imitá-los:\n• Aumente sua Força ou Destreza em 1 (máx. 20).\n• Escolha uma classe entre bárbaro, bender, guerreiro, monge, paladino e patrulheiro. Você pode usar o benefício de 7º nível da característica Improved Extra Attack daquela classe um número de vezes igual ao seu bônus de proficiência, recuperando os usos em descanso longo. Você só pode se beneficiar de um Improved Extra Attack por turno (escolha ao fazer o primeiro ataque).\nVocê pode selecionar este talento várias vezes."
    },
    {
      id: "yr-fearsome-flourisher", name: "Fearsome Flourisher", source: "homebrew", page: 218, prereq: "Proficiência com nunchaku.",
      text: "Sua rapidez com nunchaku pode incutir medo nos inimigos:\n• Ao usar a ação de Ataque e atacar com um nunchaku, você pode usar uma ação bônus para fazer um ataque adicional de nunchaku. Esse ataque usa o mesmo modificador de habilidade do ataque principal, e o dado de dano dele é um d4.\n• Ao usar a ação especial Flourish com nunchaku, você pode usar uma ação bônus para torná-la especialmente intimidante contra uma criatura ao seu alcance. Se você não falhar no teste de Destreza para florear a arma, o alvo deve ter sucesso num TR de Sabedoria (CD = 8 + seu mod. de Destreza; some seu bônus de proficiência se for proficiente em Intimidação) ou fica amedrontado de você até o início do seu próximo turno."
    },
    {
      id: "yr-focused-discipline", name: "Focused Discipline", source: "homebrew", page: 218, prereq: "4º nível; não ser um personagem multiclasse.",
      text: "Sua diligência e treino focado concedem:\n• Escolha uma perícia proficiente concedida pela sua classe. Seu bônus de proficiência é dobrado para testes de habilidade com essa perícia.\n• Escolha uma proficiência em teste de resistência concedida pela sua classe. Sempre que fizer esse TR, você pode tratar um resultado de 9 ou menos no d20 como 10.\nSe você perder este talento por não atender ao pré-requisito, ganha o talento Multidisciplinary em seu lugar."
    },
    {
      id: "yr-kaiju-hunter", name: "Kaiju Hunter", source: "homebrew", page: 218, prereq: "—",
      text: "Você é praticado na arte de lutar contra criaturas colossais:\n• Montar uma criatura custa apenas 1,5 m (5 pés) de deslocamento, em vez de metade do seu deslocamento.\n• Você pode se firmar (brace*) gastando apenas 1,5 m de deslocamento, em vez de metade.\n• Você tem vantagem em testes de habilidade para identificar áreas vulneráveis.\n• Você ignora terreno difícil causado por se mover sobre uma criatura mais de dois tamanhos maior que você.\n• Imediatamente depois que uma criatura visível ao menos um tamanho maior que você acerta ou erra você com um ataque corpo a corpo, você pode usar sua reação para fazer um ataque com arma contra ela."
    },
    {
      id: "yr-kusarigama-master", name: "Kusarigama Master", source: "homebrew", page: 219, prereq: "Proficiência com kusarigama.",
      text: "Você dominou o kusarigama, aprendendo técnicas para desarmar e assediar inimigos. Você adiciona seu modificador de habilidade à rolagem de dano feita com o contrapeso do kusarigama. Além disso, ao fazer esse ataque contra um alvo Médio ou menor, você pode optar por não causar dano. Se o fizer, o alvo faz um teste de Força (Atletismo) ou Destreza (Acrobacia) (à escolha dele), disputado pela sua jogada de ataque. Se falhar, escolha um efeito:\n• O alvo é desarmado de um objeto à sua escolha, puxado até você e caindo a seus pés.\n• O alvo cai caído.\n• O alvo é puxado 1,5 m em sua direção. Se isso o deixar ao seu alcance, ele fica agarrado por você. Enquanto agarrado assim, você não pode atacar com o contrapeso do kusarigama."
    },
    {
      id: "yr-magic-of-the-blade", name: "Magic of the Blade", source: "homebrew", page: 224, prereq: "—",
      text: "Você tem o poder de sincronizar magia e esgrima:\n• Aumente uma característica à sua escolha em 1 (máx. 20).\n• Você aprende dois truques que exigem que você faça um golpe desarmado ou ataque corpo a corpo com uma arma que empunha como parte da conjuração. Sua habilidade de conjuração para essas magias é Inteligência, Sabedoria ou Carisma (escolha ao selecionar o talento)."
    },
    {
      id: "yr-martial-initiate", name: "Martial Initiate", source: "homebrew", page: 224, prereq: "4º nível.",
      text: "Você estudou extensivamente a arte do combate, aprimorando sua habilidade com uma arma favorita:\n• Aumente uma característica à sua escolha em 1 (máx. 20).\n• Você aprende duas técnicas avançadas de tier 1 à sua escolha de qualquer árvore de técnicas (Advanced Weapon Mastery). Você deve atender aos pré-requisitos dessas técnicas."
    },
    {
      id: "yr-multidisciplinary", name: "Multidisciplinary", source: "homebrew", page: 224, prereq: "Ser um personagem multiclasse.",
      text: "Você é adepto de recorrer a diferentes disciplinas. Ao pegar este talento, e cada vez que você ganha seu 1º nível numa nova classe, escolha um benefício:\n• Você ganha proficiência em uma perícia e um tipo de ferramentas de artesão à sua escolha.\n• Escolha uma proficiência em teste de resistência que a classe na qual você fez multiclasse normalmente concede no 1º nível. Você se torna proficiente nesse TR."
    },
    {
      id: "yr-prosthesis-adept", name: "Prosthesis Adept", source: "homebrew", page: 219, prereq: "—",
      text: "Você pode ajustar sua prótese, manipulando sua função ao longo de uma hora (que pode ser parte de um descanso curto ou longo). Isso a aprimora adicionando uma das propriedades a seguir:\n• Blast (1d6 de trovão, 6 m). A prótese ganha o superior strike Piercing Shot.\n• Hookshot (9 m).\n• Integrated (qualquer).\n• Launch (1d6*, 9 m). A prótese ganha o superior strike Battery Strike.\n• Melee (1d8*, 1,5 m). A prótese ganha o superior strike Reeling Blow.\n• Mobility (escalada ou natação, 9 m). A modificação dura até você ajustar a prótese de novo.\n* Concussão, perfurante ou cortante (escolha ao fazer a modificação)."
    }
  ]);

  /* ---- Talentos adicionais + Talentos raciais (sources/background$feats.md) ---- */
  window.DND.register("feats", [
    {
      id: "yr-prosthesis-fighting", name: "Prosthesis Fighting", source: "homebrew", page: 220, prereq: "—",
      text: "Você é mestre em empunhar próteses em combate:\n• O alcance de ataques que você faz com as propriedades Blast ou Launch de uma prótese aumenta 3 m (10 pés).\n• O alcance de ataques corpo a corpo com próteses de propriedade Melee aumenta 1,5 m (5 pés).\n• Você causa um dado de dano extra ao acertar com as propriedades Blast, Launch ou Melee de uma prótese."
    },
    {
      id: "yr-prosthesis-master", name: "Prosthesis Master", source: "homebrew", page: 220, prereq: "8º nível.",
      text: "Você treinou extensamente com próteses mágicas:\n• Você é considerado proficiente com quaisquer ataques feitos com uma prótese.\n• Você pode se sintonizar a uma prótese mágica sem que ela conte no seu limite de itens mágicos sintonizados."
    },
    {
      id: "yr-spirit-bonded", name: "Spirit Bonded", source: "homebrew", page: 220, prereq: "—",
      text: "Você formou amizade com um espírito que quer ser seu familiar. Você aprende a magia find familiar e pode conjurá-la sem componentes nem espaço de magia; assim conjurado, o familiar ignora a restrição que o impede de atacar. Depois de conjurá-la assim, não de novo até um descanso longo. Ao pegar o talento, escolha uma forma de familiar: bancho-gama, betobeto-kun, kawawappa, ko-inari ou senryoka*. Você pode invocar o familiar nessa forma ou nas listadas na magia. Na forma escolhida, ele ganha PV temporários iguais ao seu nível e a melhoria de 1º nível da árvore de melhorias dele. No 5º nível, esses PV temporários dobram e você também pode conceder uma melhoria de 3º nível da árvore dele."
    },
    {
      id: "yr-tengu-training", name: "Tengu Training", source: "homebrew", page: 221, prereq: "—",
      text: "A tutela de um tengu hanataka (ou incontáveis horas estudando tratados hanataka de combate) concede:\n• Aumente sua Destreza ou Sabedoria em 1 (máx. 20).\n• Você ganha proficiência com uma arma de Acuidade à sua escolha.\n• Como reação quando uma criatura erra você com ataque corpo a corpo enquanto você segura uma arma de Acuidade, você pode fazer um ataque com essa arma contra ela. Usos = seu bônus de proficiência; recupera em descanso longo."
    },
    {
      id: "yr-tessen-master", name: "Tessen Master", source: "homebrew", page: 221, prereq: "Proficiência com tessen.",
      text: "Você aprendeu a manipular o tessen de novas formas:\n• Aumente sua Força ou Destreza em 1 (máx. 20).\n• Para você, o tessen tem as propriedades Adaptável (perfurante) e Arremesso (alcance 6/18 m).\n• Empunhando um tessen, você ganha uma reação extra por rodada, usável apenas para tentar defletir um projétil com a propriedade Especial: Fan Shield (e não no mesmo turno em que você usa sua reação normal)."
    },
    /* --- Talentos raciais --- */
    {
      id: "yr-adaptive-colouration", name: "Adaptive Colouration", source: "homebrew", page: 221, prereq: "Tatsumi.",
      text: "Você muda de coloração:\n• Você tem vantagem em testes de Furtividade para evitar ser visto.\n• Escolha uma cor do seu traço Koi Dragon Colour ao pegar o talento. Ao usar Slumbering Dragon (nishikin) ou Heartening Breath (ryujin), você pode empoderar testes, ataques e TR associados à sua coloração primária OU à cor escolhida com este talento."
    },
    {
      id: "yr-draconic-fury", name: "Draconic Fury", source: "homebrew", page: 221, prereq: "Tatsumi (ryujin).",
      text: "Você canaliza sua energia dracônica num sopro danoso:\n• Aumente sua Constituição em 1 (máx. 20).\n• Escolha um tipo de dano entre ácido, frio, fogo, elétrico, veneno e trovão. Ao usar Heartening Breath, você pode em vez disso expelir um cone de 9 m (30 pés) de energia destrutiva: cada criatura na área faz um TR de Destreza (CD = 8 + mod. Constituição + prof.), sofrendo 1d12 do tipo escolhido em falha, metade em sucesso. Sobe para 2d12 no 5º nível, 3d12 no 11º e 4d12 no 17º."
    },
    {
      id: "yr-enkohs-might", name: "Enkoh's Might", source: "homebrew", page: 221, prereq: "Enkoh (hulking).",
      text: "Você tem força explosiva, notável mesmo entre os hulking:\n• Aumente sua Força em 1 (máx. 20).\n• Como ação bônus, tente empurrar uma criatura no máximo um tamanho maior que você ao seu alcance: teste de Força (Atletismo) disputado por Força (Atletismo) ou Destreza (Acrobacia) do alvo. Se vencer, você o derruba ou o empurra até 4,5 m. Usos = seu bônus de proficiência; recupera em descanso longo."
    },
    {
      id: "yr-gift-lion-turtle", name: "Gift of the Lion Turtle", source: "homebrew", page: 221, prereq: "Ryokido.",
      text: "Você tem comando incomum sobre suas habilidades telepáticas:\n• Aumente uma característica à sua escolha em 1 (máx. 20).\n• Você pode conjurar detect thoughts e suggestion sem gastar espaço. Depois de conjurar uma delas assim, não de novo com este talento até um descanso longo (também pode usar espaços). Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração (escolha ao pegar o talento)."
    },
    {
      id: "yr-hanamori-physiology", name: "Hanamori Physiology", source: "homebrew", page: 221, prereq: "Hanamori.",
      text: "Sua fisiologia hiperativa adapta-se ao ambiente instantaneamente:\n• Você tem vantagem em TR para evitar exaustão causada pelo ambiente (calor ou frio extremos).\n• Ao sofrer dano de ácido, frio, fogo, elétrico ou trovão, você pode usar sua reação para ganhar resistência a esse tipo (inclui o dano disparador) até o fim do seu próximo turno. Usos = seu bônus de proficiência; recupera em descanso longo."
    },
    {
      id: "yr-haniwa-soulbinding", name: "Haniwa Soulbinding", source: "homebrew", page: 221, prereq: "Haniwa.",
      text: "Você derrama mais da sua essência no companheiro de argila. Ao criar um companheiro, ele pode usar um destes blocos de estatísticas em vez dos listados no traço Clay Companion: urso-negro, cabra gigante, polvo gigante ou cavalo de guerra. A partir do 5º nível, também: lobo atroz, aranha gigante e sapo gigante."
    },
    {
      id: "yr-isetsu-magic", name: "Isetsu Magic", source: "homebrew", page: 222, prereq: "Isetsu.",
      text: "Sua conexão com o oceano concede uma medida de magia da água:\n• Aumente uma característica à sua escolha em 1 (máx. 20).\n• Você aprende o truque water whip*.\n• Você pode conjurar riptide* e water breathing sem gastar espaço. Depois de conjurar uma delas assim, não de novo com este talento até um descanso longo (também pode usar espaços). Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração (escolha ao pegar o talento)."
    },
    {
      id: "yr-karasu-trickery", name: "Karasu Trickery", source: "homebrew", page: 222, prereq: "Tengu (karasu).",
      text: "Você é um virtuose da trapaça mesmo entre os karasu:\n• Aumente sua Carisma em 1 (máx. 20).\n• Sempre que você e ao menos outra criatura visível fazem um teste ou TR ao mesmo tempo (iniciativa, teste disputado, TR contra área de efeito), você pode trocar seu resultado no d20 pelo da outra criatura. Depois de usar, não de novo até um descanso curto ou longo."
    },
    {
      id: "yr-kitsunes-blessing", name: "Kitsune's Blessing", source: "homebrew", page: 222, prereq: "Kitsune.",
      text: "Você tem magia natural além da de um kitsune típico:\n• Você pode conjurar magias enquanto transformado por Shapeshifter sem exigir componentes materiais, salvo se tiverem custo em ouro.\n• Transformado por Shapeshifter, você pode usar a mordida de raposa em golpes desarmados, usando Força ou Destreza para ataque e dano: no acerto, 1d6 + mod. de dano perfurante.\n• Você ganha a ação Ataque Múltiplo: transformado por Shapeshifter, como ação você faz um número de golpes desarmados igual a metade do seu bônus de proficiência (arred. cima).\n• Transformado por Shapeshifter, sua CA é 12 + seu modificador de Destreza."
    },
    {
      id: "yr-oni-regeneration", name: "Oni Regeneration", source: "homebrew", page: 222, prereq: "Oniborne.",
      text: "A fortaleza e longevidade dos seus ancestrais flui em você:\n• Aumente sua Constituição em 1 (máx. 20).\n• Como reação ao sofrer dano, você pode gastar um número de Dados de Vida até o seu bônus de proficiência para se curar: role os dados, some seu modificador de Constituição e recupere PV iguais ao total (mín. 1). Usos = seu bônus de proficiência; recupera em descanso longo."
    },
    {
      id: "yr-seasonal-determinism", name: "Seasonal Determinism", source: "homebrew", page: 222, prereq: "Fuyoren.",
      text: "O estado do mundo no seu nascimento deixou uma marca no seu corpo. Escolha a estação em que nasceu:\n• Primavera. Destreza +1 (máx. 20); deslocamento +1,5 m; como ação bônus, o próximo ataque contra você antes do seu próximo turno tem desvantagem.\n• Verão. Carisma +1 (máx. 20); como ação bônus, dê a si vantagem no próximo ataque ou teste antes do seu próximo turno. Usos = seu bônus de proficiência; recupera em descanso longo.\n• Outono. Sabedoria +1 (máx. 20); visão no escuro 9 m (ou +9 m se já tiver) e pode tomar a ação Esconder-se como ação bônus em penumbra/escuridão.\n• Inverno. Constituição +1 (máx. 20); ao criar um frasco mágico de água com Water Magic, pode escolher: a água congela com magia de evocação — ao tomar a ação de Ataque, uma criatura segurando o frasco pode usar um ataque para arremessá-lo (arma improvisada à distância) a um alvo a até 6 m; no acerto, 1d8 de frio e, se for criatura, deslocamento reduzido em 3 m até o fim do próximo turno dela (dano sobe 1d8 no 5º/11º/17º)."
    },
    {
      id: "yr-shadowmage", name: "Shadowmage", source: "homebrew", page: 222, prereq: "Tengu (hanataka).",
      text: "A magia yokai nas suas veias lhe dá acesso a um poço maior de magia que o típico hanataka:\n• Aumente sua Inteligência, Sabedoria ou Carisma em 1 (máx. 20).\n• Você aprende dois truques à sua escolha da lista de druida ou feiticeiro. Você pode conjurá-los sem componentes enquanto estiver em penumbra ou escuridão. Sua habilidade de conjuração para eles é a característica que você aumentou com este talento."
    },
    {
      id: "yr-springtail-agility", name: "Springtail Agility", source: "homebrew", page: 222, prereq: "Enkoh (springtail).",
      text: "Você é incomumente ágil, mesmo entre os springtail:\n• Aumente sua Destreza em 1 (máx. 20).\n• Como ação bônus, você salta um número de pés igual a cinco vezes seu bônus de proficiência. Esse salto não custa deslocamento (mas seu deslocamento deve ser maior que 0) e não provoca ataques de oportunidade. Usos = seu bônus de proficiência; recupera em descanso longo."
    }
  ]);
})();
