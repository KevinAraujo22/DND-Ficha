/* ARMADURAS — D&D básico (SRD 5.1). Rótulos traduzidos. */
(function () {
  "use strict";
  window.DND.register("armor", [
    { id: "ar-acolchoada", name: "Acolchoada (Padded)", source: "srd", category: "Leve", ac: "11 + mod. Destreza", stealth: "Desvantagem", strength: "—", cost: "5 po", weight: "4 kg" },
    { id: "ar-couro", name: "Couro (Leather)", source: "srd", category: "Leve", ac: "11 + mod. Destreza", stealth: "—", strength: "—", cost: "10 po", weight: "5 kg" },
    { id: "ar-couro-batido", name: "Couro batido (Studded leather)", source: "srd", category: "Leve", ac: "12 + mod. Destreza", stealth: "—", strength: "—", cost: "45 po", weight: "6,5 kg" },
    { id: "ar-peles", name: "Peles (Hide)", source: "srd", category: "Média", ac: "12 + mod. Destreza (máx. 2)", stealth: "—", strength: "—", cost: "10 po", weight: "6 kg" },
    { id: "ar-gibao-peitoral", name: "Gibão de peles/Peitoral (Chain shirt)", source: "srd", category: "Média", ac: "13 + mod. Destreza (máx. 2)", stealth: "—", strength: "—", cost: "50 po", weight: "10 kg" },
    { id: "ar-escamas", name: "Cota de escamas (Scale mail)", source: "srd", category: "Média", ac: "14 + mod. Destreza (máx. 2)", stealth: "Desvantagem", strength: "—", cost: "50 po", weight: "22,5 kg" },
    { id: "ar-peitoral-placa", name: "Peitoral (Breastplate)", source: "srd", category: "Média", ac: "14 + mod. Destreza (máx. 2)", stealth: "—", strength: "—", cost: "400 po", weight: "10 kg" },
    { id: "ar-meia-armadura", name: "Meia armadura (Half plate)", source: "srd", category: "Média", ac: "15 + mod. Destreza (máx. 2)", stealth: "Desvantagem", strength: "—", cost: "750 po", weight: "20 kg" },
    { id: "ar-aneis", name: "Cota de anéis (Ring mail)", source: "srd", category: "Pesada", ac: "14", stealth: "Desvantagem", strength: "—", cost: "30 po", weight: "20 kg" },
    { id: "ar-malha", name: "Cota de malha (Chain mail)", source: "srd", category: "Pesada", ac: "16", stealth: "Desvantagem", strength: "Força 13", cost: "75 po", weight: "27,5 kg" },
    { id: "ar-laminas", name: "Cota de lâminas (Splint)", source: "srd", category: "Pesada", ac: "17", stealth: "Desvantagem", strength: "Força 15", cost: "200 po", weight: "30 kg" },
    { id: "ar-placas", name: "Armadura de placas (Plate)", source: "srd", category: "Pesada", ac: "18", stealth: "Desvantagem", strength: "Força 15", cost: "1.500 po", weight: "32,5 kg" },
    { id: "ar-escudo", name: "Escudo (Shield)", source: "srd", category: "Escudo", ac: "+2", stealth: "—", strength: "—", cost: "10 po", weight: "3 kg" }
  ]);
})();
