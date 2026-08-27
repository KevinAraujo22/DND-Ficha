/* Perícias e atributos — referência usada pela ficha e pelo criador */
(function (root) {
  "use strict";
  var DND = root.DND || (root.DND = {});
  DND.ABILITIES = [
    { key: "for", name: "Força", en: "Strength" },
    { key: "des", name: "Destreza", en: "Dexterity" },
    { key: "con", name: "Constituição", en: "Constitution" },
    { key: "int", name: "Inteligência", en: "Intelligence" },
    { key: "sab", name: "Sabedoria", en: "Wisdom" },
    { key: "car", name: "Carisma", en: "Charisma" }
  ];
  DND.ABBR = { for: "FOR", des: "DES", con: "CON", int: "INT", sab: "SAB", car: "CAR" };
  DND.SKILLS = [
    { key: "acrobacia", name: "Acrobacia", ab: "des", en: "Acrobatics" },
    { key: "arcanismo", name: "Arcanismo", ab: "int", en: "Arcana" },
    { key: "atletismo", name: "Atletismo", ab: "for", en: "Athletics" },
    { key: "atuacao", name: "Atuação", ab: "car", en: "Performance" },
    { key: "enganacao", name: "Enganação", ab: "car", en: "Deception" },
    { key: "furtividade", name: "Furtividade", ab: "des", en: "Stealth" },
    { key: "historia", name: "História", ab: "int", en: "History" },
    { key: "intimidacao", name: "Intimidação", ab: "car", en: "Intimidation" },
    { key: "intuicao", name: "Intuição", ab: "sab", en: "Insight" },
    { key: "investigacao", name: "Investigação", ab: "int", en: "Investigation" },
    { key: "lidarAnimais", name: "Lidar com Animais", ab: "sab", en: "Animal Handling" },
    { key: "medicina", name: "Medicina", ab: "sab", en: "Medicine" },
    { key: "natureza", name: "Natureza", ab: "int", en: "Nature" },
    { key: "percepcao", name: "Percepção", ab: "sab", en: "Perception" },
    { key: "persuasao", name: "Persuasão", ab: "car", en: "Persuasion" },
    { key: "prestidigitacao", name: "Prestidigitação (Sleight of Hand)", ab: "des", en: "Sleight of Hand" },
    { key: "religiao", name: "Religião", ab: "int", en: "Religion" },
    { key: "sobrevivencia", name: "Sobrevivência", ab: "sab", en: "Survival" }
  ];
})(window);
