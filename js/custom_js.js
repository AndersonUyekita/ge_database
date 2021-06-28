// Fun��o para calcula a diferen�a entre a data de publica��o e de leitura.
function calcDate(date) {
   
   // Inicializa��o das vari�veis.
   var date1 = new Date(date);  // Publicacao -> 1: Janeiro, 2: Fevereiro ... 12: Dezembro
   var date2 = new Date();            // HOJE
    
   // To calculate the time difference of two dates
   var Difference_In_Time = date2.getTime() - date1.getTime();
    
   // To calculate the no. of days between two dates
   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    
   // Para conferir os dias! Tire o coment�rio para avaliar.
   //document.write(Difference_In_Days)
    
   // HOJE
   if (Math.floor(Difference_In_Days) == 0) {
      return "Atualizado hoje."
      
   // ONTEM
   } else if (Math.floor(Difference_In_Days) == 1) {
      return "Atualizado ontem."

   // Dias atr�s
   } else if (Math.floor(Difference_In_Days) > 1 && Math.floor(Difference_In_Days) < 30) {
      return "\u00DAltima atualiza\u00E7\u00E3o h\u00E1 " + Math.floor(Difference_In_Days) + " dias."
      
   // 1 M�S atr�s
   } else if (Math.floor(Difference_In_Days) >= 30 && Math.floor(Difference_In_Days) < 60) {
      return "\u00DAltima atualiza\u00E7\u00E3o h\u00E1 " + Math.floor(Difference_In_Days/30) + " m\u00E9s."
      
   // V�rios Meses atr�s
   } else if (Math.floor(Difference_In_Days) >= 60 && Math.floor(Difference_In_Days) < 365) {
      return "\u00DAltima atualiza\u00E7\u00E3o h\u00E1 " + Math.floor(Difference_In_Days/30) + " meses."
   
   // Primeiro ano.
   } else if (Math.floor(Difference_In_Days) >= 365 && Math.floor(Difference_In_Days) <= 729) {
   	return "\u00DAltima atualiza\u00E7\u00E3o h\u00E1 " + Math.floor(Difference_In_Days/360) + " ano"
   
   // Demais anos.
   } else {
   	return "\u00DAltima atualiza\u00E7\u00E3o h\u00E1 " + Math.floor(Difference_In_Days/360) + " anos"}
}