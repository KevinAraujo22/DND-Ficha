/* ============================================================
   CLASSES — Ryoko's Guide to the Yokai Realms (Capítulo 9)
   • Bender (Dobrador de Elementos): classe nova. O PDF fornecido
     traz a tabela e as proficiências completas, mas NÃO traz o
     texto detalhado das características (páginas 162–168). Elas
     estão listadas por nível com nota.
   • Tamer (Domador): classe de Heliana's Guide reimpressa no
     livro. Texto transcrito verbatim do PDF fornecido.
   ============================================================ */
(function () {
  "use strict";

  var benderTable = [
    ["1", "+2", "Conjuração, Elemental Affinity (1), Elemental Strikes", "2", "2 / – / – / – / –"],
    ["2", "+2", "Elemental Combo", "2", "2 / – / – / – / –"],
    ["3", "+2", "Bender Discipline (subclasse)", "2", "3 / – / – / – / –"],
    ["4", "+2", "Aumento no Valor de Habilidade", "2", "3 / – / – / – / –"],
    ["5", "+3", "Ataque Extra", "2", "4 / 2 / – / – / –"],
    ["6", "+3", "Elemental Affinity (2)", "2", "4 / 2 / – / – / –"],
    ["7", "+3", "Característica de Discipline; Improved Extra Attack (opcional)", "2", "4 / 3 / – / – / –"],
    ["8", "+3", "Aumento no Valor de Habilidade", "2", "4 / 3 / – / – / –"],
    ["9", "+4", "—", "2", "4 / 3 / 2 / – / –"],
    ["10", "+4", "Elemental Affinity (3)", "3", "4 / 3 / 2 / – / –"],
    ["11", "+4", "Primordial Form", "3", "4 / 3 / 3 / – / –"],
    ["12", "+4", "Aumento no Valor de Habilidade", "3", "4 / 3 / 3 / – / –"],
    ["13", "+5", "—", "3", "4 / 3 / 3 / – / –"],
    ["14", "+5", "Elemental Affinity (4)", "4", "4 / 3 / 3 / – / –"],
    ["15", "+5", "Característica de Discipline", "4", "4 / 3 / 3 / 2 / –"],
    ["16", "+5", "Aumento no Valor de Habilidade", "4", "4 / 3 / 3 / 2 / –"],
    ["17", "+6", "—", "4", "4 / 3 / 3 / 3 / –"],
    ["18", "+6", "Primordial Avatar", "4", "4 / 3 / 3 / 3 / –"],
    ["19", "+6", "Aumento no Valor de Habilidade", "4", "4 / 3 / 3 / 3 / 2"],
    ["20", "+6", "Característica de Discipline", "4", "4 / 3 / 3 / 3 / 2"]
  ];

  window.DND.register("classes", [
    {
      id: "yr-bender", name: "Bender (Dobrador de Elementos)", source: "homebrew", page: 160, hitDie: "d8",
      primaryAbility: "Inteligência, Sabedoria ou Carisma (à escolha)",
      saves: ["Força", "Constituição"],
      armor: "Armadura leve",
      weapons: "Armas simples, chakrams, nunchaku, espadas curtas, shuriken, starknives*, twinblades*",
      tools: "Um tipo de ferramentas de artesão ou um instrumento musical à escolha",
      skillChoices: 2,
      skillList: ["Acrobacia", "Atletismo", "História", "Intuição", "Religião", "Furtividade"],
      startEquipment: "Além do que o antecedente fornece: (a) um bordão, (b) um chakram ou (c) qualquer arma simples; (a) pacote de masmorra ou (b) de explorador; armadura de couro e 10 shuriken. Alternativamente, 5d4 × 10 po.",
      subclassLevel: 3, subclassLabel: "Bender Discipline",
      spellcasting: {
        type: "Preparada (repertório)", ability: "Inteligência, Sabedoria ou Carisma (escolha no 1º nível)",
        ritual: true, focus: "sua mão livre",
        note: "Repertório = mod. de conjuração + metade do nível de bender (arred. baixo, mín. 1), das listas dos elementos com que você tem afinidade. Prepara ao terminar um descanso longo (≥ 1 min por nível de magia). Multiclasse: some metade dos seus níveis de bender (arred. cima) para os espaços."
      },
      benderTable: benderTable,
      hp: "1º nível: 8 + mod. Constituição. Níveis seguintes: 1d8 (ou 5) + mod. Constituição por nível de bender.",
      features: [
        { level: 1, name: "Conjuração", text: "Você usa os movimentos do corpo para manipular as forças primordiais. Truques: 2 no 1º nível, mais pela tabela e por Elemental Affinity. Você prepara um repertório de magias das listas dos elementos com que tem afinidade, em número igual ao seu modificador de conjuração + metade do seu nível de bender (arred. baixo, mín. 1), das quais pode conjurar. Troca o repertório ao terminar um descanso longo. Conjuração ritual: pode conjurar como ritual uma magia com a tag ritual que esteja preparada. Foco: sua mão livre serve de foco (componentes somáticos e materiais sem custo e não consumidos). CD de magia = 8 + prof. + mod.; ataque de magia = prof. + mod. Habilidade de conjuração escolhida no 1º nível: Inteligência, Sabedoria ou Carisma." },
        { level: 1, name: "Elemental Affinity", text: "Você se sintoniza com um dos quatro elementos — ar, terra, fogo ou água — e as magias dele (Lista de Magias do Bender) entram na sua lista. Tipos de dano por elemento: Ar → trovão; Terra → ácido e concussão; Fogo → fogo e elétrico; Água → frio.\nNos níveis 6, 10 e 14, escolha novamente um elemento (novo ou repetido):\n• Nova afinidade: adiciona as magias daquele elemento à sua lista e você aprende um truque da lista dele (não conta no total de truques).\n• Afinidade repetida: magias conjuradas daquela lista são lançadas um nível acima do espaço gasto. Acumula (4 afinidades no mesmo elemento = 3 níveis acima)." },
        { level: 1, name: "Elemental Strikes", text: "Ao usar a ação de Ataque, um ou mais de seus ataques podem ser \"elemental strikes\" (ataques de magia corpo a corpo ou à distância), causando dano de um tipo com que você tem afinidade (à sua escolha no ataque).\n• Corpo a corpo: golpe desarmado com alcance de 3 m (10 pés), 1d6 + seu modificador de conjuração no acerto.\n• À distância: alcance 18 m (60 pés), 1d4 + seu modificador de conjuração no acerto.\nEsse dano não aumenta com o nível, mas itens mágicos que dão bônus a golpes desarmados também se aplicam. Superior strikes: Flurry (corpo a corpo) e Battery Strike (à distância), liberados pela técnica de tier 2 da árvore Pugilista (AWM)." },
        { level: 2, name: "Elemental Combo", text: "No seu turno, depois de fazer um ataque com arma ou um elemental strike, ou de conjurar uma magia de nível 1 ou maior da sua lista de bender, você pode soltar um jato de energia elemental como ação bônus: um ataque de magia corpo a corpo contra uma criatura a até 3 m, ou à distância contra uma a até 18 m. No acerto, 1d4 de dano de um tipo com que tem afinidade; se o alvo estiver a até 3 m, some seu modificador de conjuração ao dano. O dano sobe para 2d4 no 6º nível, 3d4 no 10º e 4d4 no 14º." },
        { level: 3, name: "Bender Discipline (subclasse)", text: "Você escolhe um aspecto de como a natureza se manifesta. A Discipline concede características no 3º, 7º, 15º e 20º nível. Opções: Disciple of Ferocity, Disciple of Fortification, Disciple of Fusion e Disciple of Invigoration (veja em Subclasses)." },
        { level: 4, name: "Aumento no Valor de Habilidade", text: "Nos níveis 4, 8, 12, 16 e 19: aumente uma característica em 2, ou duas em 1 (máx. 20). Pela regra opcional de talentos, você pode abrir mão para pegar um talento." },
        { level: 5, name: "Ataque Extra", text: "Você pode atacar duas vezes, em vez de uma, ao usar a ação de Ataque no seu turno." },
        { level: 7, name: "Improved Extra Attack (opcional, 7º nível)", text: "Regra opcional. Substitui Ataque Extra e funciona com características que interagem com ele. Você ataca duas vezes na ação de Ataque. Ao chegar ao 7º nível de bender: ao usar a ação de Ataque, você pode conjurar um truque da lista de bender que conheça (tempo de conjuração de uma ação) no lugar de um dos ataques, no nível mais baixo (ex.: um bender de 11º nível que substitui um ataque por fire bolt causa 1d10 em vez de 3d10)." },
        { level: 11, name: "Primordial Form", text: "Como ação bônus, você incorpora um elemento com que tem afinidade. Por 1 minuto (ou até cair inconsciente), você pode conjurar magias de 1º nível daquele elemento mesmo sem tê-las preparadas e sem gastar espaço (essas magias não sofrem upcast automático de afinidade repetida). Benefício por elemento:\n• Ar (Untouchable): resistência a dano de concussão, cortante e perfurante.\n• Fogo (Alight): ao fim de cada turno seu, criaturas à sua escolha a até 3 m sofrem dano de fogo = seu modificador de conjuração (mín. 1).\n• Terra (Solid): +2 de CA.\n• Água (Fluid): reserva de vitalidade = 5 × seu nível de bender; ao fim de cada turno, você pode fazer até três criaturas à sua escolha a até 3 m recuperarem 5 PV (sem ação), gastando o equivalente da reserva.\n1×/descanso longo. A partir do 17º nível, enquanto na Primordial Form você pode conjurar magias de 2º nível ou menor sem gastar espaço." },
        { level: 18, name: "Primordial Avatar", text: "Como ação, você se torna uma encarnação primordial da sua forma mortal. Você ganha 50 PV temporários e benefícios pelas suas afinidades, por 10 minutos ou até cair inconsciente. 1×/descanso longo. Você ganha um benefício para cada afinidade que tem (nova ou repetida), pela tabela do elemento:\n\nAR — 1: deslocamento +4,5 m. 2: deslocamento de voo de 18 m. 3: imune a dano de trovão e às condições agarrado e imobilizado; 1×/turno pode conjurar misty step sem gastar espaço (sem ação; não se incapacitado). 4: deslocamento de caminhada e de voo +4,5 m cada (total +9 m de caminhada, voo de 22,5 m); sob efeito de freedom of movement.\n\nTERRA — 1: nova CA = 14 + seu modificador de conjuração. 2: imune a dano de ácido e sucesso automático em TR contra ser movido à força ou derrubado. 3: 3d6 PV temporários no início de cada turno. 4: pode conjurar shield ou shielding word* sem gastar espaço nem reação (não se incapacitado); depois disso, não de novo até o início do seu próximo turno.\n\nFOGO — 1: no primeiro acerto de cada turno, +2d6 de dano de fogo ou elétrico (à escolha ao ganhar o benefício). 2: imune a dano de fogo. 3: pode conjurar hellish rebuke no 2º nível sem gastar espaço nem reação (não se incapacitado); depois disso, não de novo até o início do seu próximo turno. 4: sob efeito de fire shield (só warm shield).\n\nÁGUA — 1: deslocamento de natação de 18 m. 2: 1×/turno pode usar a ação Ajudar mirando qualquer criatura visível a até 9 m (sem ação). 3: imune a dano de frio. 4: quando uma criatura visível a até 9 m passa num TR ou acerta um ataque, você pode forçá-la a rerrolar o d20 e usar o menor resultado (sem ação); depois disso, não de novo até o início do seu próximo turno; sob efeito de true seeing." }
      ],
      extraSections: [
        { title: "Lista de Magias do Bender — AR", text: "Truques: Concussion*, Dash Strike*, Smokescreen*, Sotten Descent*.\n1º: color spray, expeditious retreat, feather fall, fog cloud, hideous laughter, jump, longstrider, Repulsing Palm*, thunderwave, unseen servant, Wind Drake*.\n2º: blur, Calm Air*, enhance ability (só Cat's Grace), gust of wind, levitate, mirror image, misty step, Redirect Lightning*, shatter, silence, Wind Strike*.\n3º: call lightning, Depth Charge*, Flashbang*, fly, gaseous form, haste, Switcheroo*, wind wall.\n4º: Cloud Stride*, conjure minor elementals (só ar), dimension door, freedom of movement, hallucinatory terrain, Sundering Sky*, Tempestuous Transformation*.\n5º: conjure elemental (só ar), Cyclone*, Iminada's Umigiri*, mislead, planar binding (só elemental do ar), Raiko's Rending Rage*." },
        { title: "Lista de Magias do Bender — TERRA", text: "Truques: acid splash, Earthen Fist*, Reinforce*, resistance, shillelagh.\n1º: Earthen Uppercut*, entangle, false life, floating disk, goodberry, grease, shield.\n2º: acid arrow, barkskin, Calm Earth*, Earthskin*, enhance ability (só Bear's Endurance ou Bull's Strength), Protection*, protection from poison, Shielding Word*, Snakebite*, spike growth.\n3º: Acid Rain*, meld into stone, Mireball*.\n4º: conjure minor elementals (só terra), Rock Tomb*, Slatestorm*, Steelskin*, stone shape, stoneskin.\n5º: conjure elemental (só terra), Eruption*, Nomi's Adamantine Carapace*, passwall (só pedra), planar binding (só elemental da terra), wall of stone." },
        { title: "Lista de Magias do Bender — FOGO", text: "Truques: dancing lights, fire bolt, Incendiary Strike*, light, minor illusion, shocking grasp, Spark*.\n1º: burning hands, color spray, faerie fire, Flash*, hellish rebuke, heroism, Inner Flame*, silent image.\n2º: Calm Flames*, continual flame, enhance ability (só Eagle's Splendor), flame blade, flaming sphere, heat metal, invisibility.\n3º: daylight, fireball, Flaming Tiger Leap*, haste, lightning bolt, major image.\n4º: conjure minor elementals (só fogo), fire shield (só warm), greater invisibility, Lion's Roar*, wall of fire.\n5º: conjure elemental (só fogo), flame strike, Feverskin*, Magatsuchi's Lantern*, planar binding (só elemental do fogo), Raiko's Rending Rage*, Redirect Lightning*, scorching ray, Wanyudo's Fury*." },
        { title: "Lista de Magias do Bender — ÁGUA", text: "Truques: guidance, Pins & Needles*, ray of frost, spare the dying, Water Whip*.\n1º: charm person, command, create or destroy water, detect poison and disease, Ice Moon*, purify food & drink.\n2º: aid, Bloodweave*, calm emotions, Calm Waters*, Endoleech*, enhance ability (só Owl's Wisdom), hold person, lesser restoration, Mirror of Reflection*, Riptide*, suggestion.\n3º: Acid Rain*, clairvoyance, Extract Shirikodama*, hypnotic pattern, Ryoko's Revelation*, sleet storm, slow, The Bends*, water breathing, water walk, Water Wyrm*.\n4º: Cage of Frozen Tears*, Cloud Stride*, compulsion, conjure minor elementals (só água), control water, divination, ice storm.\n5º: Bakuryu's Blessed Blizzard*, cone of cold, conjure elemental (só água), dominate person, hold monster, Iminada's Umigiri*, planar binding (só elemental da água), scrying, White Water Wall*.\n\n(* = magia nova do capítulo de Magias de Reinos Yokai.)" }
      ]
    },

    {
      id: "yr-tamer", name: "Tamer (Domador)", source: "homebrew", page: 191, hitDie: "d8",
      primaryAbility: "Sabedoria, Inteligência ou Carisma (à escolha), depois Constituição",
      saves: ["Constituição", "Carisma"],
      armor: "Armadura leve, armadura média, escudos",
      weapons: "Armas simples, redes",
      tools: "Um tipo de ferramentas de artesão ou um instrumento musical à escolha",
      skillChoices: 2,
      skillList: ["Lidar com Animais", "Intuição", "Medicina", "Natureza", "Percepção", "Persuasão"],
      startEquipment: "(a) cota de escamas ou (b) armadura de couro; uma arma simples corpo a corpo, uma rede e um escudo; uma besta leve e 20 virotes; (a) pacote de masmorra ou (b) de explorador. Alternativamente, 5d4 × 10 po.",
      subclassLevel: 3, subclassLabel: "Training Paradigm",
      spellcasting: {
        type: "Conhecida (meio-conjurador)", ability: "Inteligência, Sabedoria ou Carisma (escolha no 1º nível)",
        ritual: false, focus: "o receptáculo (vessel) de uma criatura",
        note: "Conjuração a partir do 2º nível. Progressão de meio-conjurador (espaços de 1º a 5º nível, como patrulheiro/paladino). Lista de magias do tamer na p. 196 do livro."
      },
      hp: "1º nível: 8 + mod. Constituição. Níveis seguintes: 1d8 (ou 5) + mod. Constituição por nível de tamer.",
      tamerTable: [
        ["1", "+2", "Pocket Familiar, Monster Trainer, Soul Bond, Tame Creature"],
        ["2", "+2", "Bolster, Psychic Bond, Conjuração"],
        ["3", "+2", "Pocket Family, Training Paradigm (subclasse)"],
        ["4", "+2", "Aumento no Valor de Habilidade"],
        ["5", "+3", "Multiattack, Malleable Presence"],
        ["6", "+3", "Alpha Strike, Wilful Blows"],
        ["7", "+3", "Pocket Family (2), Característica de Training Paradigm"],
        ["8", "+3", "Aumento no Valor de Habilidade"],
        ["9", "+4", "—"],
        ["10", "+4", "Característica de Training Paradigm"],
        ["11", "+4", "Pocket Family (3)"],
        ["12", "+4", "Aumento no Valor de Habilidade"],
        ["13", "+5", "Switcheroo"],
        ["14", "+5", "Característica de Training Paradigm"],
        ["15", "+5", "Pocket Family (4)"],
        ["16", "+5", "Aumento no Valor de Habilidade"],
        ["17", "+6", "Magnificent Presence"],
        ["18", "+6", "Característica de Training Paradigm (melhora a de 7º)"],
        ["19", "+6", "Aumento no Valor de Habilidade, Pocket Family (5)"],
        ["20", "+6", "Summon the Horde"]
      ],
      features: [
        { level: 1, name: "Pocket Familiar", text: "Você se vincula a um companheiro que o acompanha e luta ao seu lado. Escolha uma criatura Pequena ou menor de ND ½ ou menor que não seja Humanoide, Gigante ou enxame. Ao virar companheiro, ela tem PV máximo igual à média dos seus Dados de Vida e não pode conjurar magias. O companheiro obedece a você e é amistoso com você e seus aliados. Receptáculo (vessel): quando não invocado, o companheiro existe dentro de um receptáculo mágico de seu desenho (crânio pintado, ovo cravejado, esfera de cristal), onde tem cobertura total, não é afetado por áreas externas e fica em estase (não come/bebe/dorme/respira; imune a veneno e doença). Um companheiro a 0 PV é estabilizado ao entrar no receptáculo. Se o receptáculo se quebra ou o companheiro é solto, ele deixa de ser companheiro. Invocar: como ação, invoque o companheiro de um receptáculo num espaço desocupado visível a até 9 m (ou a 1,5 m). Dispense-o (a até 9 m) como ação bônus ou ação. É preciso segurar o receptáculo. Só um companheiro invocado por vez. Combate: o companheiro compartilha sua iniciativa mas age logo após você. Move-se e usa reações sozinho, mas só toma a ação Esquivar no turno, a menos que você gaste uma ação/ação bônus para comandá-lo. Se você está incapacitado, ele age livremente. Não pode usar Ataque Múltiplo até você ter 5º nível de tamer. Descanso: o companheiro ganha os benefícios de um descanso longo quando você termina um; se tiver ao menos 1 PV, recupera todos os PV. Não gasta os próprios Dados de Vida em descanso curto (veja Soul Bond). Itens: armaduras, barding e armas podem ser equipados; o companheiro precisa de proficiência para usá-los plenamente. Pode vincular-se a até 3 itens (1 h por item)." },
        { level: 1, name: "Soul Bond", text: "Companheiros fazem testes de resistência contra a morte, morrem e podem ser revividos como qualquer personagem. Um companheiro estabilizado fica inconsciente até recuperar PV ou você terminar um descanso longo. Companheiros estáveis com 0 PV ao fim de um descanso longo recuperam metade do PV máximo. Você tem uma reserva de cura igual a cinco vezes seu nível de tamer, que se renova em descanso longo. Ao terminar um descanso curto, você pode gastar dessa reserva para restaurar PV entre seus companheiros até o máximo restante." },
        { level: 1, name: "Monster Trainer", text: "Conforme você sobe de nível, seus companheiros ficam mais poderosos. Eles usam o SEU bônus de proficiência em vez do próprio, potencialmente aumentando ataque, TR, perícias e CDs. Treinamento: sempre que você ganha um ASI por subir de nível de tamer, cada companheiro ganha 1 Dado de Vida adicional (aumente o PV máximo rolando esse dado + mod. Con do companheiro, mín. 0). Além disso, a cada nível acima do 1º nesta classe, cada companheiro vinculado ganha uma melhoria da tabela Companion Improvement Training." },
        { level: 1, name: "Tame Creature", text: "Você pode domar uma criatura Pequena ou menor de ND ½ ou menor (o tamanho e ND máximos aumentam com o nível — veja a tabela Tamer Companion Summary, p. 195). Receptáculo: preparar um receptáculo leva 8 horas e componentes valendo em po ao menos cem vezes o ND da criatura-alvo. Domar: como ação, arremesse um receptáculo vazio numa criatura visível a até 9 m; ela deve ter sucesso num TR de Carisma contra sua CD de magia de tamer ou fica presa. A criatura tem sucesso automático se: for Humanoide/Gigante/enxame; for maior que seu tamanho máximo de companheiro; tiver ND maior que o seu máximo; tiver ND maior do que o receptáculo captura; ou tiver mais da metade dos PV. Se não tem sucesso automático e está com menos de dez PV ou um quarto dos PV, falha automaticamente. Uma criatura que falha fica presa e vira companheiro no próximo descanso longo. Traços Perdidos: ao virar companheiro, a criatura perde do bloco de estatísticas — conjuração de magias; ações que criam/invocam outras criaturas; Regeneração, Rejuvenescimento e Resistência Lendária; efeitos que restauram PV (salvo usos limitados por dia); ações lendárias, traços míticos e opções relacionadas; ações e efeitos de covil." },
        { level: 2, name: "Bolster", text: "Enquanto seu companheiro está a até 30 m de você e você segura o receptáculo dele (ou o segura com ele dentro), você pode gastar uma ação e um espaço de magia para restaurar ao companheiro PV iguais ao seu modificador de habilidade de conjuração (mín. 1) + 2d4 por nível do espaço gasto." },
        { level: 2, name: "Psychic Bond", text: "Enquanto seu companheiro está a até 30 m, você se comunica telepaticamente com ele. Como ação, você pode ver pelos olhos e ouvir o que ele ouve até o início do seu próximo turno, ganhando seus sentidos especiais (fica cego e surdo quanto aos próprios sentidos). Troca de magias: enquanto o companheiro está invocado, a até 30 m, e você segura o receptáculo, magias que ele conhece são adicionadas às suas magias conhecidas; e ao conjurar magia de alcance pessoal ou toque, o companheiro pode ser o alvo." },
        { level: 2, name: "Conjuração", text: "A partir do 2º nível você conjura magias de tamer. Truques (2 no 2º nível, mais conforme a tabela). Espaços de magia como meio-conjurador. Magias conhecidas: 2 de 1º nível no 2º; a tabela indica quando aprende mais e você pode trocar uma ao subir de nível. Habilidade de conjuração: Inteligência, Sabedoria ou Carisma (escolha no 1º nível). CD de magia = 8 + prof. + mod.; ataque de magia = prof. + mod. Foco: o receptáculo de uma criatura." },
        { level: 3, name: "Pocket Family", text: "Você pode se vincular a dois, três, quatro, cinco ou seis companheiros nos níveis 3, 7, 11, 15 e 19, respectivamente. Companheiros podem ser Médios no 5º nível, Grandes no 11º e Enormes no 17º. Se você já está no máximo e se vincula a um novo, deve liberar um companheiro existente." },
        { level: 3, name: "Training Paradigm (subclasse)", text: "Escolha o tipo de Training Paradigm que segue. Concede características nos níveis 3, 7, 10 e 14. No 18º nível, a característica de 7º é melhorada. (Ex.: o Sensei, incluído neste compêndio.)" },
        { level: 4, name: "Aumento no Valor de Habilidade", text: "Nos níveis 4, 8, 12, 16 e 19: aumente uma característica em 2, ou duas em 1 (máx. 20)." },
        { level: 5, name: "Multiattack", text: "Ao usar uma ação bônus ou ação para comandar seu companheiro, você pode comandá-lo a usar a ação Ataque Múltiplo, se tiver uma." },
        { level: 5, name: "Malleable Presence", text: "Enquanto o companheiro está a até 30 m, você pode ordená-lo a mudar o comportamento em relação a uma criatura visível, como parte da ação/ação bônus de comando. Escolha Agressivo ou Cauteloso. No início de cada turno da criatura-alvo, por 1 min, ela faz um TR de Sabedoria contra sua CD de magia de tamer se estiver a até 9 m do companheiro e puder vê-lo. Em falha, sofre o efeito associado até o início de seu próximo turno. Agressivo: desvantagem em ataques contra criaturas que não o companheiro. Cauteloso: desvantagem em ataques contra o companheiro se houver outra criatura hostil ao atacante a até 1,5 m dele. Recarrega em descanso curto ou longo." },
        { level: 6, name: "Alpha Strike", text: "Como parte da ação para invocar um companheiro, você pode comandá-lo a tomar uma ação do bloco de estatísticas ou outra ação, que ele executa no turno dele. Usos = seu mod. de habilidade de conjuração (mín. 1); recupera em descanso longo." },
        { level: 6, name: "Wilful Blows", text: "Os ataques dos seus companheiros contam como mágicos para superar resistência e imunidade a ataques e dano não mágicos." },
        { level: 13, name: "Switcheroo", text: "Enquanto você e seu companheiro estão a até 30 m um do outro, você pode usar uma ação bônus — ou uma reação quando você ou o companheiro é alvo de um ataque de um atacante visível — para trocar de lugar magicamente com o companheiro. Se feito como reação, a criatura que aparece no espaço do alvo torna-se o novo alvo do ataque. Usos = seu mod. de habilidade de conjuração (mín. 1); recupera em descanso longo." },
        { level: 17, name: "Magnificent Presence", text: "Enquanto o companheiro está a até 30 m, você pode ordená-lo a mudar de comportamento como parte da ação/ação bônus de comando: Provoking Poise (por 1 min, criaturas hostis ao companheiro a até 4,5 m dele têm desvantagem em ataques contra outras criaturas) ou Shrinking Violet (por 1 min, criaturas hostis ao companheiro têm desvantagem em ataques contra ele se houver outra criatura hostil ao atacante a até 4,5 m dele). Recarrega em descanso longo." },
        { level: 20, name: "Summon the Horde", text: "Como ação, você pode invocar companheiros adicionais que permanecem por 1 min (máx. três companheiros invocados ao mesmo tempo por esta característica). Como ação nos turnos seguintes, você emite comandos mentais a todos de uma vez. Após o minuto, todos menos um (à sua escolha) voltam aos receptáculos e uma onda de letargia o toma: você não pode se mover ou agir até o fim do seu próximo turno. Recarrega em descanso longo." }
      ],
      companionTraining: {
        title: "Companion Improvement Training (a cada nível acima do 1º)",
        rows: [
          ["Speed", "Aumente um deslocamento existente em 4,5 m, até no máximo 150% do deslocamento base da criatura (arredondado para o incremento de 1,5 m mais próximo)."],
          ["Toughen Up", "O companheiro ganha um Dado de Vida adicional, aumentando o PV máximo (role o dado + mod. Con do companheiro, mín. 0)."],
          ["Ability Boost", "Aumente uma característica do companheiro em 1, até no máximo 20."],
          ["Go For the Throat", "O companheiro ganha +1 em ataque e dano com armas naturais / ataques desarmados. (Cada companheiro pode usar 1×; 2× a partir do 5º nível; 3× a partir do 13º.)"],
          ["Survival Instincts", "O companheiro ganha proficiência em um teste de resistência."],
          ["War Training", "O companheiro ganha proficiência com um tipo de armadura ou duas armas. (Não pode ganhar armadura média/pesada sem antes as mais leves.)"]
        ]
      }
    }
  ]);
})();
