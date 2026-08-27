/* ============================================================
   ANTECEDENTES — D&D 5e básico. O SRD 5.1 traz apenas o
   Acólito; os demais aqui são versões genéricas amplamente
   usadas (perícias, ferramentas, idiomas e característica).
   ============================================================ */
(function () {
  "use strict";
  window.DND.register("backgrounds", [
    {
      id: "srd-acolito", name: "Acólito", source: "srd",
      flavor: "Você passou a vida a serviço de um templo, agindo como intermediário entre o mundo material e o divino.",
      skills: "Intuição e Religião", tools: "—", language: "Dois idiomas à escolha",
      equipment: "Símbolo sagrado, livro de preces ou rosário, 5 varetas de incenso, vestimentas, roupas comuns, bolsa com 15 po.",
      optionalFeature: { name: "Abrigo dos Fiéis", text: "Você e seus companheiros recebem cura e cuidados gratuitos num templo, santuário ou local da sua fé (você deve prover componentes materiais). Quem compartilha da sua religião o sustentará (mas não com estilo de vida melhor que modesto)." }
    },
    {
      id: "srd-criminoso", name: "Criminoso", source: "srd",
      flavor: "Você é um infrator experiente com histórico de quebrar a lei, com contatos no submundo.",
      skills: "Enganação e Furtividade", tools: "Um tipo de jogo, ferramentas de ladrão", language: "—",
      equipment: "Pé de cabra, roupas escuras comuns com capuz, bolsa com 15 po.",
      optionalFeature: { name: "Contato Criminoso", text: "Você tem um contato confiável que faz a ponte com uma rede de outros criminosos; você sabe enviar mensagens a ele mesmo a grandes distâncias." }
    },
    {
      id: "srd-soldado", name: "Soldado", source: "srd",
      flavor: "A guerra foi sua vida. Você treinou, serviu numa hierarquia militar e viu combate.",
      skills: "Atletismo e Intimidação", tools: "Um tipo de jogo, veículos terrestres", language: "—",
      equipment: "Insígnia de patente, troféu de um inimigo caído, baralho ou conjunto de dados de osso, roupas comuns, bolsa com 10 po.",
      optionalFeature: { name: "Patente Militar", text: "Soldados leais à sua antiga organização ainda reconhecem sua autoridade; você pode invocar sua patente para obter acesso a acampamentos e fortalezas aliadas." }
    },
    {
      id: "srd-sabio", name: "Sábio", source: "srd",
      flavor: "Você passou anos aprendendo entre livros e pergaminhos, versado num campo de conhecimento.",
      skills: "Arcanismo e História", tools: "—", language: "Dois idiomas à escolha",
      equipment: "Frasco de tinta, pena, faca pequena, carta de um colega falecido com uma pergunta sem resposta, roupas comuns, bolsa com 10 po.",
      optionalFeature: { name: "Pesquisador", text: "Quando você tenta aprender ou lembrar de algo, se não sabe, geralmente sabe onde e de quem obter a informação (biblioteca, sábio, outro erudito)." }
    },
    {
      id: "srd-forasteiro", name: "Forasteiro (Outlander)", source: "srd",
      flavor: "Você cresceu nas terras selvagens, longe da civilização e de seus confortos.",
      skills: "Atletismo e Sobrevivência", tools: "Um instrumento musical", language: "Um idioma à escolha",
      equipment: "Cajado, armadilha de caça, troféu de um animal morto, roupas de viajante, bolsa com 10 po.",
      optionalFeature: { name: "Andarilho", text: "Memória excelente para mapas e geografia; você sempre lembra a disposição geral do terreno e encontra comida e água fresca para si e até cinco pessoas por dia no ermo." }
    },
    {
      id: "srd-nobre", name: "Nobre", source: "srd",
      flavor: "Você vem de uma família de posição e privilégio, criado com riqueza, poder e educação.",
      skills: "História e Persuasão", tools: "Um tipo de jogo", language: "Um idioma à escolha",
      equipment: "Roupas finas, anel de sinete, pergaminho de linhagem, bolsa com 25 po.",
      optionalFeature: { name: "Posição de Privilégio", text: "As pessoas presumem que você tem direito de estar onde está; você é bem-vindo em alta sociedade e pode obter audiência com nobres locais." }
    }
  ]);
})();
