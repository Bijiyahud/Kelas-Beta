function cariLurahBaru(calons) {
  let cariLurah = 1;
  let min = calons[1];
  
  for (let i = 1; i < calons.length; i++) {
    if (calons[i] > min & cariLurah < calons[i] - min) {
      cariLurah = calons[i] - min;
    }
    if (calons[i] < min) {
      min = calons[i]; 
    }
  }
  return cariLurah;
  }
  
  console.log(cariLurahBaru([1, 2, 3, 2, 1, 3, 2, 3])); // pemilihan ulang
  console.log(cariLurahBaru([1, 2, 3, 2, 1, 3, 3])); // 3
  console.log(cariLurahBaru([1])); // 1
  console.log(cariLurahBaru)
