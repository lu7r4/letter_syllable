import { useState, useEffect } from 'react';

function RandomConsonant({ arrConsonant, vowel, selectConsonant }) {
  const prohibitedSyllables = ["чя", "щя", "чю", "щю", "ця", "жы", "шы", "чы", "шя"];
  let randomC = Math.floor(Math.random() * arrConsonant.length);
  let newConsonant = arrConsonant[randomC];

  while (prohibitedSyllables.some(syllable => (newConsonant.toLowerCase() + vowel.toLowerCase()).includes(syllable))) {
    randomC = Math.floor(Math.random() * arrConsonant.length);
    newConsonant = arrConsonant[randomC];
  }

  selectConsonant(newConsonant);

  return null;
}

function RandomVowel({ arrVowel, consonant, selectVowel }) {
  const prohibitedSyllables = ["чя", "щя", "чю", "щю", "ця", "жы", "шы", "чы", "шя"];
  let randomV = Math.floor(Math.random() * arrVowel.length);
  let newVowel = arrVowel[randomV];

  while (prohibitedSyllables.some(syllable => (consonant.toLowerCase() + newVowel.toLowerCase()).includes(syllable))) {
    randomV = Math.floor(Math.random() * arrVowel.length);
    newVowel = arrVowel[randomV];
  }
  
  selectVowel(newVowel);

  return null;
}

function RandomLetters({ arrConsonant, arrVowel, consonant, vowel, selectConsonant, selectVowel }) {
  useEffect(() => {
    const prohibitedSyllables = ["ЧЯ", "ЩЯ", "ЧЮ", "ЩЮ", "ЦЯ", "ЖЫ", "ШЫ", "ЧЫ", "ШЯ"];
    if ((consonant.toString() + vowel.toString()).indexOf(prohibitedSyllables.join("|")) !== -1) {
      selectConsonant(null); // обнуляем буквы, чтобы компоненты RandomConsonant и RandomVowel сгенерировали новые
      selectVowel(null);
    }
  }, [consonant, vowel, selectConsonant, selectVowel]);

  return (
    <>
      <RandomConsonant arrConsonant={arrConsonant} vowel={vowel} selectConsonant={selectConsonant} />
      <RandomVowel arrVowel={arrVowel} consonant={consonant} selectVowel={selectVowel} />
    </>
  );
}

export { RandomLetters };
