# Reinos Yokai — Ficha & Compêndio D&D 5e

Aplicação estática (sem build) que roda no navegador: **ficha de personagem** + **compêndio de seleção**
(raças, classes, subclasses, antecedentes, talentos, equipamento, magias e itens mágicos) para
**D&D 5e** e o suplemento *Ryoko's Guide to the Yokai Realms*.

## Recursos

- Compêndio com filtro de fonte: **D&D básico** ↔ **Reinos Yokai** ↔ **Todos**, com busca.
- Criador de personagem em 7 etapas (classe, espécie, antecedente, atributos, equipamento,
  magias com limite por classe, detalhes).
- Ficha com **cálculo automático** de Iniciativa, CA e Percepção Passiva, perícias e testes de resistência.
- Botão **Subir de nível** na tela principal: adiciona as características de classe/subclasse do novo
  nível, sinaliza traços raciais que passam a valer, pede a subclasse no nível de destravar e uma
  nova magia (para conjuradores), e atualiza bônus de proficiência e espaços de magia.
- Tudo salvo no `localStorage` do navegador. Exporta/importa a ficha em JSON.

## Como rodar

Abra `index.html` no navegador (funciona via `file://`, sem servidor).
Para desenvolvimento com recarga limpa de cache, sirva a pasta:

```bash
python -m http.server 8777
```

e acesse `http://localhost:8777`.

## Estrutura

```
index.html
assets/css/styles.css
js/
  data/          # coleções do compêndio — cada arquivo chama DND.register(...)
  sheet.js       # lógica da ficha
  compendium.js  # páginas de seleção
  creator.js     # assistente de criação
  levelup.js     # botão "Subir de nível"
  app.js         # boot + navegação
```

## Conteúdo e direitos

- O conteúdo de **D&D básico** vem do **SRD 5.1** (Wizards of the Coast), disponível sob
  **CC-BY-4.0**.
- O conteúdo de **Reinos Yokai** foi transcrito de *Ryoko's Guide to the Yokai Realms*
  (Loot Tavern) a partir de um exemplar próprio, apenas para uso pessoal nas mesas do autor.
  Esses arquivos **não são material de referência oficial nem são destinados a redistribuição**;
  quem quiser usar a mesa precisa ter o próprio exemplar do suplemento.
